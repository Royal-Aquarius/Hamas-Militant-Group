"use client";

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from "../../../public/SLIDE-1.jpg";
import Image2 from "../../../public/SLIDE-2.jpg";
import Image3 from "../../../public/SLIDE-3.jpg";
import Image4 from "../../../public/SLIDE-4.jpg";
import Image6 from "../../../public/SLIDE-5.jpg";
import Image5 from "../../../public/SLIDE-6.jpg";
import Image7 from "../../../public/SLIDE-7.jpg";
import Image8 from "../../../public/SLIDE-8.jpg";
import Image from "next/image";

export default class ImagesCaurosel extends Component {
    render(): ReactNode {
        let data = [
            {
                img: Image1,
                title: 'RPG-Man',
            },
            {
                img: Image2,
                title: 'Yahya Sinwar',
            },
            {
                img: Image3,
                title: 'Sharp Shooter',
            },
            {
                img: Image4,
                title: 'Abu Ubaida Press Conference',
            },
            {
                img: Image5,
                title: 'Ismail Haniya',
            },
            {
                img: Image6,
                title: 'Target Shooter',
            },
            {
                img: Image7,
                title: 'Tunnel Fighter',
            },
            {
                img: Image8,
                title: 'Ubaida Press',
            },
        ]
        const settings = {
            dots: true,
            dotsClass: 'slick-dots line-indicator',
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,

                    }
                }
            ],

            customPaging: (i: number) => (
                <div className="mt-2 text-xs opacity-0">{i}</div>
            ),
        };

        return(
            <div className="mt-10 w-full">
                <Slider {...settings} className="w-full">
                    {
                        data.map((val, index) => {
                            return (
                                <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none" key={index}>
                                    <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                                        <Image src={val.img} className="w-full h-[300px] md:h-[600px] object-cover" alt={val.title}></Image>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}