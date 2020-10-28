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
                                <h2 className="counter">2157</h2>
                                <p>Web Design</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">15445</h2>
                                <p>Web Development</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">145</h2>
                                <p>UX/UI Design</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="fanfact-wrap">
                                <h2 className="counter">1200</h2>
                                <p>Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}