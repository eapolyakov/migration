import React from 'react';

export default function PricingItem(props){
    return <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="pricing-wrap mb-30">
            <h3>{props.h3}</h3>
            <h4>{props.price}</h4>
            <p className="text-justify">
                {props.p}
            </p>
            <a href="#contacts"><button>Получить</button></a>
        </div>
    </div>
}