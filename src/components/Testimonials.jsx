import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TestimonialsItemLeft from "./TestimonialsItemLeft";

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
                        className="owl-theme"
                        autoplay
                        items={2}
                        loop
                        autoplayHoverPause={1}
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