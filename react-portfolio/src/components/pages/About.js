import React from "react";
import Container from "../Container";
import Assets from "./About Assets/AboutAssets.js"

function About() {
  return (
    <div>
        <Container style={{ marginTop: 30, marginBottom:30}} >
            <Assets/> 
        </Container>
    </div>
  );
}

export default About;