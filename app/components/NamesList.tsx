// /components/NamesList.tsx

"use client";
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Name {
  course: string;
  slug: string;
  imageSrc: string;
  profession: string;
  price: string;
  category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
  {
    course: 'HTML, CSS, JS',
    slug: 'html-css-js',
    imageSrc: '/assets/courses/coursesOne.svg',
    profession: 'HTML, CSS, Javascript Development',
    price: '40',
    category: 'webdevelopment'
  },
  {
    course: 'Node.js',
    slug: 'node-js',
    imageSrc: '/assets/courses/coursesTwo.svg',
    profession: 'Backend with Node.js and Express.js',
    price: '21',
    category: 'webdevelopment'
  },
  {
    course: 'Database',
    slug: 'database',
    imageSrc: '/assets/courses/coursesThree.svg',
    profession: 'Learn Mongodb with Mongoose',
    price: '21',
    category: 'webdevelopment'
  },
  {
    course: 'React.js',
    slug: 'react-js',
    imageSrc: '/assets/courses/coursesFour.svg',
    profession: 'Learn React with Redux toolkit',
    price: '99',
    category: 'webdevelopment'
  },
  {
    course: 'React Native',
    slug: 'react-native',
    imageSrc: '/assets/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '89',
    category: 'mobiledevelopment'
  },
  {
    course: 'Swift',
    slug: 'swift',
    imageSrc: '/assets/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '89',
    category: 'mobiledevelopment'
  },
  {
    course: 'Flutter',
    slug: 'flutter',
    imageSrc: '/assets/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '69',
    category: 'mobiledevelopment'
  },
  {
    course: 'Onsen UI',
    slug: 'onsen-ui',
    imageSrc: '/assets/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '69',
    category: 'mobiledevelopment'
  },
  {
    course: 'TensorFlow',
    slug: 'tensorflow',
    imageSrc: '/assets/courses/coursesTwo.svg',
    profession: 'Learn TensorFlow with SQL',
    price: '99',
    category: 'datascience'
  },
  {
    course: 'AWS',
    slug: 'aws',
    imageSrc: '/assets/courses/coursesFour.svg',
    profession: 'AWS Deep Learning AMI',
    price: '99',
    category: 'datascience'
  },
  {
    course: 'Bokeh',
    slug: 'bokeh',
    imageSrc: '/assets/courses/coursesOne.svg',
    profession: 'Learn Bokeh with Python',
    price: '99',
    category: 'datascience'
  },
  {
    course: 'Scikit',
    slug: 'scikit',
    imageSrc: '/assets/courses/coursesThree.svg',
    profession: 'Scikit with Python Development',
    price: '89',
    category: 'datascience'
  },
  {
    course: 'Laas',
    slug: 'laas',
    imageSrc: '/assets/courses/coursesThree.svg',
    profession: 'Infra-as-a-Service',
    price: '21',
    category: 'cloudcomputing'
  },
  {
    course: 'Iaas',
    slug: 'iaas',
    imageSrc: '/assets/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '29',
    category: 'cloudcomputing'
  },
  {
    course: 'Paas',
    slug: 'paas',
    imageSrc: '/assets/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '99',
    category: 'cloudcomputing'
  },
  {
    course: 'Saas',
    slug: 'saas',
    imageSrc: '/assets/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '58',
    category: 'cloudcomputing'
  }
];

const NamesList = () => {
  const router = useRouter();

  const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

  const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
  const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
  const dataScience = names.filter((name) => name.category === 'datascience');
  const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

  let selectedNames: Name[] = [];

  if (selectedButton === 'mobiledevelopment') {
    selectedNames = mobileDevelopment;
  } else if (selectedButton === 'webdevelopment') {
    selectedNames = webDevelopment;
  } else if (selectedButton === 'datascience') {
    selectedNames = dataScience;
  } else if (selectedButton === 'cloudcomputing') {
    selectedNames = cloudComputing;
  }

  const nameElements = selectedNames.map((name, index) => (
    <div key={index} className="shadow-lg rounded-lg overflow-hidden h-[500px] flex flex-col">
      <div className="text-lg sm:text-sm py-5 lg:py-0 flex-1 flex flex-col">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 h-48">
          <img
            src={name.imageSrc}
            alt={name.course}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-6 block font-normal text-gray-900">
            {name.course}
          </div>
        </div>
        <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
          {name.profession}
        </p>
        <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
          <p>12 Classes</p>
            <div className="flex flex-row space-x-4">
            <div className="flex items-center">
              <Image
              src="/assets/courses/account.svg" 
              alt="circle" 
              width={20}
              height={20}
              className="w-auto h-auto"
              />
              <p className="text-lightgrey ml-1">120</p>
            </div>
            <div className="flex items-center">
              <Image 
              src="/assets/courses/Star.svg" 
              alt="star" 
              width={20}
              height={20}
              className="w-auto h-auto"
              />
              <p className="ml-1">4.5</p>
            </div>
            </div>
        </div>
        <div className="flex justify-between mt-auto mb-4">
          <button
            onClick={() => {
              router.push(`/Courses/${name.slug}`);
            }}
            className="bg-transparent ml-auto mr-4 hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div id="courses-section" className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:flex justify-between items-center pb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
          <div>
            <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
              Explore Classes
            </button>
          </div>
        </div>
        <div className="flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
          {/* FOR DESKTOP VIEW */}
          <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Web Development</button>
          <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile Development</button>
          <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
          <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button>
          {/* FOR MOBILE VIEW */}
          <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
          <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
          <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
          <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
        </div>
        <div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
              <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                {nameElements.length > 0 ? (
                  nameElements
                ) : (
                  <p>No data to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
