import React from 'react';
import ServicesItem from "./ServicesItem";

export default function Services(){
    return <section className="service-area pb-30">
        <div className="container" id="services">
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
                    h3={"РВП"}
                    p={"Разрешение на временное проживание в РФ"}
                />
                <ServicesItem
                    h3={"ВНЖ"}
                    p={"Вид на жительство в Росйской Федерации"}
                />
                <ServicesItem
                    h3={"КВОТА"}
                    p={"Помощь в получении правительственной квоты в РФ"}
                />
            </div>
            <div className="row">
                <ServicesItem
                    h3={"НРЯ"}
                    p={"Помощь в получении статуса НРЯ (носителя русского языка)"}
                />
                <ServicesItem
                    h3={"Сопровождение"}
                    p={"Эксклюзивное сопровождение получения ГРАЖДАНСТВА РФ"}
                />
                <ServicesItem
                    h3={"Консультации"}
                    p={"Заполнение заявлений любой сложности"}
                />
            </div>
        </div>
    </section>
}