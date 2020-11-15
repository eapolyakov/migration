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
                                <p><a href="tel:+79309111770" style={{color: "white"}}>8(930)911-17-70</a></p>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:prograzhdanstvo@yandex.ru">
                                    <p>prograzhdanstvo@yandex.ru</p></a>
                            </li>
                            <li>
                                <i className="fa fa-whatsapp"></i>
                                <p><a href="https://wa.me/79309111770?text=Сообщение%20с%20сайта" style={{color: "white"}}>Написать в WhatsApp</a></p>
                            </li>
                            <li>
                                <i className="fa fa-location-arrow"></i>
                                109316, г. Москва, Волгоградский пр-т, д.32, к.8, офис 27
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