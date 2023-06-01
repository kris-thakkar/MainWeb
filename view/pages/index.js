import Link from "next/link";
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.categories = [
      { name: "Plumber", link: "plumber", image: "plumber.png" },
      { name: "Electrician", link: "electrician", image: "electrician.png" },
      { name: "Carpenter", link: "carpenter", image: "carpenter.png" },
      { name: "Painter", link: "painter", image: "painter.png" },
      { name: "AC", link: "ac", image: "ac.png" },
      { name: "Refrigerator", link: "refrigerator", image: "refrigerator.png" },
    ];
  }

  render() {
    return (
      <>
        <h1>What are you looking for ?</h1>
        {this.categories.map((category, index) => (
          <div key={index}>
            <Link href={`/category/${category.link}`}>
              <a>
                <h4>{category.name}</h4>
              </a>
            </Link>
          </div>
        ))}
      </>
    );
  }
}
