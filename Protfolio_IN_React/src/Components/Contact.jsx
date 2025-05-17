import React from 'react';

const Contact = () =>
{
  return (
    <section
      id="contact"
      className="my-32 max-w-5xl mx-4 md:mx-6 lg:mx-auto px-6 text-center rounded-3xl 
                 bg-white/10 dark:bg-white/10 backdrop-blur-md shadow-xl 
                 transition-all duration-300 hover:shadow-2xl pb-3"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-white pt-10 tracking-tight">
        Contact
      </h2>

      {/* Social Links Container */}
      <div className="flex flex-row sm:flex-row justify-center items-center gap-20 my-10">
        {/* GitHub Link */}
        <a
          href="https://github.com/ABDUL-RAHMAN-9"
          target="_blank"
          rel="noreferrer"
          className="text-white text-lg font-medium transition-all duration-300 transform 
                     hover:scale-105 hover:text-indigo-400 hover:underline"
        >
          GitHub <span className="font-bold">@GitHub</span>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/abdul-rahaman-19a2bb2a4"
          target="_blank"
          rel="noreferrer"
          className="text-white text-lg font-medium transition-all duration-300 transform 
                     hover:scale-105 hover:text-indigo-400 hover:underline"
        >
          LinkedIn <span className="font-bold">@Linkedin</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
