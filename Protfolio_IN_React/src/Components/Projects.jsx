import GithubProfileSearchApp from '../assets/GithubProfileSearchApp.png';
import TrendyTerrace from '../assets/TrendyTerrace.png';

const Projects = () =>
{
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-14 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-5xl font-extrabold text-white text-center drop-shadow-xl">
        My Projects
      </h2>

      <div
        className="p-10 bg-white/10 backdrop-blur-md rounded-2xl text-white flex flex-col justify-center items-center gap-6 lg:flex-row shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition duration-300"
      >
        <div className="w-80 rounded-xl overflow-hidden">
          <a
            href="https://abdul-rahman-9.github.io/Git-hub-Profiles-Search-App/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <img
              src={GithubProfileSearchApp}
              alt="GitHub Profile Search App"
              className="w-full h-full object-cover rounded-xl hover:brightness-110 transition"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center gap-4 flex-1 px-4">
          <h2 className="font-bold text-3xl text-center lg:text-left">
            <a
              href="https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile Search App
            </a>
          </h2>
          <p className="text-center lg:text-left">
            GitHub Profile Search App is a simple and intuitive web application that allows users to effortlessly search for GitHub profiles. It provides a clean interface for retrieving and displaying GitHub user information.
          </p>
        </div>
      </div>

      <div
        className="p-10 bg-white/10 backdrop-blur-md rounded-2xl text-white flex flex-col justify-center items-center gap-6 lg:flex-row-reverse shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition duration-300"
      >
        <div className="w-80 rounded-xl overflow-hidden">
          <a
            href="https://abdul-rahman-9.github.io/Trendy-Fully-Responsive-Website/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full block"
          >
            <img
              src={TrendyTerrace}
              alt="Trendy Terrace"
              className="w-full h-full object-cover rounded-xl hover:brightness-110 transition"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center gap-4 flex-1 px-4">
          <h2 className="font-bold text-3xl text-center lg:text-left">
            <a
              href="https://abdul-rahman-9.github.io/Trendy-Fully-Responsive-Website/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trendy Terrace
            </a>
          </h2>
          <p className="text-center lg:text-left">
            Trendy Terrace is a fully responsive modern website template designed for interior design or furniture brands, featuring a sticky and collapsible navbar, a visually appealing hero section with call-to-action buttons, and dedicated sections for new arrivals, about, and project showcases. It includes smooth scroll-based animations using ScrollReveal.js, interactive FAQ accordions, and hover effects for an engaging user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
