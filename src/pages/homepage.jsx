import React, { Component } from "react";
import NamYangWorthing from "../Images/NAMYANGWorthing.jpg";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Nam Yang Worthing Community Association</h2>
        <br></br>
        <p>
          Our passion here at Nam Yang is for each of our students to become
          physically and mentally healthier, happier and more confident as they
          develop their combat sport and martial art skills in a completely
          inclusive environment. Being a community lead, not for profit
          association teaching martial arts in Brighton, our diversity is
          something we're extremely proud of. We're happy to have been making a
          positive impact within the local community since 1999. And now with
          multiple venues across Brighton and Hove, we aim to deliver more
          classes and outreach work.
        </p>
        <div className="video-wrapper">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/475868525?h=19e804d65d"
            width="720"
            height="540"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="homepage-text">
          <p>
            Nam Yang Worthing will be a full time centre designed to bring high
            quality Kickboxing lessons to the Worthing community. We will be
            teaching classes in K1 Kickboxing, a fantastic style of high
            intensity, aggressive striking utilising the hands, legs and knees.
            <p>
              We teach classes in San Da or Sanshou, as it is often known, which
              is a Combat sport from China. It uses striking techniques as well
              as throws and sweeps. It is fantastic style as a precursor to MMA
              as emphasis is on the transition between striking and take downs.
              Savate is a style of Kickboxing from France. It emphasises
              intricate footwork, dynamic kicking and excellent combinations
              between hands and legs. The practitioner wears boots as they are
              only allowed to kick with the foot and not the shin.
            </p>
          </p>
          <img
            input
            type="image"
            className="fit-picture"
            src={NamYangWorthing}
            alt="picture of the Nam Yang Worthing Gym"
            width="840px"
            height="auto"
          />
        </div>
      </div>
    );
  }
}
