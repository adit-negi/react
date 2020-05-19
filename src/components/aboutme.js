import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={10}>
            <div style={{ textAlign: "left" }}>
              <h2 style={{ paddingTop: "2em" }}>
                Check out some of my projects or have a look at my resume.
              </h2>
              <h4 style={{ color: "grey" }}>
                This section is not maintained, coming soon.
              </h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            </div>
          </Cell>
        </Grid>
        <Link to="">Click here to go back to home page</Link>
      </div>
    );
  }
}
export default About;
