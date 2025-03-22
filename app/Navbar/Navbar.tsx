import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import Contactus from './Contactus';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'À propos de nous', href: '/#about-section', current: false },
    { name: 'Cours', href: '/#courses-section', current: false },
    // { name: 'Mentors', href: '/#mentors-section', current: false },
    { name: 'Étudiants', href: '/#students-section', current: false },
    { name: 'Contactez-nous', href: '/#contact-section', current: false },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className=" w-full fixed z-20 bg-grey500">
            <>
                {/* Top bar (logo, links, phone, social icons) */}
                <div className="flex items-center justify-between h-20 px-4 ml-36">
                    {/* Left side: Logo + Desktop Nav */}
                    <div className="flex items-center space-x-4">
                        {/* Logo */}


                        {/* Desktop navigation links (hidden on mobile) */}
                        <div className="hidden md:flex items-center space-x-4">
                            <img
                                className="h-8 w-8"
                                src="/assets/logo/Logo.svg"
                                alt="Courses-Logo"
                            />
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-purple' : 'hover:text-purple',
                                        'px-3 py-4 text-[15px] font-medium space-links'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}

                        </div>
                    </div>

                    {/* Right side: Phone number + Social icons (hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:0669498768"
                            className="text-base font-semibold text-black hover:text-purple"
                        >
                            06 69 49 87 68
                        </a>
                        <a
                            href="https://wa.me/33669498768"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-500"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a
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
                        </a>
                    </div>

                    {/* Mobile Menu Button (shown on small screens) */}
                    <div className="md:hidden">
                        <Bars3Icon
                            className="h-6 w-6 cursor-pointer"
                            aria-hidden="true"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>

                {/* Drawer for Mobile (shows up when isOpen = true) */}
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}
                
                >
                    <Drawerdata />
                </Drawer>
            </>
        </Disclosure>
    );
};

export default Navbar;
