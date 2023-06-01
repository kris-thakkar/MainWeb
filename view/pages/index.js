import Link from "next/link";
import React from "react";
import Util from "../util/utility";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.categories = [
      "AC Repair",
      "Carpenter",
      "Electrician",
      "Plumber",
      "Painter",
      "Salon at Home",
      "Maid",
      "Pest Control",
      "Appliance Repair",
      "Cleaning and Disinfection",
      "Home Deep Cleaning",
      "Sofa Cleaning",
      "Bathroom Cleaning",
      "Kitchen Cleaning",
      "Car Cleaning",
    ];
  }

  render() {
    return (
      <>
        <h1>What are you looking for ?</h1>
        {this.categories.map((category, index) => (
          <div key={index}>
            <Link href={`/category/${Util.slugify(category)}`}>
              <a>
                <h4>{category}</h4>
              </a>
            </Link>
          </div>
        ))}
      </>
    );
  }
}
