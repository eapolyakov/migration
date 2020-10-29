import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderItem from "./SliderItem";

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
        600: {items: 1},
        700: {items: 1}
    }

};

export default function Slider(){
    return <section className="slider-area">
            <OwlCarousel
                className="owl-stage-outer"
                {...options}
            >
                <SliderItem
                    img="assets/images/slider/1.jpg"
                    alt={"гражданство_РФ"}
                    h2={"Стать гражданином России"}
                    p={""}

                />
                <SliderItem
                    img="assets/images/slider/2.jpg"
                    alt={"гражданство_РФ"}
                    h2={"Получить гражданство России"}
                    p={""}

                />
            </OwlCarousel>
        </section>


}