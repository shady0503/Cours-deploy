"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";

interface Name {
  course: string;
  imageSrc: string;
  profession: string[];
}

const names: Name[] = [
  {
    course: 'Programmation de Base',
    imageSrc: '/assets/courses/coursesOne.jpg',
    profession: [
      'Comprendre et utiliser les concepts fondamentaux de la programmation.',
    ],
  },
  {
    course: 'Python',
    imageSrc: '/assets/courses/coursesTwo.svg',
    profession: [
      'Apprendre à programmer avec Python.',
    ],
  },
  {
    course: 'Java',
    imageSrc: '/assets/courses/coursesThree.png',
    profession: [
      'Apprendre la programmation orientée objet avec Java.',
    ],
  },
  {
    course: 'Développement Web',
    imageSrc: '/assets/courses/coursesFour.jpg',
    profession: [
      'Concevoir et développer des pages web interactives.',
      'Créer des sites web personnels ou des blogs.',
    ],
  },
  {
    course: 'Développement de Jeux',
    imageSrc: '/assets/courses/coursesFive.png',
    profession: [
      'Développer des jeux 2D et 3D avec des interactions et des animations.',
      'Explorer les concepts de physique dans les jeux.',
    ],
  },
  {
    course: 'Intelligence Artificielle et Machine Learning',
    imageSrc: '/assets/courses/coursesSix.png',
    profession: [
      'Créer des modèles simples d\'apprentissage automatique.',
      'Comprendre et appliquer les concepts d\'IA dans des projets pratiques.',
    ],
  },
  {
    course: 'Cybersécurité',
    imageSrc: '/assets/courses/coursesSeven.png',
    profession: [
      'Apprendre les pratiques de sécurité de base pour protéger les données et les systèmes.',
      'Simuler des attaques et des défenses pour comprendre les vulnérabilités.',
    ],
  },
];

// Helper function to convert a course name into a slug.
const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CoursesSlider = () => {
  const router = useRouter();

  // Calculate the slidesToShow dynamically (optional)
  const slidesToShow = Math.min(names.length, 3);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false, // Disable infinite mode
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "0px", // Ensure no extra padding is causing clones
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(names.length, 2),
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerPadding: "0px",
        }
      }
    ]
  };

  return (
    <section
      id="courses-section"
      className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"    >
      <div className="sm:flex justify-between items-center pb-8 md:pb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-purple my-4">
          Cours Populaires
        </h2>
      </div>

      <Slider {...settings} className="courses-slider">
        {names.map((item, index) => (
          <div key={index} className="px-2 pb-6">
            {/* Card with fixed height for uniformity */}
            <div className="shadow-lg rounded-lg overflow-hidden h-[500px] flex flex-col bg-white transition-all duration-300 hover:shadow-xl">
              {/* Top (image) */}
              <div className="relative overflow-hidden rounded-t-lg bg-gray-100 h-56">
                <Image
                  src={item.imageSrc}
                  alt={item.course}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Content area */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.course}
                </h3>

                {/* Map over each phrase in profession */}
                <ul className="list-disc space-y-1 text-md text-gray-600 mb-4 pl-5">
                  {item.profession.map((phrase, i) => (
                    <li key={i}>{phrase}</li>
                  ))}
                </ul>

                {/* Button at bottom */}
                <div className="flex justify-end mt-auto pt-4">
                  <button
                    onClick={() => router.push(`/Courses/${slugify(item.course)}`)}
                    className="hover:bg-purple text-purple font-medium hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded transition-colors duration-300"
                    aria-label={`View more details about ${item.course}`}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CoursesSlider;
