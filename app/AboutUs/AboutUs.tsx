'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  // Keep track of which video is currently selected
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Introduction de l&apos;Atelier", duration: "4:12" },
    { id: "LXb3EKWsInQ", title: "Aperçu de la Leçon", duration: "2:43" },
    { id: "CevxZvSJLk8", title: "Démonstration Pratique", duration: "3:55" },
    { id: "9bZkp7q19f0", title: "Histoires de Réussite", duration: "2:14" },
    { id: "l482T0yNkeo", title: "Retours des Étudiants", duration: "1:29" },
  ];

  // Keep track of which video is currently selected
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);
  return (
    <div id="about-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8 mt-4">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-bgpurple text-offwhite w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-32">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Encourager les Jeunes Esprits en IA et Informatique
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-lightgrey">
            Nous éveillons la curiosit&eacute; et construisons l&apos;avenir en enseignant aux enfants et adolescents les merveilles de la technologie.
          </p>
          <div className="mt-10">
            <Link href="#courses-section" className="inline-block bg-green text-white py-3 px-6 rounded-md text-lg">
              Voir Nos Cours
            </Link>
          </div>
        </div>
        {/* Decorative Animated Blob */}
        <div className="absolute -bottom-2 -right-64 md:-right-20 lg:right-0 w-[600px] h-[400px] opacity-20 pointer-events-none">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300,300)">
              <path
                d="M120,-157.6C152.7,-141.5,174.3,-102.6,184.4,-62.4C194.4,-22.2,192.9,19.2,178.4,56.4C164,93.6,136.6,126.6,103.9,143.6C71.3,160.7,33.4,161.7,-3.4,166.4C-40.2,171.2,-76,179.5,-104.8,168.1C-133.6,156.7,-155.5,125.5,-163.7,91.7C-171.9,57.8,-166.5,21.3,-161.6,-15.6C-156.7,-52.5,-152.3,-89.9,-131.9,-108.1C-111.6,-126.4,-75.3,-125.5,-41.6,-143.2C-7.9,-160.9,23.1,-197.2,60.7,-200C98.3,-202.8,142.3,-172.1,120,-157.6Z"
                fill="#FCF6EF"
              >
                <animate
                  attributeName="d"
                  dur="15s"
                  repeatCount="indefinite"
                  values="
                    M120,-157.6C152.7,-141.5,174.3,-102.6,184.4,-62.4C194.4,-22.2,192.9,19.2,178.4,56.4C164,93.6,136.6,126.6,103.9,143.6C71.3,160.7,33.4,161.7,-3.4,166.4C-40.2,171.2,-76,179.5,-104.8,168.1C-133.6,156.7,-155.5,125.5,-163.7,91.7C-171.9,57.8,-166.5,21.3,-161.6,-15.6C-156.7,-52.5,-152.3,-89.9,-131.9,-108.1C-111.6,-126.4,-75.3,-125.5,-41.6,-143.2C-7.9,-160.9,23.1,-197.2,60.7,-200C98.3,-202.8,142.3,-172.1,120,-157.6Z;
                    M133.4,-181.1C170.2,-160.2,195.8,-119.1,206,-76.7C216.2,-34.4,210.9,9.1,198.8,50.5C186.7,91.9,167.8,131.1,135.2,151.9C102.7,172.7,56.4,175.1,14.9,165.5C-26.7,155.9,-63.5,134.3,-100.2,113.2C-136.8,92.2,-173.3,71.7,-189.9,38.9C-206.5,6.2,-203.2,-38.8,-184.2,-74.4C-165.2,-110,-130.5,-136.1,-94.9,-157C-59.4,-177.9,-22.8,-193.6,15.3,-210.9C53.4,-228.1,96.7,-247,133.4,-181.1Z;
                    M114.8,-171.5C147.5,-150.2,172,-118.3,184.6,-82.2C197.3,-46.2,198,-6,189.1,31.7C180.1,69.3,161.5,104.3,133.6,134C105.7,163.7,68.6,188.1,28.8,196.1C-11,204.1,-53.5,195.8,-87,175.9C-120.5,156.1,-145,124.7,-162.3,89.9C-179.5,55.1,-189.5,16.9,-186.2,-20.9C-182.9,-58.8,-166.2,-96.2,-138.2,-120.1C-110.3,-143.9,-71,-154.1,-33.1,-160.5C4.8,-166.9,41.3,-169.6,78.5,-178.9C115.7,-188.3,153.5,-204.3,114.8,-171.5Z;
                    M120,-157.6C152.7,-141.5,174.3,-102.6,184.4,-62.4C194.4,-22.2,192.9,19.2,178.4,56.4C164,93.6,136.6,126.6,103.9,143.6C71.3,160.7,33.4,161.7,-3.4,166.4C-40.2,171.2,-76,179.5,-104.8,168.1C-133.6,156.7,-155.5,125.5,-163.7,91.7C-171.9,57.8,-166.5,21.3,-161.6,-15.6C-156.7,-52.5,-152.3,-89.9,-131.9,-108.1C-111.6,-126.4,-75.3,-125.5,-41.6,-143.2C-7.9,-160.9,23.1,-197.2,60.7,-200C98.3,-202.8,142.3,-172.1,120,-157.6Z
                  "
                />
              </path>
            </g>
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-offwhite">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple mb-6">Qui Nous Sommes</h2>
          <p className="text-lg text-lightgrey leading-relaxed">
            Fond&eacute;e avec une passion pour la technologie et l&apos;&eacute;ducation, notre plateforme est d&eacute;di&eacute;e &agrave; rendre l&apos;IA et l&apos;informatique accessibles aux jeunes apprenants. Nous combinons des exp&eacute;riences d&apos;apprentissage interactives avec du contenu engageant pour &eacute;veiller la curiosit&eacute;, inspirer la cr&eacute;ativit&eacute; et autonomiser la prochaine g&eacute;n&eacute;ration d&apos;innovateurs.
          </p>
        </div>
        {/* Decorative Blob */}
        <div className="relative w-full h-[32rem] md:h-[36rem] lg:h-[40rem]">
          <Image
            src="/assets/About/software-engineer.svg"
            alt="Decorative software engineer illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-lightpink">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple mb-6">Nos Mission</h2>
          <p className="text-lg text-offblack leading-relaxed">
            Notre mission est de rendre l&apos;&eacute;ducation technologique amusante et accessible. Nous d&eacute;mystifions les concepts d&apos;IA et d&apos;informatique en int&eacute;grant des projets interactifs, des exemples concrets et une r&eacute;solution cr&eacute;ative de probl&egrave;mes dans chaque le&ccedil;on. Que vous soyez d&eacute;butant ou que vous ayez d&eacute;j&agrave; de l&apos;exp&eacute;rience, notre plateforme s&apos;adapte aux diff&eacute;rents styles d&apos;apprentissage pour inspirer confiance et innovation.
          </p>
          <div className="mt-8">
            <svg className="w-full h-24" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FCF6EF"
                fillOpacity="1"
                d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,122.7C672,96,768,64,864,80C960,96,1056,160,1152,192C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple mb-6">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-grey500 rounded-lg">
              <h3 className="text-2xl font-semibold text-offblack mb-4">Innovation</h3>
              <p className="text-lg text-lightgrey">
                Nous inspirons la cr&eacute;ativit&eacute; en encourageant nos &eacute;tudiants &agrave; explorer de nouvelles id&eacute;es et &agrave; remettre en question la pens&eacute;e conventionnelle.
              </p>
            </div>
            <div className="p-6 border border-grey500 rounded-lg">
              <h3 className="text-2xl font-semibold text-offblack mb-4">Inclusivit&eacute;</h3>
              <p className="text-lg text-lightgrey">
                Nos cours sont con&ccedil;us pour tous. Nous croyons que chaque enfant devrait avoir la possibilit&eacute; d&apos;apprendre et de r&eacute;ussir.
              </p>
            </div>
            <div className="p-6 border border-grey500 rounded-lg">
              <h3 className="text-2xl font-semibold text-offblack mb-4">Autonomisation</h3>
              <p className="text-lg text-lightgrey">
                Nous &eacute;quipons les jeunes esprits avec les connaissances et les comp&eacute;tences n&eacute;cessaires pour devenir les futurs leaders en technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      {/* <section className="py-16 bg-lightpink">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple mb-6">Notre Parcours</h2>
          <p className="text-lg text-offblack leading-relaxed">
            Ce qui a commenc&eacute; comme une petite initiative communautaire s&apos;est transform&eacute; en un mouvement national. Depuis notre premier atelier interactif jusqu&apos;au lancement d&apos;un programme complet sur l&apos;IA et l&apos;informatique, chaque &eacute;tape a &eacute;t&eacute; motiv&eacute;e par notre engagement in&eacute;branlable &agrave; inspirer et &eacute;duquer. Nous c&eacute;l&eacute;brons chaque &eacute;tape franchie et nous nous r&eacute;jouissons de cr&eacute;er encore plus d&apos;opportunit&eacute;s pour les jeunes apprenants.
          </p>
          <div className="mt-8">
            <div className="relative w-full h-[32rem] md:h-[36rem] lg:h-[40rem]">
              <Image
                src="/assets/About/Customer Journey Graph.png"
                alt="Visualisation de notre parcours"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="relative overflow-hidden bg-bgpurple text-offwhite w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-20"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-3/5">
            <header className="mb-10">
              <h2 className="text-5xl font-bold text-white mb-3">
                Nos Ateliers &amp; Le&ccedil;ons
              </h2>
              <p className="text-xl text-white opacity-80">
                5 vid&eacute;os s&eacute;lectionn&eacute;es pour d&eacute;couvrir notre incroyable parcours
              </p>
            </header>
            <div className="transition-all duration-500 ease-in-out">
              <div
                className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                  transform: "translateZ(0)",
                  border: "3px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <iframe
                  key={selectedVideo}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?rel=0`}
                  title="Ateliers &amp; Le&ccedil;ons"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <aside className="w-full md:w-2/5 bg-purple-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300">
            <div className="p-6 bg-gradient-to-r from-purple-800 to-purple-900">
              <h3 className="text-2xl font-semibold text-white">
                Nos Ateliers &amp; Le&ccedil;ons
              </h3>
              <p className="text-white text-opacity-80 mt-1">
                Une s&eacute;rie de vid&eacute;os s&eacute;lectionn&eacute;es
              </p>
            </div>
            <ul className="divide-y divide-purple-800/50">
              {videos.map((video, index) => (
                <li key={video.id}>
                  <button
                    onClick={() => setSelectedVideo(video.id)}
                    className={`flex items-center justify-between w-full p-5 text-left transition-all duration-300 ${selectedVideo === video.id
                      ? "bg-purple-700 shadow-inner"
                      : "hover:bg-purple-800"
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full font-medium ${selectedVideo === video.id
                          ? "bg-white text-purple-900"
                          : "bg-purple-700 text-white"
                          }`}
                      >
                        {index + 1}
                      </span>
                      <p className="text-white font-medium text-lg">
                        {video.title}
                      </p>
                    </div>
                    <span className="text-white text-opacity-70">
                      {video.duration}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-700 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 -right-32 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl" />
      </section> */}
    </div>
  );
};

export default AboutUs;
