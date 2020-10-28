import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderItem from "./SliderItem";

export default function Slider(){
    return <section className="slider-area">
            <OwlCarousel
                className="owl-theme"
                autoplay
                items={1}
                loop
                dots="no-dots"
                autoplayHoverPause={1}
            >
                <SliderItem
                    img="assets/images/slider/1.jpg"
                    alt={"гражданство_РФ"}
                    h2={"Гражданин России"}
                    p={"simply dummy text of the printing and typesetting industry. Lorem Ipsum\n" +
                    "has been the industry's standard dummy text ever since the 1500s, when\n" +
                    "an unknown printer took a galley of type and scrambled it to make a type\n" +
                    "specimen book."}

                />
                <SliderItem
                    img="assets/images/slider/2.jpg"
                    alt={"гражданство_РФ"}
                    h2={"Добро пожаловать в Россию"}
                    p={"simply dummy text of the printing and typesetting industry. Lorem Ipsum\n" +
                    "has been the industry's standard dummy text ever since the 1500s, when\n" +
                    "an unknown printer took a galley of type and scrambled it to make a type\n" +
                    "specimen book."}

                />
            </OwlCarousel>
        </section>


}