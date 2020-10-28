import React from 'react';

export default function TestimonialsItemLeft(props) {
    return <div className="item">
        <div className="col-xs-12 wow fadeInLeft">
            <div className="client-wrap fix">
                <div className="client-info text-right">
                    <h3>{props.name}</h3>
                    <span>{props.counrty}</span>
                    <ul>
                        <li>{props.star1}</li>
                        <li>{props.star2}</li>
                        <li>{props.star3}</li>
                        <li>{props.star4}</li>
                        <li>{props.star5}</li>
                    </ul>
                    <p>{props.p}</p>
                </div>
                <div className="client-img pull-right">
                    <img src={props.img} alt={props.alt}/>
                </div>
            </div>
        </div>
    </div>
}