import React from "react";
import { AnimatePresence } from "framer-motion";

//->Component Imports
import AnimatePage from "../components/AnimatePage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

//-> React-Boostrap
import Button from "react-bootstrap/Button";
import { AiOutlineMail, AiOutlineArrowUp } from "react-icons/ai";

import "./../styles/Home.css";

function Home() {
  return (
    <>
      <AnimatePage>
        <Navigation />
        <Landing />
        <Footer />
      </AnimatePage>
    </>
  );
}

export default Home;
