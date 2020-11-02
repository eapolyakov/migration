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
    return <section className="slider-area parallax">
            <OwlCarousel
                className="owl-stage-outer"
                {...options}
            >
                <SliderItem
                    img="assets/images/slider/sl3.jpeg"
                    alt={"услуги мигрантам"}
                    h1={"Услуги мигрантам"}
                    p={"Быстро безопасно надёжно"}

                />
                <SliderItem
                    img="assets/images/slider/sl1.jpeg"
                    alt={"гражданство РФ"}
                    h1={"Гражданство России"}
                    p={"Быстро безопасно надёжно"}

                />
                <SliderItem
                    img="assets/images/slider/sl4.jpeg"
                    alt={"вид на жительство"}
                    h1={"Вид на жительство (ВНЖ)"}
                    p={"Быстро безопасно надёжно"}

                />
                <SliderItem
                    img="assets/images/slider/sl2.jpeg"
                    alt={"Разрешение на временное проживание"}
                    h1={"Разрешение на временное проживание (РВП)"}
                    p={"Быстро безопасно надёжно"}

                />
            </OwlCarousel>
        </section>


}