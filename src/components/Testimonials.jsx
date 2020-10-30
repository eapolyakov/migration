import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TestimonialsItemLeft from "./TestimonialsItemLeft";

const options = {
    margin: 30,
    responsiveClass: true,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    loop: true,
    responsive: {
        0: {items: 1},
        400: {items: 1},
        600: {items: 2},
        700: {items: 2}
    }

};

export default function Testimonials(){
    return <section className="testmonial-area ptb-30">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 wow fadeInUp">
                    <div className="section-title text-center">
                        <h2>Отзывы наших клиентов</h2>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="test-active">
                    <OwlCarousel
                        className="owl-stage-outer"
                        {...options}
                    >
                        <TestimonialsItemLeft
                            img=""
                            alt=""
                            name=""
                            counrty=""
                            star1=""
                            star2=""
                            star3=""
                            star4=""
                            star5=""
                            p="Здесь будет отзыв"
                        />
                        <TestimonialsItemLeft
                            img=""
                            alt=""
                            name=""
                            counrty=""
                            star1=""
                            star2=""
                            star3=""
                            star4=""
                            star5=""
                            p="Здесь будет отзыв"
                        />
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
}