import React from 'react';
import PricingItem from "./PricingItem";

export default function Pricing(){
    return <div className="pricing-table-area" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Наши цены</h2>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised. by
                            injected humour, or randomised.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <PricingItem
                    h3="Услуга1"
                    price="10000 руб."
                />
                <PricingItem
                    h3="Услуга2"
                    price="50000 руб."
                />
                <PricingItem
                    h3="Услуга3"
                    price="30000 руб."
                />
            </div>
        </div>
    </div>
}