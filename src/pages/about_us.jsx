import React, { Component } from "react";
import FinnHayes from "../Images/NAMYANGFinnHayes.jpg";
import MaxFreshney from "../Images/NAMYANGMaxFreshney.jpg";
import SamByfordWinter from "../Images/NAMYANGSamByfordWinter.jpg";
import ChristinaJoSaunders from "../Images/NAMYANGChristinaJoSaunders.jpg";

export class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="about-container">
          About Us
          <p>
            Nam Yang wouldn’t be what it is without our fantastic team of
            dedicated, knowledgeable and supportive instructors and volunteers
            to give you the best training experience.
          </p>
          <br></br>
          <section className="our-team">
            <strong>Our Team</strong>
            <br />
            <div className="instructor-container">
              <p className="sam-byford-winter">Sam Byford-Winter</p>
              <p className="job-title">Director, Senior Instructor & Manager</p>
              <p className="description">
                Sam has been training in Martial Arts and Combat Sports for over
                20 years. He manages Nam Yang Brighton and Hove branches and
                runs all the Kickboxing programs, Teens Kung Fu, Junior programs
                and Little Tigers as well as our community outreach work. If
                that wasn’t enough, he’s also our competition team head coach.
              </p>
              <img
                input
                type="image"
                className="fit-picture"
                src={SamByfordWinter}
                alt="picture of Sam Byford-Winter - General Manager at Nam Yang Brighton"
              />
            </div>
            <div className="instructor-container">
              <p className="finn-hayes">Finn Hayes</p>
              <p className="job-title">Manager & instructor</p>
              <br />
              <p className="description">
                Finn started his Martial Arts training as a child in Karate.
                He’s been training at Nam Yang for over 4 years and has
                represented the club many times, including two National titles
                at Kickboxing and Savate competitions. Finn is the manager at
                Nam Yang Worthing and regularly teaches and attends classes at
                Nam Yang Brighton
              </p>
              <img
                input-type="image"
                className="fit-picture"
                src={FinnHayes}
                alt="picture of Finn Hayes General Manager at Nam Yang Worthing"
              />
            </div>
            <div className="instructor-container">
              <p className="christina-jo-saunders">Christina Jo Saunders</p>
              <p className="job-title">Instructor</p>
              <br />
              <p className="description">
                Christina is a level 3 personal trainer and Instructor at Nam
                Yang Brighton. Her Martial Arts career includes Wado-Ryu Karate,
                Kickboxing, Boxing and Savate, for which she won a National
                Championship in 2018. Christina also runs Team Queen, a queer
                friendly environment for female identifying students and
                non-binary people to train in Combat Sports and fitness
                programs.
              </p>
              <img
                input-type="image"
                className="fit-picture"
                src={ChristinaJoSaunders}
                alt="picture of Christina Jo Saunders - Assistant instructior"
              />
            </div>
            <div className="instructor-container">
              <p className="max-freshney">Max Freshney</p>
              <p className="job-title">Instructor</p>
              <br />
              <p className="description">
                Max was a keen skateboarder before deciding to get into Martial
                Arts. He is a blue belt under Ivam Maciel in Brazilian Jiu Jitsu
                and has competed in Savate Kickboxing several times for Nam
                Yang. Max teaches at Nam Yang Brighton in both Kickboxing and
                San Da as well as Junior and Little Tigers classes.
              </p>
              <img
                input-type="image"
                className="fit-picture"
                src={MaxFreshney}
                alt="picture of Max Freshney - Assistant instructior"
              />
            </div>
          </section>
        </div>
      </>
    );
  }
}
