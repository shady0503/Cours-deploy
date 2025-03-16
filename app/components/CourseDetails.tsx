// /components/CourseDetailsPage.tsx

"use client";
import React, { useState, useCallback, memo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SliderItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface TimelineItem {
  step: number;
  description: string;
}

export interface ResourceItem {
  title: string;
  description: string;
}

export interface CourseDetailsProps {
  courseTitle: string;
  courseSubtitle: string;
  heroImageUrl: string;
  introParagraphs: string[];
  resourcesHeading: string;
  resources: ResourceItem[];
  sliderTitle: string;
  sliderItems: SliderItem[];
  timelineTitle: string;
  timelineItems: TimelineItem[];
  faqTitle: string;
  faqItems: FAQItem[];
}

const SampleNextArrow = memo(function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", right: "10px" }}
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6 text-purple" />
    </div>
  );
});

const SamplePrevArrow = memo(function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6 text-purple" />
    </div>
  );
});

export const CourseDetailsPage: React.FC<CourseDetailsProps> = memo(({
  courseTitle,
  courseSubtitle,
  heroImageUrl,
  introParagraphs,
  resourcesHeading,
  resources,
  sliderTitle,
  sliderItems,
  timelineTitle,
  timelineItems,
  faqTitle,
  faqItems,
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenFAQ(prev => prev === index ? null : index);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    lazyLoad: 'ondemand' as const,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="font-inter text-offblack">
      {/* HERO SECTION */}
      <section className="bg-purple text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">{courseTitle}</h1>
            <p className="text-xl sm:text-2xl">{courseSubtitle}</p>
            <div className="mt-6">
              <p className="mb-4 text-lg">Des sessions adaptées pour les adolescents de 12 à 18 ans</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block bg-orange text-black font-medium py-2 px-4 rounded">
                  Débutants bienvenus
                </span>
                <span className="inline-block bg-orange text-black font-medium py-2 px-4 rounded">
                  Matériel fourni
                </span>
                <span className="inline-block bg-orange text-black font-medium py-2 px-4 rounded">
                  Certificat inclus
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src={heroImageUrl}
                alt={courseTitle}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-lightpink py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple">
            <div className="space-y-6">
              {introParagraphs.map((para, idx) => (
                <p key={idx} className="text-lg leading-relaxed">
                  {idx === 0 ? (
                    <span className="font-semibold text-xl text-purple">{para}</span>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES HEADING */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-purple mb-6 relative">
            <span className="relative z-10">{resourcesHeading}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Découvrez toutes les ressources disponibles pour votre apprentissage
          </p>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="bg-gradient-to-b from-white to-pink-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((resource, index) => (
              <div key={index} className="transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col">
                  <div className="p-6 bg-purple text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="bg-gradient-to-b from-gray-500 to-white py-20 px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-16 text-center relative">
            <span className="relative inline-block after:content-[''] text-purple after:absolute after:w-24 after:h-1 after:bg-orange-500 after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2">
              {sliderTitle}
            </span>
          </h2>
          <div className="slider-container relative px-8 sm:px-12 my-12">
            <Slider {...sliderSettings} className="slider-catalog">
              {sliderItems.map((item, index) => (
                <div key={index} className="px-2 py-3 overflow-hidden">
                  <div className="bg-white rounded-xl shadow-lg h-full flex flex-col">
                    <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-lg text-purple sm:text-xl md:text-2xl font-bold text-purple-600 mb-2 sm:mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 flex-grow line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <style jsx global>{`
            .slider-catalog .slick-track {
              display: flex !important;
              margin: 0 !important;
              padding: 1rem 0 !important;
            }
            .slider-catalog .slick-slide {
              height: inherit !important;
              display: flex !important;
              overflow: hidden !important;
              margin: 0 8px !important;
            }
            .slider-catalog .slick-slide > div {
              display: flex;
              width: 100%;
              height: 100%;
              overflow: hidden !important;
            }
            .slider-catalog .slick-slide img {
              transition: transform 0.5s ease;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .slick-prev, .slick-next {
              width: 40px !important;
              height: 40px !important;
              background: rgba(255, 255, 255, 0.9) !important;
              border-radius: 50% !important;
              box-shadow: 0 2px 5px rgba(0,0,0,0.2) !important;
              z-index: 10 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              font-size: 0 !important;
              line-height: 0 !important;
              color: transparent !important;
            }
            .slick-prev:before, .slick-next:before {
              display: none !important;
            }
            .slick-prev {
              left: -25px !important;
            }
            .slick-next {
              right: -25px !important;
            }
            @media (max-width: 640px) {
              .slick-prev, .slick-next {
                width: 32px !important;
                height: 32px !important;
                top: 50% !important;
              }
            }
            @media (min-width: 640px) {
              .slick-prev { left: -20px !important; }
              .slick-next { right: -20px !important; }
            }
            @media (min-width: 1024px) {
              .slick-prev { left: -40px !important; }
              .slick-next { right: -40px !important; }
            }
            .slider-catalog .slick-slide,
            .slider-catalog .slick-slide > div,
            .slider-catalog .slick-slide > div > div {
              height: 100% !important;
              box-sizing: border-box !important;
            }
            .slider-catalog .slick-list,
            .slider-catalog .slick-track {
              height: auto !important;
            }
          `}</style>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-purple mb-8 text-center">
            {timelineTitle}
          </h2>
          <div className="flex flex-col space-y-8">
            {timelineItems.map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="bg-orange text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  {item.step}
                </div>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gradient-to-br from-offwhite to-pink-50 py-20 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-purple mb-12 text-center relative">
            <span className="relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-orange after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2">
              {faqTitle}
            </span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border-l-4 border-purple rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium focus:outline-none"
                >
                  <span className="flex-1 pr-4 text-purple-800">{item.question}</span>
                  <span className={`bg-purple-50 rounded-full p-1 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    {openFAQ === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-purple" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-purple" />
                    )}
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

CourseDetailsPage.displayName = "CourseDetailsPage";

