"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/slickCompany/airbnb.svg"
    },
    {
        imgSrc: "/assets/slickCompany/hubspot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/microsoft.svg"
    },
    {
        imgSrc: "/assets/slickCompany/google.svg"
    },
    {
        imgSrc: "/assets/slickCompany/walmart.svg"
    },
    {
        imgSrc: "/assets/slickCompany/fedex.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center bg-transparent absolute w-full left-0 top-[55px] z-10'>
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="relative w-[200px] h-[100px]">
                                    <Image src={item.imgSrc} alt={item.imgSrc} fill className="object-contain" priority />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
