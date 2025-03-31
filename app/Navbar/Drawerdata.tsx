import React from "react";
import Link from "next/link";
import Contactus from './Contactus';

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: NavigationItem[] = [
  { name: 'Accueil', href: '/', current: false },
  { name: 'À Propos', href: '/#about-section', current: false },
  { name: 'Cours', href: '/#courses-section', current: false },
  // { name: 'Mentors',   href: '/#mentors-section',  current: false },
  // { name: 'Étudiants',   href: '/#students-section', current: false },
  { name: 'Contact', href: '/#contact-section', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-purple' : ' hover:text-bgpurple',
                  'block  py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 flex flex-col space-y-2">
              {/* Numéro de téléphone */}

              {/* Icônes des réseaux sociaux */}
              <div className="">
                <Link
                  href="https://wa.me/33669498768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-500 flex gap-4 mt-2"
                >
                  <FaWhatsapp size={24} />
                  <span
                    className="hover:text-green-500"
                  >
                    Whatsapp
                  </span>
                </Link>
                {/* <a
                  href="https://instagram.com/your-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com/your-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  <FaFacebookF size={24} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
