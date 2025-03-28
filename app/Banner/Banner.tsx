"use client"

import Image from "next/image";
import Link from "next/link";



const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
                            Améliorez vos compétences en ingénierie <br /> avec nos cours
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-black">
                            Développez vos compétences avec nos cours et mentors
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="hidden sm:block -space-x-2 overflow-hidden">
                                <img
                                    className="inline-block h-24 w-24"
                                    src="assets/banner/programming-monitor-svgrepo-com.svg"
                                    alt=""
                                />
                            </div>
                            {/* <div className='bannerBorder sm:pl-8'>
                                <div className='flex justify-center sm:justify-start'>
                                    <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
                                    <div className="relative w-24 h-6">
                                        <Image
                                            src='/assets/banner/Stars.svg'
                                            alt="stars-icon"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-sm'>Rated by 25k on google.</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>


                    {/* DROPDOWN BUTTONS */}

                    <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4">
                        <Link
                            href="/#about-section" 
                            className="px-8 py-3 text-base font-medium text-white bg-purple rounded-lg  transition-colors"
                        >
                            À propos de nous
                        </Link>
                        <Link
                            href="/#contact-section" 
                            className="px-8 py-3 text-base font-medium text-purple border border-purple rounded-lg hover:bg-purple hover:text-white transition-colors"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                    {/* <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            <div className="col-span-3">
                                <Dropdownone />
                            </div>
                            <div className="col-span-3">
                                <Dropdowntwo />
                            </div>
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                <button className="bg-purple w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                    Start
                                </button>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </main>
    )
}

export default Banner;
