import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (<div className="header-bottom" id="sticky-header">
            <div className="container">
                <div className="row">
                    <div className="hidden-md hidden-lg col-sm-8 col-xs-6">
                        <div className="logo">
                            <h1><NavLink to="/"></NavLink></h1>
                        </div>
                    </div>
                    <div className="col-md-11 hidden-sm hidden-xs">
                        <div className="mainmenu">
                            <ul id="navigation">
                                <li>
                                    <a href="#about">О нас<i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#services">Услуги <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#pricing">Цены <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#faq">Ответы на вопросы <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#contacts">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <div className="search-wrap text-right">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2 clear col-xs-3 hidden-md hidden-lg">
                        <div className="responsive-menu-wrap floatright"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}