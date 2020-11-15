import React from 'react';

export default function HeaderContacts(){
    return <div className="header-middle bg-2">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="assets/images/logo.png" className="logo" alt="logotip"/>
                </div>
                <div className="col-md-8 col-xs-12">
                    <div className="header-middle-right">
                        <ul>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-clock-o"/>
                                </div>
                                <div className="contact-info">
                                    <a href="#contacts"><p>ПН - ПТ 10-18</p>
                                        <span>СБ-ВС выходные</span></a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-envelope"/>
                                </div>
                                <div className="contact-info">
                                    <a href="mailto:prograzhdanstvo@yandex.ru"><p>Напишите нам</p>
                                    <span>prograzhdanstvo@yandex.ru</span></a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-phone"/>
                                </div>
                                <div className="contact-info">
                                    <a href="tel:+79309111770"><p>Позвоните нам</p>
                                        <span>8(930)911-17-70</span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}