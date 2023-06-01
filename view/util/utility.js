import { DateTime } from "luxon";
class UtilC {
  constructor() {
    DateTime.local().setZone("Asia/Kolkata");
    this.VALIDATION_TYPES = {
      STRING: "STRING",
      EMAIL: "EMAIL",
      OTP: "OTP",
      MOBILE: "MOBILE",
      SLUG: "SLUG",
      PINCODE: "PINCODE",
    };
  }

  safeTrim(x) {
    return (x + "").replace(/^\s+|\s+$/gm, "");
  }

  optionsMaker(data, valueIdentifier, labelIdentifier, pre = [], post = []) {
    return [
      ...pre,
      ...data.map((d) => ({
        value: d[valueIdentifier],
        label: d[labelIdentifier],
      })),
      ...post,
    ];
  }

  validateInput(value, validationType) {
    if (validationType === undefined) {
      validationType = "STRING";
    }
    validationType = validationType.toUpperCase();
    switch (validationType) {
      case this.VALIDATION_TYPES.EMAIL:
        return this.validateEmail(value);

      case this.VALIDATION_TYPES.OTP:
        return this.validateOTP(value);

      case this.VALIDATION_TYPES.MOBILE:
        return this.validateMobile(value);

      case this.VALIDATION_TYPES.SLUG:
        return this.validateSlug(value);

      case this.VALIDATION_TYPES.PINCODE:
        return this.validatePincode(value);

      default:
        return this.validateString(value);
    }
  }

  validatePincode(value) {
    if (value == "") {
      return false;
    }
    if (parseInt(value) == value) {
      if (parseInt(value) >= 100000 && parseInt(value) <= 999999) {
        return true;
      }
    }
    return false;
  }

  validateSlug(value) {
    if (value == "") {
      return false;
    }
    return value == this.slugify(value);
  }

  validateString(x) {
    if (x == undefined) {
      return false;
    } else if (this.safeTrim(x) == "") {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return re.test(email);
  }
  validateOTP(otp) {
    otp = otp.replace(/ /g, "");
    if (otp.length > 6) {
      return false;
    }
    var re = /\d{6}/;
    return re.test(otp);
  }
  validateMobile(mobile) {
    mobile = mobile.replace(/ /g, "");
    if (mobile.length > 10) {
      return false;
    }
    var re = /\d{10}/;
    return re.test(mobile);
  }
  slugify(str) {
    str = str.replace(/&/g, "and");
    var strs = [];
    var temp = str.split("/");
    for (var str2 of temp) {
      strs.push(
        str2
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
      );
    }
    return strs.join("/");
  }

  api_call(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(data),
      })
        .then(
          function (res) {
            if (res.status == 404) {
              resolve({
                success: false,
                statusCode: res.status,
                statusMessage: "API not found",
                data: {},
              });
            }
            if (res.status == 500) {
              resolve({
                success: false,
                statusCode: res.status,
                statusMessage: "Something went wrong",
                data: {},
              });
            }
            if (res.status === 401) {
              reject(res.status);
              return;
            }
            return res.json();
          }.bind(this)
        )
        .then((res) => {
          resolve({
            success: res.success,
            statusCode: parseInt(res.statusCode),
            statusMessage: res.statusMessage,
            data: res.data,
          });
        })
        .catch(() => {
          reject();
        });
    });
  }
}

const Util = new UtilC();
export default Util;
