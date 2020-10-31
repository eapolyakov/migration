import React from 'react';

export default function SericesItem(props){
    return <div className="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp" data-wow-delay=".1s">
        <div className="service-wrap">
            <a href="#contacts">
                <div className="service-content">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                    <span>Подать заявку</span>
                </div>
            </a>
        </div>
    </div>
}