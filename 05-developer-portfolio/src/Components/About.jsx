
import React from 'react';

const About = () =>
{
    return (
        <section
            id="about"
            className="my-32 mx-4 md:mx-6 lg:mx-auto max-w-5xl px-6 py-16 rounded-3xl 
                       bg-white/10 backdrop-blur-md shadow-xl text-white 
                       flex flex-col lg:flex-row items-center gap-10 transition-all duration-300 
                       hover:shadow-2xl"
        >
            {/* About Image */}
            <div className="flex-1 w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* About Text */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    About Me
                </h2>
                <p className="text-lg text-gray-200 max-w-lg">
                    I am your friendly neighborhood awesome developer, always ready to code solutions!
                </p>
                <p className="text-lg text-gray-300 max-w-lg">
                    Passionate and self-taught, I’ve spent the last 4 years crafting beautiful web products and experiences. While my learning began on YouTube, my skills have grown through hands-on projects and deep technical dives.
                </p>
            </div>
        </section>
    );
};

export default About;
