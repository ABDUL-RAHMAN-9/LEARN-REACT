import React, { useState, useEffect } from 'react';

const Navbar = () =>
{
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) =>
    {
        const element = document.getElementById(id);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`
        fixed top-0 w-full z-50 px-6 sm:px-12 py-4
        backdrop-blur-xl bg-white/20 border-b border-white/10
        transition-colors duration-500 ease-in-out
        ${scrolled ? 'bg-indigo-700 bg-opacity-80 border-indigo-600 shadow-lg' : ''}
      `}
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                <h3
                    className={`text-2xl font-extrabold tracking-wide transition-colors duration-500 ${scrolled ? 'text-white' : 'text-gray-100'
                        }`}
                >
                    Abdul Rahman
                </h3>

                <ul className="flex flex-wrap gap-4 lg:gap-6 justify-center text-sm sm:text-base font-medium">
                    {['about', 'skills', 'projects', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                onClick={(e) =>
                                {
                                    e.preventDefault();
                                    scrollToSection(section);
                                }}
                                className={`
                  px-4 py-2 rounded-xl transition-all duration-300
                  hover:bg-indigo-600 hover:scale-105
                  ${scrolled ? 'text-white' : 'text-gray-100'}
                `}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
