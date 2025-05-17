const Skills = () =>
{
    const skillSet = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "C#",
        "Java",
        "Git & GitHub",
        "Node.js",
        "C",
        "Express.js",
        "MongoDB",
        "npm",
        "C++",
    ];

    return (
        <section
            id="skills"
            className="my-32 max-w-5xl mx-auto px-6 text-center"
        >
            {/* Title */}
            <h2 className="text-5xl font-extrabold text-white mb-12">
                My Skills
            </h2>

            {/* Skills Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillSet.map((skill, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md 
                       text-white font-semibold text-lg transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-2 hover:scale-105"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
