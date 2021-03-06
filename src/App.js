import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import WhoWeAre from "./components/WhoWeAre";
import Benefits from "./components/Benefits";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import BenefitsAbout from "./components/BenefitsAbout";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Preloader from "./components/Preloader";
import ScrollUpButton from "react-scroll-up-button";
import PopUp from "./components/PopUp";


function App() {
    return (<BrowserRouter>
            <Preloader/>
            <Header/>
            <Slider/>
            <PopUp/>
            <WhoWeAre/>
            <Quiz/>
            <Stats/>
            <Benefits/>
            <Faq/>
            <BenefitsAbout/>
            <Pricing/>
            <Steps/>
            <Testimonials/>
            <Contacts/>
            <Footer/>
            <ScrollUpButton />
        </BrowserRouter>

  );
}

export default App;
