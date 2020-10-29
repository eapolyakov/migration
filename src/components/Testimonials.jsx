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
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised. by
                            injected humour, or randomised.</p>
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
                            img="assets/images/client/2.jpg"
                            alt="client_1"
                            name="Bob Brock"
                            counrty="Belgium"
                            star1={<i className="fa fa-star"/>}
                            star2={<i className="fa fa-star"/>}
                            star3={<i className="fa fa-star"/>}
                            star4={<i className="fa fa-star"/>}
                            star5={<i className="fa fa-star"/>}
                            p="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                        necessary, making this the first true generator on the Internet. It uses a
                                        dictionary of over 200 Latin words"
                        />
                        <TestimonialsItemLeft
                            img="assets/images/client/2.jpg"
                            alt="client_1"
                            name="Robert Kyle"
                            counrty="Belgium"
                            star1={<i className="fa fa-star"/>}
                            star2={<i className="fa fa-star"/>}
                            star3={<i className="fa fa-star"/>}
                            star4={<i className="fa fa-star"/>}
                            star5={<i className="fa fa-star"/>}
                            p="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                        necessary, making this the first true generator on the Internet. It uses a
                                        dictionary of over 200 Latin words"
                        />
                        <TestimonialsItemLeft
                            img="assets/images/client/2.jpg"
                            alt="client_1"
                            name="Robert Kyle"
                            counrty="Belgium"
                            star1={<i className="fa fa-star"/>}
                            star2={<i className="fa fa-star"/>}
                            star3={<i className="fa fa-star"/>}
                            star4={<i className="fa fa-star"/>}
                            star5={<i className="fa fa-star"/>}
                            p="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                        necessary, making this the first true generator on the Internet. It uses a
                                        dictionary of over 200 Latin words"
                        />
                        <TestimonialsItemLeft
                            img="assets/images/client/2.jpg"
                            alt="client_1"
                            name="Robert Kyle"
                            counrty="Belgium"
                            star1={<i className="fa fa-star"/>}
                            star2={<i className="fa fa-star"/>}
                            star3={<i className="fa fa-star"/>}
                            star4={<i className="fa fa-star"/>}
                            star5={<i className="fa fa-star"/>}
                            p="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                        necessary, making this the first true generator on the Internet. It uses a
                                        dictionary of over 200 Latin words"
                        />
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
}