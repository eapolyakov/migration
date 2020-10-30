import React from 'react';
import {NavLink} from "react-router-dom";

export default function HeaderContacts(){
    return <div className="header-middle bg-2">
        <div className="container">
            <div className="row">
                <div className="col-md-3 hidden-sm hidden-xs">
                    <div className="logo">
                        <h1>ПроГражданство.РФ</h1>
                    </div>
                </div>
                <div className="col-md-9 col-xs-12">
                    <div className="header-middle-right">
                        <ul>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <div className="contact-info">
                                    <a href="#contacts"><p>Понедельник - Пятница 10-18</p>
                                        <span>СБ-ВС выходные</span></a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <a href="mailto:prograzhdanstvo@yandex.ru"><p>Напишите нам</p>
                                    <span>prograzhdanstvo@yandex.ru</span></a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <a href="tel:+79261111111"><p>Позвоните нам</p>
                                        <span>+79261111111</span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}