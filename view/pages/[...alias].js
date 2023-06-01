import React from "react";
import Util from "../util/utility";

export async function getServerSideProps(context) {
  let params;
  params =
    context.params.alias[0] == "category"
      ? context.params.alias.join("/")
      : context.params.alias;

  console.log(context.params);

  let category = params.split("/")[1];

  // get the data
  // let workerData = await Util.api_call()

  let workerData = [
    {
      name: "Rajesh",
      mobile: "1234567890",
      email: "",
      shop: "Rajesh Shop",
      area: "Prahladnagar",
      pincode: "380015",
      workingHours: "10-9",
      visitingCharge: "100",
      image: "rajesh.png",
    },
    {
      name: "Ramesh",
      mobile: "1234567890",
      email: "",
      shop: "Ramesh Shop",
      area: "Anandnagar",
      pincode: "354601",
      workingHours: "12-12",
      visitingCharge: "200",
      image: "ramesh.png",
    },
  ];

  return {
    props: { params, category, workerData },
  };
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.workerData.map((worker, index) => (
          <div key={index}>
            <h1>Name : {worker.name}</h1>
            <h2>Mobile : {worker.mobile}</h2>
            <h2>Email : {worker.email}</h2>
            <h2>Shop : {worker.shop}</h2>
            <h2>Area : {worker.area}</h2>
            <h2>Pincode : {worker.pincode}</h2>
            <h2>Hours : {worker.workingHours}</h2>
            <h2>Charge : {worker.visitingCharge}</h2>
            <p>==============================</p>
          </div>
        ))}
      </>
    );
  }
}
