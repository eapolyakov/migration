import React from 'react';

export default function Benefits(){
    return <section className="benefits-area ptb-100">
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
                        <p>От 6 месяцев до 2 лет</p></div>
                </div>
                <div className="ways__item d-flex">
                    <div className="ways__name">
                        <span className="ways__mobile">Способ</span>
                        <p>Брак, дети, родители граждане России</p>
                    </div>
                    <div className="ways__name"><span className="ways__mobile">Этапы</span>
                        <p>РВП → ВНЖ → Гражданство</p></div>
                    <div className="ways__name"><span className="ways__mobile">Сроки</span>
                        <p>От 6 месяцев до года</p></div>
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
                        <p>От 3 до 6 месяцев</p></div>
                </div>
            </div>
        </div>
    </section>
}