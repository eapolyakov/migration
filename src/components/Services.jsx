import React from 'react';
import ServicesItem from "./ServicesItem";

export default function Services(){
    return <section className="service-area pb-140">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Наши услуги</h2>
                        <p>Получение гражданства РФ</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <ServicesItem
                    img="assets/images/service/1.jpg"
                    alt="service_1"
                    h3={"Услуга"}
                    p={"описание"}
                />
                <ServicesItem
                    img="assets/images/service/2.jpg"
                    alt="service_1"
                    h3={"Услуга"}
                    p={"описание"}
                />
                <ServicesItem
                    img="assets/images/service/3.jpg"
                    alt="service_1"
                    h3={"Услуга"}
                    p={"описание"}
                />
            </div>
        </div>
    </section>
}