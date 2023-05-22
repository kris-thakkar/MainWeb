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
      invalidMobile: "",
      invalidEmail: "",
    };
    this.nameRef = React.createRef();
    this.mobileRef = React.createRef();
    this.emailRef = React.createRef();
    this.checkboxRef = React.createRef();
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

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

    // Name =====================
    if (name == "") {
      this.setState({ name: true });
    } else {
      this.setState({ name: false });
    }

    // Email =====================
    let validateEmail = JetbroUtil.validateEmail(email);
    if (validateEmail == false) {
      this.setState({
        invalidEmail: "Enter valid Email Id",
      });
    } else {
      this.setState({
        invalidEmail: "",
      });
    }

    // Mobile =====================
    let validateMobile = JetbroUtil.validateMobile(mobile);
    if (validateMobile == false) {
      this.setState({
        invalidMobile: "Enter Valid Mobile Number",
      });
    } else {
      this.setState({
        invalidMobile: "",
      });
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
              <label>Name:</label>
              <input
                ref={this.nameRef}
                type="text"
                name="name"
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Mobile:</label>
              <input
                ref={this.mobileRef}
                type="text"
                name="mobile"
                onChange={this.handleInputChange}
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
