import React from 'react';

export default function WhoWeAre() {
    return <section className="about-area ptb-100" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12  wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>О нас</h2>
                        <p></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12 wow fadeInLeft">
                        <div className="about-img black-opacity">
                            <img src="assets/images/skill.jpg" alt="команда_програжданство"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 wow fadeInRight">
                        <div className="about-wrap">
                            <p>Мы молодой коллектив единомышленников и партнеров.
                                Наша цель - оказание квалифицированной поддержки желающим получить гражданство РФ в вопросе получения легального статуса на территории России.
                                Наши знания и связи дают нам возможность осуществлять индивидуальный подход к решению задач в каждом отдельном случае.
                                Основным направлением деятельности компании является помощь мигрантам в оформлении документов, сопровождение на всех этапах получения гражданства России, решение юридических вопросов.</p>
                            <p>Мы ценим взаимоуважение, открытость и честность, а главное безопасность наших клиентов.</p>
                            <ul>
                                <li>Правовой анализ ситуации</li>
                                <li>Подбор нормативно-правовой базы</li>
                                <li>Разработка оптимального пути разрешения вопроса</li>
                                <li>Пакет документов для РВП/ВНЖ/Гражданства РФ</li>
                                <li>Запросы в архивы</li>
                                <li>Нотариально заверенные переводы документов</li>
                                <li>Информационно-консультационные услуги по подаче документов в Москве и МО</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
