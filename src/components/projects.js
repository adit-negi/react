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
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
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
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
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
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
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
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
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
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
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
                background: "black"
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
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
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
