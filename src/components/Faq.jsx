import React from 'react';

export default function Faq(){
    return <div className="faq-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12  wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Часто задаваемые вопросы</h2>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised. by
                            injected humour, or randomised.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12  wow fadeInLeft">
                    <div className="faq-wrap">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingOne">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                           aria-expanded="true" aria-controls="collapseOne">
                                            General Inquiries
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                           aria-controls="collapseTwo">
                                            How To Use
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                                           aria-controls="collapseThree">
                                            Shipping & Delivery
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingfour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapsefour" aria-expanded="false"
                                           aria-controls="collapsefour">
                                            Additional Information
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsefour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingfive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapsefive" aria-expanded="false"
                                           aria-controls="collapsefive">
                                            Additional Information
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsefive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingfsix">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapsesix" aria-expanded="false"
                                           aria-controls="collapsesix">
                                            Additional Information
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsesix" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Keep away from people who try to belittle your ambitions. Small peol always
                                            do that. Keep away from ast people who try to belittle your ambitions. Small
                                            peol always do that. Keep away from people who try to ast belittle your
                                            ambitions. Small peol always do that.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12 fadeInRight wow">
                    <div className="faq-form form-style">
                        <div className="cf-msg"></div>
                        <form action="mail.php" method="post" id="cf">
                            <div className="row">
                                <div className="col-xs-12">
                                    <span>Name</span>
                                    <input type="text" placeholder="Name" id="fname" name="fname"/>
                                </div>
                                <div className="col-xs-12">
                                    <span>Email</span>
                                    <input type="text" placeholder="Email" id="email" name="email"/>
                                </div>
                                <div className="col-xs-12">
                                    <span>Subject</span>
                                    <input type="text" placeholder="Subject" id="subject" name="subject"/>
                                </div>
                                <div className="col-xs-12">
                                    <span>Your Questions</span>
                                    <textarea className="contact-textarea" placeholder="Questions" id="msg"
                                              name="msg"></textarea>
                                </div>
                                <div className="col-xs-12">
                                    <button id="submit" className="cont-submit btn-contact btn-style"
                                            name="submit">Questions
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}