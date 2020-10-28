import React from 'react';

export default function HeaderContacts(){
    return <div className="header-middle bg-2">
        <div className="container">
            <div className="row">
                <div className="col-md-3 hidden-sm hidden-xs">
                    <div className="logo">
                        <h1><a href="index.html">Martxa</a></h1>
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
                                    <p>MON - SAT (9AM - 5PM)</p>
                                    <span>Sunday colsed</span>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <p>MAIL US</p>
                                    <span>info@yourdomail.com</span>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <p>PHONE US</p>
                                    <span> (+1) 1144-1254</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}