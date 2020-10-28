import React from 'react';
import {NavLink} from "react-router-dom";

export default function SliderItem(props){
    return <div className="item">
        <img src={props.img} alt={props.alt} className="slider"/>
        <div className="slider-content text-center">
            <div className="table">
                <div className="table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 col-md-offset-2">
                                <h2>{props.h2}</h2>
                                <p>{props.p}</p>
                                <ul>
                                    <li><NavLink to="#">Узнать как</NavLink></li>
                                    <li><NavLink to="#">Оставить заявку</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}