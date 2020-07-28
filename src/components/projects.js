import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      const styles = {
        white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        topBarHeight: 40,
        footerMenuHeight: 50,
      };
      return (
        <div
          className="projects-grid"
          style={{
            backgroundColor: styles.black(0.05),
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Heuristic research using Sentimental analysis of the Oscars.
            </CardTitle>
            <CardText>
              Gathered data by scraping from twitter. Using techniques such as
              tokenisation and stemming, analysed the data for psychological
              impact of a major event on humans to change their perception.
              Bayesian theory was used for quantification.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="http://www.github.com/adit-negi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>

            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              COVID modelling using SIR and SIERD models
            </CardTitle>
            <CardText>
              Model designed to estimate the growth of COVID-19 in India and its
              states. Used official data for quantifying the parameters of this
              model. All simulations were executed in MATLAB. RMES was used to
              calculate Beta in Python using Scipy, numpy, pandas and sklearn.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="http://www.github.com/adit-negi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Textual analysis of financial reports(SEC/ EDGAR) .
            </CardTitle>
            <CardText>
              Extracted some sections from a large number of SEC / EDGAR
              financial reports. Performed text analysis to compute
              variables(positive score, negative score, polarity score, average
              Sentence Length, percentage of complex words, fog index, complex
              word count, word count).
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="http://www.github.com/adit-negi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Strategizing fantasy football, Moneyball Approach
            </CardTitle>
            <CardText>
              Made new graphs for better analysis and visualisation of players
              performance by dividing the graphs into different grids on points
              vs cost axis. Used Gradient Boosting Trees, Stochastic Gradient
              Regressor and Linear Regression to regress points scored against
              32 features engineered through priori.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a href="https://github.com/adit-negi/FPL" class="button blue">
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Predicting the unpredicted, IPL.
            </CardTitle>
            <CardText>
              Scraped data was cleaned, pre processed, normalized and assigned
              dummy values. Used feature selection and experiance as avid
              cricket watchers to narrow parameters, applied decision trees
              algorithm and multiple linear regression to predict the outcome.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="https://drive.google.com/file/d/10wIEfKYYpcEvwb2QKUau_bRqqFEipL38/view?usp=sharing"
                class="button blue"
              >
                _______________Report________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Music Generation
            </CardTitle>
            <CardText>
              As the Data is self Collected. We collected several MIDI files for
              our Dataset. We chose the MIDI files depending on the keys as it
              can have a big influence on the Result MIDI. We needed at least 50
              MIDI files for our Model.This is a very basic LSTM Recurrent
              Neural Network (RNN). It uses windows of 129-class one-hot encoded
              (0-127 = MIDI note numbers + 1 class to represent rests) as input
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a href="https://www.github.com/adit-negi" class="button blue">
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Digital Impainting based on the Heat equation.
            </CardTitle>
            <CardText>
              The heat equation describes how a value (in this case,
              temperature) diffuses across an area over a time interval.With
              grayscale values replacing temperature, slightly modified version
              of this equation can be used for basic inpainting. I implemented a
              simple MATLAB program that uses this technique.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a href="https://www.github.com/adit-negi" class="button blue">
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Analysis of dust collection on solar panels.
            </CardTitle>
            <CardText>
              Performed Monte Carlo Simulation for different layers of
              deposition to study the I-V characteristics of solar cells ·
              Simulated P-V characteristics of Solar Cells in different
              temperature.
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a href="https://www.github.com/adit-negi" class="button blue">
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black",
              }}
            >
              Vehicle Routing Problem (VRP) Travelling around India
            </CardTitle>
            <CardText>
              This is a project that implements a simple real-life demo of
              Vehicle Routing Problem (VRP). The question definition is to
              conqure Travel Salesman Probelm (TSP) that has multiple salesmen.
              python, pulp, matplotlib, seaborn, numpy, pandas were used. The
              data is collected by web crawling from the traveling site
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="https://github.com/adit-negi/VRP_Pulp"
                class="button blue"
              >
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'l",
              }}
            >
              Event management React App.
            </CardTitle>
            <CardText>
              A web app to manage college events made using react, redux,
              firebase and bootstrap, provides both user and admin features to
              add and share events
            </CardText>
            <CardActions border></CardActions>
            <div class="container">
              <a
                href="https://github.com/adit-negi/EventManger"
                class="button blue"
              >
                _______________GitHub________________
              </a>
            </div>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Data Science</Tab>
          <Tab>ML/Deep Learning</Tab>
          <Tab>Math/Physics</Tab>
          <Tab>Web</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
