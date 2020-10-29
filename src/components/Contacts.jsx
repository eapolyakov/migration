import React from 'react';
import YMap from "./Map";

export default function Contacts(){
    return <div className="contact-area ptb-30" id="contacts">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Связаться с нами</h2>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised. by
                            injected humour, or randomised.</p>
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
                                    <input type="text" placeholder="Имя" id="fname" name="fname"/>
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
                                    <button id="submit" className="cont-submit btn-contact" name="submit">SEND MESSAGE
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
                                <p>+842 1544 2554</p>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <p>martxa1545@gmail.com</p>
                                <p>martxa1545@gmail.com</p>
                            </li>
                            <li>
                                <i className="fa fa-fax"></i>
                                <p>15455 54564866 3554</p>
                                <p>15455 54564866 3554</p>
                            </li>
                            <li>
                                <i className="fa fa-location-arrow"></i>
                                227 Marion Street Address Here Columbia, SC 29201
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