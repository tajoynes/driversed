import React from "react";
//->Import Components
import Navigation from "../components/Navigation";
import AnimatePage from "../components/AnimatePage";

//-> React-Boostrap
//-> CSS

function Contact() {
  return (
    <div>
      <AnimatePage>
        <Navigation />
        <h1>Contact</h1>
      </AnimatePage>
    </div>
  );
}

export default Contact;
