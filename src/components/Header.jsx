import React from "react";
import Preheader from "./Preheader";
import HeaderContacts from "./HeaderContacts";
import Navbar from "./Navbar";

export default function Header(){
    return <div className="header-area">
        <HeaderContacts/>
        <Navbar/>
    </div>
}