import React from 'react';

export default function QuizForm(){
    return <div className="container-fluid">
    <div className="quiz-form col-xs-12">
        <div className="faq-form form-style">
            <div className="cf-msg"></div>
            <form action="mail.php" method="post" id="cf">
                <div className="row">
                    <div className="col-xs-12">
                        <span>Имя</span>
                        <input type="text" placeholder="Ваше имя" id="name" name="name"/>
                    </div>
                    <div className="col-xs-12">
                        <span>Телефон</span>
                        <input type="text" placeholder="Ваш телефон" id="phone" name="phone"/>
                    </div>
                    <div className="col-xs-12">
                        <span>Email</span>
                        <input type="email" placeholder="Ваш Email" id="email" name="email"/>
                    </div>
                    <div className="col-xs-12">
                        <button id="submit" className="cont-submit btn-contact btn-style"
                                name="submit">Отправить заявку
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
        </div>
}