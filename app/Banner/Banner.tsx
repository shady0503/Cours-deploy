"use client"

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <main className="relative flex flex-col lg:flex-row bg-white overflow-hidden min-h-[600px]">
            {/* Left content area - taking 45% on desktop */}
            <div className="w-full lg:w-[45%] px-8 py-16 lg:px-16 lg:py-20 flex flex-col items-center text-center justify-center z-10 bg-gradient-to-br from-white to-[#f8f9fa]">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Améliorez vos compétences en ingénierie avec nos cours
                </h1>
                
                <p className="mt-6 text-lg text-gray-700">
                    Développez vos compétences avec nos cours et mentors
                </p>
                
                <div className="mt-8">
                    <img
                        src="/assets/banner/programming-monitor-svgrepo-com.svg"
                        alt="Programming icon"
                        className="h-16 w-auto"
                    />
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="/#about-section"
                        className="px-8 py-3 bg-purple text-white font-medium rounded-lg text-center transition-colors hover:bg-purple-700"
                    >
                        À propos de nous
                    </Link>
                    <Link 
                        href="/#contact-section"
                        className="px-8 py-3 border border-purple-800 text-purple font-medium rounded-lg text-center transition-colors hover:bg-purple hover:text-white"
                    >
                        Contactez-nous
                    </Link>
                </div>
            </div>
            
            {/* Right image area - with manual positioning and higher container */}
            <div className="w-full lg:w-[55%] h-80 md:h-96 lg:h-auto relative overflow-hidden">
                <div className="absolute inset-0 top-20"> {/* Negative top margin to reveal more of the top */}
                    <Image
                        src="/assets/banner/image.jpg"
                        alt="Formation en programmation"
                        width={800}
                        height={600}
                        priority
                        className="object-cover"
                    />
                    
                    {/* Gradient overlay for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:from-white lg:via-white/30 lg:to-transparent"></div>
                </div>
            </div>
        </main>
    );
};

export default Banner;