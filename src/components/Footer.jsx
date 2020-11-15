import React from 'react';

export default function Footer(){
    return <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="footer-widget footer-menu">
                            <ul>
                                <li>
                                    <a href="#about">О нас<i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#steps" className="hidden-sm hidden-xs">Как мы работаем <i className=""></i></a>
                                </li>
                                <li>
                                    <a href="#faq">Ответы на вопросы <i className=""></i></a>
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
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="footer-widget footer-logo">
                            <img src="assets/images/logo.png" className="logo-footer"/>
                            <p>109316, г. Москва, Волгоградский пр-т, д.32, к.8, офис 27</p>
                            <ul>
                                <a href="tel:+79309111770"><li><i className="fa fa-phone"></i>8(930)911-17-70</li></a>
                                <a href="mailto:prograzhdanstvo@yandex.ru"><li><i className="fa fa-envelope"></i>prograzhdanstvo@yandex.ru</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom text-center">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 text-danger">
                        <script>document.write(new Date().getFullYear());</script>
                      Copyright &copy;
                        All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                            aria-hidden="true"></i> by <a
                        href="https://colorlib.com" target="_blank" style={{color: "gray"}}>Colorlib</a>
                   </div>
                    <div className="col-xs-12 text-danger mt-5">
                        Powered by <a href="https://webecrat.ru" style={{color: "gray"}}>WEBOCRAT</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}