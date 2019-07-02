import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css'
import { Link } from 'react-router-dom';

class About extends Component {

  render() {
    return (
      <div className="about">
          <center><div className="siteheader">WELCOME, GUEST</div></center> <br /> <br />This simple list application was
          developed using React.js and Redux. It takes messages from
          you and stores them for you to remember later.
          <br /><br />
          Try it out by typing in a message! Add it to your list by pressing
          ENTER or hitting the SAVE button. You can delete a message simply by clicking
          on it.
          <br /><br />
          Developed largely through the aid of tutorials from the Net Ninja
          Youtube channel. Check out the React / Redux tutorials below!
          <br/><br /><br />
          <center>
            <a href="www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">Net Ninja React (w/ Redux) tutorials</a>
          <br />
          <br /><br/>
          The background was custom-made by me, in Photoshop, for this application!
        </center>
      </div>
  )}
}

export default About;
