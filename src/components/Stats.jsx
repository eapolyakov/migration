import React from 'react';

export default function Stats(){
    return <section className="fanfact-area parallax black-opacity" data-speed="5"
                    data-bg-image="assets/images/bg/1.jpg">
        <div className="table">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".1s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">215</h2>
                                <p>РВП</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">445</h2>
                                <p>ВНЖ</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">145</h2>
                                <p>НРЯ</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">120</h2>
                                <p>Граждан</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}