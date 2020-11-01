import React from 'react';

export default function Stats(){
    return <section className="fanfact-area parallax" data-speed="10"
                    data-bg-image="assets/images/slider/sl3_1.jpeg">
        <div className="table">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".1s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">90</h2>
                                <p>Клиентов получили РВП</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">44</h2>
                                <p>Клиентов получили ВНЖ</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">67</h2>
                                <p> Клиентов получили НРЯ</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">120</h2>
                                <p>Клиентов получили гражданство РФ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}