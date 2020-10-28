import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import WhoWeAre from "./components/WhoWeAre";

function App() {
    return (<BrowserRouter>
            <Header/>
            <Slider/>
            <WhoWeAre/>
        </BrowserRouter>

  );
}

export default App;
