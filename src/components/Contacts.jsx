import React from 'react';
import YMap from "./Map";
import Form from "./Form";

export default function Contacts(){
    return <div className="contact-area ptb-30" id="contacts">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Связаться с нами</h2>
                        <p>Первая консультация по телефону БЕСПЛАТНО!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-wrap form-style">
                        <div className="cf-msg"></div>
                        <Form/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-wrap">
                        <ul>
                            <li>
                                <i className="fa fa-phone"></i>
                                <p>+842 1544 2554</p>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:prograzhdanstvo@yandex.ru">
                                    <p>prograzhdanstvo@yandex.ru</p></a>
                            </li>
                            <li>
                                <i className="fa fa-whatsapp"></i>
                                <p>15455 54564866 3554</p>
                            </li>
                            <li>
                                <i className="fa fa-location-arrow"></i>
                                Москва Кремль
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <YMap/>
                </div>
            </div>
        </div>
    </div>
}