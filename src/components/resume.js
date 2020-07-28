import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import logo from "./adit.jpg";
import { Button } from "react-bootstrap";
import pdf from "./Adit_Negi_Resume_May2020.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={logo} //"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "400px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Adit Negi</h2>
            <h4 style={{ color: "grey" }}>BTech(IT), class of 2021</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hi I'm Adit an IT student from Cluster Innovation Centre,
              University of Delhi. A data enthusiast, avid programmer,
              passionate about sports in general. Solving real world problems
              and growing myself in the software field, currently looking for an
              internship. I'm proficient in python, also have experience with
              Django, React, MongoDB. Would love to work in AI or data science.
            </p>
            <Button variant="dark" size="sm" href={pdf}>
              DOWNLOAD CV
            </Button>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              1/602, Millennium Apartment, Sector 9, Plot 2, Dwarka, New Delhi
            </p>
            <h5>Phone</h5>
            <p>+91 9650691551, +91 7701837305</p>
            <h5>Email</h5>
            <p>aditnegi1@gmail.com, aditnegi1@ducic.ac.in</p>
            <h5>Resume</h5>
            <a
              href="https://drive.google.com/file/d/1c_DE-H439kGgPUME_SFTwJX_CsdGp5_9/view?usp=sharing"
              class="button blue"
            >
              Click to check Resume
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2004}
              endYear={2017}
              schoolName="Mount Carmel School"
              schoolDescription="High School affiliated with CBSE board in Dwarka, New Delhi"
            />

            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Cluster Innovation Centre, University of Delhi"
              schoolDescription="BTech in Information Technolgy and Mathematical Innovations"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Urban Pendler Solutions Private Limited, Noida — Software
              Engineering Intern"
              jobDescription="Built a comprehensive Dashboard in Django with the help of Bootstrap, Charts.js and DjangoTables for data
              analysis and visualization of fields, also automated data transfer
              to xlxs,csv,ods,tsv,json,html. Developed an invoice generator and automated
              mailing for a new service."
            />

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="VAU Homes, Remote — Software Engineering Intern"
              jobDescription="Built a web crawler with Selenium for real estate websites and populated a
              dataset of houses in the bay area for application of machine learning
              algorithms on the dataset to predict house prices. Practiced feature engineering, RFs, and gradient boosting."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Python" progress={100} />
            <Skills skill="Django" progress={80} />
            <Skills skill="Deep Learning" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
