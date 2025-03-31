import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '/', current: false },
    { name: 'À propos de nous', href: '/#about-section', current: false },
    { name: 'Cours', href: '/#courses-section', current: false },
    { name: 'Contactez-nous', href: '/#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('/');
    
    // Effect to track hash changes and scroll positions
    useEffect(() => {
        // Initial check for hash in URL
        if (window.location.hash) {
            setActiveSection(window.location.hash);
        } else {
            setActiveSection('/');
        }

        // Function to handle hash changes
        const handleHashChange = () => {
            if (window.location.hash) {
                setActiveSection(window.location.hash);
            } else {
                setActiveSection('/');
            }
        };

        // Function to handle scroll and highlight current section
        const handleScroll = () => {
            // Only run this on the homepage
            if (pathname !== '/') return;
            
            const sections = navigation
                .filter(item => item.href.includes('#'))
                .map(item => {
                    const id = item.href.split('#')[1];
                    const element = document.getElementById(id);
                    if (!element) return null;
                    
                    return {
                        id: '#' + id,
                        offsetTop: element.offsetTop - 100, // Adjust offset as needed
                        offsetBottom: element.offsetTop + element.offsetHeight - 100
                    };
                })
                .filter(Boolean);
                
            // Find the current visible section based on scroll position
            const scrollPosition = window.scrollY;
            
            // Default to home if at the top
            if (scrollPosition < 200) {
                setActiveSection('/');
                return;
            }
            
            // Find the section that matches current scroll position
            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom) {
                    setActiveSection(section.id);
                    return;
                }
            }
        };

        // Add event listeners
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('scroll', handleScroll);
        
        // Call once on mount to set initial active section
        handleScroll();

        // Clean up event listeners
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    // Update navigation items with current status
    const updatedNavigation = navigation.map(item => ({
        ...item,
        current: 
            // For homepage
            (item.href === '/' && activeSection === '/') || 
            // For hash fragments
            (item.href.includes('#') && activeSection === '#' + item.href.split('#')[1])
    }));

    return (
        <Disclosure as="nav" className="w-full fixed z-30 bg-white shadow-md">
            <>
                {/* Top bar (logo, links, phone, social icons) */}
                <div className="flex items-center justify-between h-20 px-4 ml-24">
                    {/* Left side: Logo + Desktop Nav */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop navigation links (hidden on mobile) */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="flex items-center space-x-3"
                            >
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src="/assets/banner/programming-monitor-svgrepo-com.svg"
                                        alt="Smart Programmers Logo"
                                        width={48}
                                        height={48}
                                        className="transition-transform"
                                    />
                                    <span className="text-xl font-bold text-gray-800 hover:text-purple transition-colors">
                                        Smart <span className="text-purple font-serif italic">Programmers</span>
                                    </span>
                                </div>
                            </Link>

                            <div className="flex items-center space-x-1">
                                {updatedNavigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-purple border-b-2 border-purple' : 'text-gray-700 hover:text-purple hover:border-b-2 hover:border-purple',
                                            'px-4 py-4 text-[15px] font-medium transition-all duration-200'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side: Phone number + Social icons (hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://wa.me/212672941912"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-500 flex items-center space-x-2 text-green-500"
                        >
                            <FaWhatsapp size={24} />
                            <span className="text-sm font-medium hover:text-green-500">
                                Whatsapp
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button (shown on small screens) */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/assets/banner/programming-monitor-svgrepo-com.svg"
                                alt="Smart Programmers Logo"
                                width={36}
                                height={36}
                                className="transition-transform hover:scale-110"
                            />
                            <span className="text-sm font-bold text-gray-800">
                                Smart <span className="text-purple font-serif italic">Programmers</span>
                            </span>
                        </div>
                        <Bars3Icon
                            className="h-6 w-6 cursor-pointer"
                            aria-hidden="true"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>

                {/* Drawer for Mobile (shows up when isOpen = true) */}
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Drawerdata />
                </Drawer>
            </>
        </Disclosure>
    );
};

export default Navbar;