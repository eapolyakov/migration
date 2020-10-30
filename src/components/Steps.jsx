import React from 'react';

export default function Steps(){
    return <div className="featured-area ptb-30">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Как мы работаем?</h2>
                        <p>Мы оказываем профессиональную поддержку на каждом этапе</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="featured-wrap">
                        <ul>
                            <li className="wow fadeInLeft" data-wow-delay=".1s">
                                <h3>1 шаг</h3>
                                <div className="featured-content">
                                    <div className="featured-img">
                                        <img src="assets/images/featured/1.jpg" alt=""/>
                                    </div>
                                    <div className="featured-info">
                                        <h4 className="text-uppercase">Запись</h4>
                                        <p>
                                            Первичная консультация по телефону, сбор краткой информации для подготовки эксперта к встрече.                                        </p>
                                    </div>
                                </div>
                                <div className="featured col-md-5">
                                    <div className="featured-info-left">

                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay=".2s">
                                <h3>2 шаг</h3>
                                <div className="featured-content">
                                    <div className="featured-img">
                                        <img src="assets/images/featured/2.jpg" alt=""/>
                                    </div>
                                    <div className="featured-info">
                                        <h4 className="text-uppercase">Консультация</h4>
                                        <p>На очной встрече юрист собирает всю необходимую информацию для решения Вашей ситуации, отталкиваясь от теоретических и практических знаний.</p>
                                    </div>
                                </div>
                                <div className="featured col-md-5">
                                    <div className="featured-info-right text-right">

                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-delay=".3s">
                                <h3>3 шаг</h3>
                                <div className="featured-content">
                                    <div className="featured-img">
                                        <img src="assets/images/featured/3.jpg" alt=""/>
                                    </div>
                                    <div className="featured-info">
                                        <h4 className="text-uppercase">Документы</h4>
                                        <p>Специально для Вас будет разработан пошаговый этап решения проблемы и оформления необходимых документов.</p>
                                    </div>
                                </div>
                                <div className="featured col-md-5">
                                    <div className="featured-info">

                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-delay=".4s">
                                <h3>4 шаг</h3>
                                <div className="featured-content">
                                    <div className="featured-img">
                                        <img src="assets/images/featured/4.jpg" alt=""/>
                                    </div>
                                    <div className="featured-info">
                                        <h4 className="text-uppercase">Сопровождение под ключ</h4>
                                        <p>Юрист будет поддерживать с Вами связь до достижения желаемого результата.</p>
                                    </div>
                                </div>
                                <div className="featured col-md-5">
                                    <div className="featured-info">

                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>Вы получаете результат</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}