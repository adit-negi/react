import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Logo from "./aditt.jpg";
import pdf from "./Adit_Negi_Resume_May2020.pdf";
import { Button } from "react-bootstrap";

class Landing extends Component {
  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
    };
    return (
      <div
        className="center-col"
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Logo} //src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>
                This is no longer maintained please click on the link below
              </h1>
            <a
                  href="https://www.aditnegi.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  New Website
                </a>

              <hr />

              <p>
                Python | Keras | Algorithms | React | Django | NodeJS |
                Tensorflow | MongoDB
              </p>
              <Button variant="dark" size="sm" href={pdf}>
                DOWNLOAD CV
              </Button>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/adit-negi-484488157/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://www.github.com/adit-negi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.codechef.com/users/aditnegi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
