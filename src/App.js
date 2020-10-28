import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import WhoWeAre from "./components/WhoWeAre";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import AboutNoPic from "./components/AboutNoPic";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
    return (<BrowserRouter>
            <Header/>
            <Slider/>
            <WhoWeAre/>
            <Stats/>
            <Benefits/>
            <Services/>
            <Steps/>
            <Pricing/>
            <AboutNoPic/>
            <Video/>
            <Faq/>
            <Testimonials/>
            <Contacts/>
            <Footer/>
        </BrowserRouter>

  );
}

export default App;
