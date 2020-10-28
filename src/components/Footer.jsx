import React from 'react';

export default function Footer(){
    return <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12  col">
                        <div className="footer-widget footer-logo">
                            <h1>ПроГражданство</h1>
                            <p>Lor separat existentie es un myth. Por scientie, musica, sport etc, litot usa li sam
                                larLor separat existentie es un myth existentie.</p>
                            <ul>
                                <li><i className="fa fa-phone"></i> +455 5475 6645</li>
                                <li><i className="fa fa-envelope"></i> info@yourdomail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 col">
                        <div className="footer-widget footer-menu">
                            <h2>Навигация</h2>
                            <ul>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="about.html">О нас</a></li>
                                <li><a href="#"></a></li>
                                <li><a href="service.html">FInancial Service</a></li>
                                <li><a href="#">Business Devlopment</a></li>
                                <li><a href="">Project Management</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 col">
                        <div className="footer-widget instagram-wrap">
                            <h2>Instagram</h2>
                            <ul>
                                <li><a href="#"><img src="assets/images/instagram/1.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/images/instagram/2.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/images/instagram/3.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/images/instagram/4.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/images/instagram/5.jpg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/images/instagram/6.jpg" alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 col">
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