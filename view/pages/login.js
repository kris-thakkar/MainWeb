import React from "react";
import Link from "next/link";
import Util from "../util/utility";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otp: "",
      validNumber: "",
      validOtp: "",
      popupBox: false,
    };
    this.mobileRef = React.createRef();
    this.otpRef = React.createRef();
  }

  submitOtp = async (event) => {
    event.preventDefault();
    const mobile = this.mobileRef.current.value;
    const otp = this.otpRef.current.value;

    //Make API-Call
    // await Util.api_call("", {});
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const mobile = this.mobileRef.current.value;

    // Mobile ====
    if (mobile !== "") {
      let validateMobile = Util.validateMobile(mobile);
      if (validateMobile == false) {
        this.setState({
          validNumber: "Enter Valid Mobile Number",
        });
      } else {
        this.setState({
          validNumber: "",
          popupBox: true,
          mobile: mobile,
        });
      }
    }
  };

  render() {
    return (
      <>
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Mobile:</label>
              <input
                ref={this.mobileRef}
                type="text"
                name="mobile"
                // autoComplete="off"
              />
            </div>
            <button type="submit">Get OTP</button>
            <Link href="/signup">
              <a>
                <div>Don't have an account? SignUp</div>
              </a>
            </Link>
          </form>
          {this.state.popupBox == true ? (
            <div>
              <h2>OTP Box</h2>
              <input type="text" name="otp" ref={this.otpRef} />
              <input
                type="submit"
                onClick={this.submitOtp}
                value="Submit OTP"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
