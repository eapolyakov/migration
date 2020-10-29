import React, { useState } from 'react';
import QuizForm from "./QuizForm";

export default function Quiz() {
    const questions = [
        {
            questionText: 'Ваше гражданство?',
            answerOptions: [
                { answerText: 'Украина', isCorrect: false },
                { answerText: 'Беларусь', isCorrect: false },
                { answerText: 'Узбеекистан', isCorrect: true },
                { answerText: 'Молдова', isCorrect: false },
                { answerText: 'Таджикистан', isCorrect: false },
                { answerText: 'Армения', isCorrect: false },
                { answerText: 'Азербайджан', isCorrect: true },
                { answerText: 'Другое', isCorrect: false },
            ],
        },
        {
            questionText: 'Где Вы годились?',
            answerOptions: [
                { answerText: 'СССР', isCorrect: false },
                { answerText: 'РСФСР', isCorrect: true },
                { answerText: 'Другое', isCorrect: false },
            ],
        },
        {
            questionText: 'Оформляли ли вы документы в Росии?',
            answerOptions: [
                { answerText: 'Патент', isCorrect: true },
                { answerText: 'Разрешение на временное проживание', isCorrect: false },
                { answerText: 'Вид на жительство', isCorrect: false },
                { answerText: 'Другое', isCorrect: false },
                { answerText: 'Нет', isCorrect: false },
            ],
        },
        {
            questionText: 'Есть ли у Вас родственники граждане России?',
            answerOptions: [
                { answerText: 'Родители', isCorrect: false },
                { answerText: 'Супруг(а)', isCorrect: false },
                { answerText: 'Дети', isCorrect: false },
                { answerText: 'Нет', isCorrect: true },
            ],
        },
        {
            questionText: 'Когда Вы планируете стать гражданином РФ?',
            answerOptions: [
                { answerText: 'Как можно скорее', isCorrect: false },
                { answerText: 'Через месяц', isCorrect: false },
                { answerText: 'Через 2-3 месяца', isCorrect: false },
                { answerText: 'Не знаю', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className="container" id="quiz">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Сможете ли Вы стать гражданином Росиии?</h2>
                        <p>Ответьте на пять вопросов и узнайте!</p>
                    </div>
                </div>
            </div>
            <div className="quiz col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInDown">
                <div className="row">
                    {showScore ? (
                        <div className='score-section'>
                            <div className="container">
                                <div className="row">
                                    <h4>Поздравляем! Мы сможем Вам помочь!</h4>
                                        <QuizForm/>
                                </div>
                            </div>
                        </div>
                    ) : (
                       <>
                    <div className='question-section'>
                        <div className="container">
                            <div className='question-count'>
                                <span>Вопрос {currentQuestion + 1}</span> из {questions.length}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                     </>
                    )}
                 </div>
            </div>
        </div>
    )
}