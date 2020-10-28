import React from 'react';

export default function Video(){
    return <section className="video-area  parallax black-opacity wow fadeInUp" data-speed="5"
                    data-bg-image="assets/images/bg/2.jpg">
        <h2 className="hidden">Video area</h2>
        <div className="table">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="video-wrap text-center">
                                <a href="https://www.youtube.com/watch?v=S7wCAquf9Us" className="video-popup">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}