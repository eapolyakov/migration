import React from 'react';

export default function Footer(){
    return <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12  col">
                        <div className="footer-widget footer-logo">
                            <h1>ПроГражданство.РФ</h1>
                            <p>Адрес</p>
                            <ul>
                                <a href="tel:+79261111111"><li><i className="fa fa-phone"></i> +7 926 111 11 11</li></a>
                                <a href="mailto:prograzhdanstvo@yandex.ru"><li><i className="fa fa-envelope"></i>prograzhdanstvo@yandex.ru</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 col">
                        <div className="footer-widget footer-menu">
                            <h2>Навигация</h2>
                            <ul>
                                <li>
                                    <a href="#about">О нас<i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#services">Услуги <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#faq">Как стать гражданином <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#quiz">Этапы работы <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#pricing">Цены <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#benefits">Наши преимущества <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#contacts">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 col">
                        <div className="footer-widget quick-contact">
                            <h2>Быстрая связь</h2>
                            <form action="mail.php" method="post" id="cf">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <input type="text" placeholder="Name" id="fname" name="fname"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <input type="text" placeholder="Email" id="email" name="email"/>
                                    </div>
                                    <div className="col-xs-12">
                                        <input type="text" placeholder="Subject" id="subject" name="subject"/>
                                    </div>
                                    <div className="col-xs-12">
                                    <textarea className="contact-textarea" placeholder="Message" id="msg"
                                              name="msg"></textarea>
                                    </div>
                                    <div className="col-xs-12">
                                        <button id="submit" className="cont-submit btn-contact bg-danger" name="submit">SEND MESSAGE
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom text-center">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 text-primary">
                        <script>document.write(new Date().getFullYear());</script>
                      Copyright &copy;
                        All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                            aria-hidden="true"></i> by <a
                        href="https://colorlib.com" target="_blank" style={{color: "gray"}}>Colorlib</a>
                   </div>
                </div>
            </div>
        </div>
    </footer>
}