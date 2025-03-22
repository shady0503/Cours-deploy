"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// DONNÉES DU CARROUSEL

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    starimg: string;
    detail: string;
}

const postData: DataType[] = [
    {
        profession: 'Designer UX/UI',
        name: 'Andrew Williams',
        imgSrc: '/assets/students/user-1.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Je suis Designer Graphique Junior depuis plus de 10 ans. Certains problèmes que j'ai rencontrés sont abordés ici avec leurs solutions. C'est pourquoi ce cours est si génial !"
    },
    {
        profession: 'Designer UX/UI',
        name: 'Cristian Doru Barin',
        imgSrc: '/assets/students/user-2.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Je suis Designer Graphique Junior depuis plus de 10 ans. Certains problèmes que j'ai rencontrés sont abordés ici avec leurs solutions. C'est pourquoi ce cours est si génial !"
    },
    {
        profession: 'Designer UX/UI',
        name: 'Tanzeel Ur Rehman',
        imgSrc: '/assets/students/user-3.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Je suis Designer Graphique Junior depuis plus de 10 ans. Certains problèmes que j'ai rencontrés sont abordés ici avec leurs solutions. C'est pourquoi ce cours est si génial !"
    },
    {
        profession: 'Designer UX/UI',
        name: 'Andrew Williams',
        imgSrc: '/assets/students/user-1.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Je suis Designer Graphique Junior depuis plus de 10 ans. Certains problèmes que j'ai rencontrés sont abordés ici avec leurs solutions. C'est pourquoi ce cours est si génial !"
    },
]

// CONFIGURATION DU CARROUSEL

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };


        return (
            <div id="students-section" className='bg-bgpink'>
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">

                    <div className='sm:flex justify-between items-center pb-6'>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-purple my-4">Ce que disent nos <br /> étudiants satisfaits</h2>
                    </div>

                    <p className='text-lg font-medium pb-12'>Développez vos compétences avec nos cours et mentors d'entreprises de classe mondiale.</p>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                                    <div className="relative">
                                        <Image
                                            src={items.imgSrc}
                                            alt="photo"
                                            className="inline-block m-auto rounded-full ring-2 ring-white"
                                            width={64}
                                            height={64}
                                        />
                                        <Image
                                            src="/assets/students/greenpic.svg"
                                            alt="fond vert"
                                            className="absolute inline-block position-green"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <h3 className="text-sm pt-4 pb-2">{items.profession}</h3>
                                    <h4 className="text-2xl font-semibold pb-3">{items.name}</h4>
                                    <Image
                                        src={items.starimg}
                                        alt="étoiles"
                                        className="m-auto pb-6"
                                        width={100}
                                        height={20}
                                    />
                                    <p className="text-lg font-medium leading-9">{items.detail}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
