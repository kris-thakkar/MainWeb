import Link from "next/link";
import React from "react";
import Util from "../util/utility";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      checkbox: false,
      imageFile: "",
      invalidName: "",
      invalidMobile: "",
      invalidEmail: "",
      invalidShop: "",
      invalidArea: "",
      invalidPincode: "",
      invalidWorkingHours: "",
      invalidVisitingCharge: "",
      renderAdditionalForm: false,
    };
    this.nameRef = React.createRef();
    this.mobileRef = React.createRef();
    this.emailRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.shopRef = React.createRef();
    this.areaRef = React.createRef();
    this.pincodeRef = React.createRef();
    this.workingHoursRef = React.createRef();
    this.visitingChargeRef = React.createRef();
    this.occupationRef = React.createRef();
    this.profilePictureRef = React.createRef();
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    if (name == "checkbox" && value == true) {
      this.setState({
        renderAdditionalForm: true,
      });
    } else if (name == "checkbox" && value == false) {
      this.setState({
        renderAdditionalForm: false,
      });
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value;
    const mobile = this.mobileRef.current.value;
    const email = this.emailRef.current.value;
    const checkbox = this.checkboxRef.current.checked;
    const shop = checkbox == true ? this.shopRef.current.value : "";
    const area = checkbox == true ? this.areaRef.current.value : "";
    const pincode = checkbox == true ? this.pincodeRef.current.value : "";
    const workingHours =
      checkbox == true ? this.workingHoursRef.current.value : 0;
    const visitingCharge =
      checkbox == true ? this.visitingChargeRef.current.value : 0;

    const image = this.profilePictureRef.current.files[0].name;

    let body = {
      name: name,
      mobile: mobile,
      email: email,
      checkbox: checkbox,
      shop: shop,
      area: area,
      pincode: pincode,
      workingHours: workingHours,
      visitingCharge: visitingCharge,
      image : image
    };
    

    // Name =====================
    if (name !== "") {
      this.setState({ invalidName: false });
    } else {
      this.setState({ invalidName: true });
    }

    // Email =====================
    if (email !== "") {
      let validateEmail = Util.validateEmail(email);
      if (validateEmail == false) {
        this.setState({
          invalidEmail: "Enter valid Email Id",
        });
      } else {
        this.setState({
          invalidEmail: "",
        });
      }
    }

    // Mobile =====================
    let validateMobile = Util.validateMobile(mobile);
    if (validateMobile == false) {
      this.setState({
        invalidMobile: "Enter Valid Mobile Number",
      });
    } else {
      this.setState({
        invalidMobile: "",
      });
    }

    // Checkbox ====================
    if (checkbox == true) {
      this.setState({
        checkbox: true,
      });
    } else {
      this.setState({
        checkbox: false,
      });
    }

    if (checkbox == true) {
      // Shop ====================
      if (shop !== "") {
        this.setState({
          invalidShop: "",
        });
      } else {
        this.setState({
          invalidShop: "Enter Valid Shop Name",
        });
      }

      // Area ====================
      if (area !== "") {
        this.setState({
          invalidArea: "",
        });
      } else {
        this.setState({
          invalidArea: "Enter Valid Area",
        });
      }

      // Pincode ====================
      if (pincode !== "") {
        let validatePincode = Util.validatePincode(pincode);
        if (validatePincode == false) {
          this.setState({
            invalidPincode: "Enter Valid Pincode",
          });
        } else {
          this.setState({
            invalidPincode: "",
          });
        }
      }

      // Working Hours ====================
      if (workingHours !== "") {
        this.setState({
          invalidWorkingHours: "",
        });
      } else {
        this.setState({
          invalidWorkingHours: "Enter Valid Working Hours",
        });
      }

      // Visiting Charge ====================
      if (visitingCharge !== "") {
        this.setState({
          invalidVisitingCharge: "",
        });
      } else {
        this.setState({
          invalidVisitingCharge: "Enter Valid Visiting Charge",
        });
      }
    }

    //Make API-Call
    // await Util.api_call("", {});
  };

  render() {
    return (
      <>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <span style={{ color: "red" }}>*</span>Name:
              </label>
              <input
                ref={this.nameRef}
                type="text"
                name="name"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label>
                <span style={{ color: "red" }}>*</span>Mobile:
              </label>
              <input
                ref={this.mobileRef}
                type="text"
                name="mobile"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                ref={this.emailRef}
                type="text"
                name="email"
                onChange={this.handleInputChange}
              />
            </div>
            

            {this.state.renderAdditionalForm == true ? (
              <>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Shop Name:
                  </label>
                  <input
                    ref={this.shopRef}
                    type="text"
                    name="shopname"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Area:
                  </label>
                  <input
                    ref={this.areaRef}
                    type="text"
                    name="area"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Pincode:
                  </label>
                  <input
                    ref={this.pincodeRef}
                    type="text"
                    name="pincode"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Occupation:
                  </label>
                  <select
                    name="occupation"
                    ref={this.occupationRef}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option value="electrician">Electrician</option>
                    <option value="cleaning">Cleaning</option>
                  </select>
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Working Hours:
                  </label>
                  <input
                    ref={this.workingHoursRef}
                    type="text"
                    name="working hours"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Visiting Charge:
                  </label>
                  <input
                    ref={this.visitingChargeRef}
                    type="text"
                    name="visiting charge"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Profie Picture:</label>
                  <input
                    ref={this.profilePictureRef}
                    type="file"
                    accept="image/*"
                    name="profile picture"
                    onChange={this.handleInputChange}
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div>
              <label>
                <input
                  ref={this.checkboxRef}
                  type="checkbox"
                  name="checkbox"
                  onChange={this.handleInputChange}
                />
                Are you a Woker ?
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <Link href="/login">
              <a>
                <div>Already have an account ? Login</div>
              </a>
            </Link>
          </form>
        </div>
      </>
    );
  }
}
