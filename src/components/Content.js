import React, { Component } from "react";
import "../assets/style.css";
import { Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// import contentData from "../utils/contentData";
///// THIS BELOW IS WHERE WE COULD PLACE ALL THE QUIZS /////

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center welcomeText">Welcome!</h2>

        {/* HERE  UNDERNEATH  IS THE CONTENT AFTER THE LINE BREAK */}

        <Row className="d-flex justify-content-between">
          <Col>
            <Card>
              <CardImg className="myself" />
              <CardBody>
                <CardTitle>Blaise M. Laurel</CardTitle>
                <CardSubtitle>Professional Steel Inspector</CardSubtitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="seeThrough">
              <h1 className="text-center hobbyBox">Some Hobbies</h1>
              <ul>
                <li>Skateboarding</li>
                <li>Rock Climbing</li>
                <li>Cooking</li>
                <li>Riding Motorcycles on the daily</li>
                <li>Hiking with my doggos</li>
              </ul>
            </Card>
          </Col>
        </Row>
        <h2 className="my-5 text-center projectText">Projects</h2>
        <Row className="d-flex justify-content-between">
          <Col>
            <Card>
              <CardImg className="quiz" />
              <CardBody>
                <CardTitle>Coding Quiz</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg className="firstProf" />
              <CardBody>
                <CardTitle>First profile ever?</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg className="group1" />
              <CardBody>
                <CardTitle>First Group Project</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between my-5">
        <Col>
            <Card>
              <CardImg className="passwordGen" />
              <CardBody>
                <CardTitle>Password Generator</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg className="weather" />
              <CardBody>
                <CardTitle>Weather API</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg className="workSchedule" />
              <CardBody>
                <CardTitle>Work Planner</CardTitle>
                <CardText>Currently going to school for computer coding.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;