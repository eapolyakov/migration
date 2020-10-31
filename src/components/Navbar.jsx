import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (<div className="header-bottom" id="sticky-header">
            <div className="container">
                <div className="row">
                    <div className="navbar-header col-xs-3">
                    <button type="button" className="navbar-toggle btn-danger" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        Меню
                    </button>
                </div>
                    <div className="mainmenu collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav" id="navigation">
                            <li>
                                <a href="#about">О нас<i className=""></i></a>
                            </li>
                            <li>
                                <a href="#faq">Ответы на вопросы <i className=""></i></a>
                            </li>
                            <li>
                                <a href="#steps">Как мы работаем <i className=""></i></a>
                            </li>
                            <li>
                                <a href="#pricing">Цены <i className=""></i></a>
                            </li>
                            <li>
                                <a href="#benefits">Преимущества <i className=""></i></a>
                            </li>
                            <li>
                                <a href="#contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}