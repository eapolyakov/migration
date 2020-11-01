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
                            <p>Мы это молодая команда единомышленников и партнеров, объединенных целью оказания качественной помощи
                                мигрантам.
                                Наш опыт позволяет обеспечивать основательный подход к решению юридических вопросов.
                                Основным направлением нашей работы является решение миграционных вопросов, мы помогаем
                                организациям в оформлении иностранных работников, решаем любые юридические вопросы связанные
                                с легальным пребыванием иностранцев в России.
                               </p>
                            <p>Ценности нашей компании: уважение, открытость и честность, безопасность для иностранных
                                граждан.</p>
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
