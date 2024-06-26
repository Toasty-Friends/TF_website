import React, { Component } from "react";

export default class Team extends Component {
  render() {
    return (
      <>
        <h1>About The Team</h1>
        <div className="team-grid">
          <div className="team">
            <div className="about-img">
              <img src="styles/images/toastr.jpg" alt="The Lost Toastr" />
            </div>
            <div className="about-me">
              <h3>The Lost Toastr</h3>
              <p>Founder &amp; Lead Developer</p>
            </div>
          </div>

          <div className="team">
            <div className="about-img">
              <img src="styles/images/Dem.jpg" alt="Dementez" />
            </div>
            <div className="about-me">
              <h3>Dementez</h3>
              <p>Community Manager &amp; Advisor </p>
            </div>
          </div>

          {/* <div className="team">
        <div className="about-img">
          <img src="Images/smiley.jpg" />
        </div>
        <div className="about-me">
          <h3>SmileyGUI</h3>
          <p>Assistant Designer</p>
        </div>
      </div>  */}

          <div className="team">
            <div className="about-img">
              <img src="styles/images/IDK.png" alt="Who is next?" />
            </div>
            <div className="about-me">
              <h3>Who&apos;s Next?</h3>
              <p>Have a skill set? Reach out on Discord!</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
