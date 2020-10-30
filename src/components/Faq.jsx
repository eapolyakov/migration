import React from 'react';
import Form from "./Form";

export default function Faq(){
    return <div className="faq-area ptb-100" id="faq">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12  wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Ответы на основные вопросы</h2>
                        <p>Если Вы не найдёте свой ответ здесь, звоните, мы с радостью ответим!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12  wow fadeInLeft">
                    <div className="faq-wrap">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingOne">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                           aria-expanded="true" aria-controls="collapseOne">
                                            Что такое РВП?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <p>Разрешение на временное проживание - это статус, позволяющий иностранному гражданину находиться на территории Российской Федерации 3 года. Наличие статуса позволяет не оформлять патент и продлить срок действия визы на срок выдачи РВП. Наличие РВП позволяет свободно работать субъекте Российской Федерации, где оно было выдано, и выезжать за пределы России.
                                            По сути - это штамп, поставленный в документ, удостоверяющий личность иностранного гражданина, на котором указан срок его пребывания на территории России.
                                            Разрешение на временное проживание - первый этап, необходимый для получения гражданства Российской Федерации.

                                            РВП не требуется гражданам Республики Беларусь.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                           aria-controls="collapseTwo">
                                            Что такое ВНЖ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Вид на жительство - документ, позволяющий иностранному гражданину постоянно проживать на территории Российской Федерации продолжительное время. С октября 2019 года вид на жительство стал бессрочным.
                                            Вид на жительство позволяет работать в любом субъекте Российской Федерации, получать социальные выплаты, бесплатное образование и медицину, владеть недвижимостью и указывать её в качестве постоянного места проживания, а также оформлять приглашения для родственников из визовых государств и выезжать за пределы России, если требуется.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                                           aria-controls="collapseThree">
                                            Гражданство Российской Федерации
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Иностранные граждане приходят к желанию получить гражданство России разными путями: кто-то сразу приезжает с этой целью и начинает с получения квоты, а кто-то много лет живет по виду на жительство, после чего принимает решение получить паспорт гражданина Российской Федерации.
                                            Процедура получения гражданства России - очень сложный процесс, который требует большого количества документов, времени и терпения.
                                            Каждый случай подачи документов на гражданство индивидуален и нет универсальной формулы получения паспорта.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingfour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapsefour" aria-expanded="false"
                                           aria-controls="collapsefour">
                                            Что такое НРЯ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsefour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Носитель русского языка - это статус, позволяющий иностранному гражданину в упрощенном порядке получить вид на жительство и гражданство Российской Федерации.
                                            Для получения статуса НРЯ необходимо быть дееспособным иностранным гражданином, свободно владеющим русским языком и имеющим основания для прохождения данной комиссии.
                                            Основанием для получения статуса Носителя русского языка должно являться подтверждение постоянного проживания иностранного гражданина или его родственника по прямой восходящей линии на территории РСФСР или Российской Федерации.
                                            Статус НРЯ выдается пожизненно и воспользоваться им можно один раз.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingfive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse"
                                           data-parent="#accordion" href="#collapsefive" aria-expanded="false"
                                           aria-controls="collapsefive">
                                            Что такое КВОТА на РВП?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapsefive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <p>Ежегодно для каждого региона нашей страны Правительством Российской Федерации утверждается квота на выдачу разрешений на временное проживание в России (РВП) – количественное ограничение на выдачу таких разрешений иностранным гражданам и лицам без гражданства, у которых отсутствуют основания для их получения без учета квоты.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12 fadeInRight wow">
                    <div className="faq-form form-style">
                        <div className="cf-msg"></div>
                       <Form/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}