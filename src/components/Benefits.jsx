import React from 'react';

export default function Benefits(){
    return <section id="benefits" className="benefits-area ptb-140" data-src="">
        <div className="container">
            <h4 className="_normal" id="ways">Сравните существующие способы получения гражданства</h4>
            <div className="ways">
                <div className="ways__item d-flex">
                    <div className="ways__name">
                        <span>Способ</span>
                        <p>Общие основания (квота)</p>
                    </div>
                    <div className="ways__name"><span>Этапы</span>
                        <p>Квота → РВП → ВНЖ → Продление ВНЖ → Гражданство</p></div>
                    <div className="ways__name"><span>Сроки</span>
                        <p>Минимум 6–7 лет</p></div>
                </div>
                <div className="ways__item d-flex">
                    <div className="ways__name">
                        <span className="ways__mobile">Способ</span>
                        <p>Брак, дети, родители граждане России</p>
                    </div>
                    <div className="ways__name"><span className="ways__mobile">Этапы</span>
                        <p>РВП → ВНЖ → Гражданство</p></div>
                    <div className="ways__name"><span className="ways__mobile">Сроки</span>
                        <p>От 2,5 до 3,5 лет</p></div>
                </div>
                <div className="ways__item d-flex">
                    <div className="ways__name">
                        <span className="ways__mobile">Способ</span>
                        <p>Программа носителей русского языка</p>
                    </div>
                    <div className="ways__name"><span className="ways__mobile">Этапы</span>
                        <p>НРЯ → ВНЖ → Выход из гражданства (за исключением граждан Украины и Таджикистана) →
                            Гражданство</p></div>
                    <div className="ways__name"><span className="ways__mobile">Сроки</span>
                        <p>От 1 до 5 лет</p></div>
                </div>
            </div>
        </div>
    </section>
}