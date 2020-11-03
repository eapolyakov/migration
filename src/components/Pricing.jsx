import React from 'react';
import PricingItem from "./PricingItem";
import ServicesItem from "./ServicesItem";

export default function Pricing(){
    return <div className="pricing-table-area">
        <div className="container" id="pricing">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Наши цены</h2>
                        <p>Оплата наших услуг осуществляется по мере реального продвижения вашего дела в соответствии с условиями Договора.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <PricingItem
                    h3="Квота на РВП"
                    price="от 15000 руб."
                    p={"Помощь в получении правительственной квоты РФ"}

                />
                <PricingItem
                    h3="РВП"
                    price="от 20000 руб."
                    p={"Разрешение на временное проживание в РФ"}
                />
                <PricingItem
                    h3="ВНЖ"
                    price=" от 25000 руб."
                    p={"Вид на жительство в Росйской Федерации"}
                />
                <PricingItem
                    h3="Гражданство"
                    price="от 18000 руб."
                    p={"Эксклюзивное сопровождение получения ГРАЖДАНСТВА РФ"}
                />
                <PricingItem
                    h3="НРЯ"
                    price=" от 13000 руб."
                    p={"Помощь в получении статуса НРЯ (носителя русского языка)"}
                />
                <PricingItem
                    h3="Консультация"
                    price="БЕСПЛАТНО"
                    p={"Заполнение заявлений любой сложности"}
                />
            </div>
        </div>
    </div>
}