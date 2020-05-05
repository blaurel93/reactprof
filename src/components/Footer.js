import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import "../assets/style.css"

const Footer = () => (
  <div className="p-3 text-left contactColor">
    
    <div className="footContainer">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Jdoe@gmail.com?" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Whatcha want?!</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button>Send it over!</Button>
      </Form>
    </div>
    
    <a href={"https://github.com/blaurel93"} target="_blank"><i className="fab fa-github-square fa-5x sizingGit"></i></a>
    <a href={"https://www.linkedin.com/in/blaise-laurel-b6240a18b/"} target="_blank"><i className="fab fa-linkedin fa-5x sizingLinked"></i></a>
  </div>
);
export default Footer;