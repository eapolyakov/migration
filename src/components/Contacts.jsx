import React from 'react';
import YMap from "./Map";

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
                <div className="col-md-4">
                    <div className="contact-wrap form-style">
                        <div className="cf-msg"></div>
                        <form action="mail.php" method="post" id="cf">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <label htmlFor="phone">Введите ваше имя:</label>
                                    <input type="text" placeholder="Имя" id="fname" name="fname"/>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <label htmlFor="phone">Телефон:</label>
                                    <input type="tel" placeholder="89ХХХХХХХХХ" id="phone" name="phone"
                                           pattern="[0-9]{11}"
                                           required/>
                                </div>
                                <div className="col-xs-12">
                                    <textarea className="contact-textarea" placeholder="Сообщение" id="msg"
                                              name="msg"></textarea>
                                </div>
                                <div className="col-xs-12">
                                    <button id="submit" className="cont-submit btn-danger" name="submit">Отправить
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
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
                <div className="col-md-4">
                    <YMap/>
                </div>
            </div>
        </div>
    </div>
}