import React, { Component } from "react";

export class AboutUs extends Component {
  render() {
    return (
      <div className="container">
        About Us
        <p>
          Nam Yang wouldn’t be what it is without our fantastic team of
          dedicated, knowledgeable and supportive instructors and volunteers to
          give you the best training experience.
        </p>
        <br></br>
        <section className="our-team">
          <strong>Our Team</strong>
          <p className="finn-hayes">
            Finn Hayes
            <img
              input-type="image"
              className="fit-picture"
              src="C:\Users\Owner\TKAPCode\NamYangWebsite\src\Images\NAMYANGFinnHayes.jpg"
              alt="picture of Finn Hayes General Manager at Nam Yang Worthing"
            />
          </p>
          <p className="max-freshney">
            Max Freshney - Assistant Instructor
            <img
              input-type="image"
              className="fit-picture"
              src="Assets\NAM-YANG0452_1-200x300MaxFreshney.jpg"
              alt="picture of Max Freshney - Assistant instructior"
            />
          </p>
          <p className="sam-byford-winter">
            Sam Byford-Winter - Manager Nam Yang Brighton
            <img
              input
              type="image"
              className="fit-picture"
              src="Assets\NAM-YANG0482_1-200x300SamByford-Winter.jpg"
              alt="picture of Sam Byford-Winter - General Manager at Nam Yang Brighton"
            />
          </p>
        </section>
      </div>
    );
  }
}
