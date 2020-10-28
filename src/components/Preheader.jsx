import React from 'react';

export default function Preheader(){
    return <div className="header-top bg-2">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-8 col-xs-12">
                    <div className="header-top-left">
                        <p>Предоставляем услуги по получению гражданства России</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-4 col-xs-12">
                    <div className="header-top-right text-right">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}