import React from 'react';
import MyProfile from '../assets/MyProfile.jpg';

const Hero = () =>
{
    return (
        <section
            id="hero"
            className="relative flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl mx-auto px-6 lg:px-0 min-h-[85vh] pt-32 gap-10"
        >
            {/* Left Content: Intro Text */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 z-10">
                <h4 className="text-indigo-500 uppercase tracking-wide font-semibold text-sm">
                    Crafting Digital Masterpieces
                </h4>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight max-w-xl">
                    Transforming Ideas <br /> Into Seamless Web Experiences
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
                    I’m Abdul Rahman — a passionate web artisan dedicated to building visually stunning, lightning-fast, and user-friendly websites that elevate your brand.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                >
                    Explore My Work
                </a>
            </div>

            {/* Right Content: Profile Image */}
            <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-600 dark:border-indigo-400 transform hover:scale-105 transition-transform duration-300 z-10">
                <img
                    src={MyProfile}
                    alt="My Profile"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </section>
    );
};

export default Hero;
