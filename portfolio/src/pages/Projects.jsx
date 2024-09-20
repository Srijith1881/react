import Navbar from "../components/Navbar";
import p1 from '../assets/img/project1.png'
import p2 from '../assets/img/project2.jpg'
import p3 from '../assets/img/project3.jpg'




const Projects = () => {
  return (
    <>
      <div className="min-h-screen bg2 flex flex-col justify-center items-center py-12">
        <h1 className="text-4xl font-bold text-[#BFA181] mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-[#0A1828] p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={p1}
              alt="Frontend for a restaurant"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-[#BFA181] mb-2">Frontend for a Restaurant</h2>
              <p className="text-white mb-4">
                Built an interactive and eye-catching UI for a restaurant to make table booking and menu online.
              </p>
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#BFA181] text-black py-2 px-4 rounded hover:bg-[#A48665] transition-colors"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#0A1828] p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={p2}
              alt="Numberplate recognition system"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-[#BFA181] mb-2">Numberplate Recognition System</h2>
              <p className="text-white mb-4">
                A project based on creating a model for extracting text from numberplates without neural networks.
              </p>
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#BFA181] text-black py-2 px-4 rounded hover:bg-[#A48665] transition-colors"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#0A1828] p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src={p3}
              alt="Smart Irrigation System"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-[#BFA181] mb-2">Smart Irrigation System</h2>
              <p className="text-white mb-4">
                This project makes irrigation smarter by using sensors and machine learning to monitor plant and soil health.
              </p>
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#BFA181] text-black py-2 px-4 rounded hover:bg-[#A48665] transition-colors"
              >
                Visit GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
