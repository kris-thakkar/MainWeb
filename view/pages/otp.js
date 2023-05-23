import React from "react";
import Util from "../util/utility";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      checkbox: false,
      invalidMobile: "",
      invalidEmail: "",
    };
    this.mobileRef = React.createRef();
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
    const mobile = this.mobileRef.current.value;

    // Mobile =====================
    if (mobile !== "") {
      let validateMobile = JetbroUtil.validateMobile(mobile);
      if (validateMobile == false) {
        this.setState({
          validNumber: "Enter Valid Mobile Number",
        });
      } else {
        this.setState({
          validNumber: "",
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
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Mobile:</label>
              <input
                ref={this.mobileRef}
                type="text"
                name="mobile"
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
}
