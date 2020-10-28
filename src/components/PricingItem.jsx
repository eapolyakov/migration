import React from 'react';

export default function PricingItem(props){
    return <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="pricing-wrap mb-30">
            <h3>{props.h3}</h3>
            <h4>{props.price}</h4>
            <p className="text-justify">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <button>Получить</button>
        </div>
    </div>
}