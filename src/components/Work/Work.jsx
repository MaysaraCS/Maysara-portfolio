import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="p-4">
              <div className="relative w-full pb-[60%] overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4 pt-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container - FIXED FOR MOBILE SCROLLING */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-90 p-0 sm:p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 rounded-none sm:rounded-xl shadow-2xl w-full sm:max-w-4xl min-h-screen sm:min-h-0 sm:my-8 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed at top, always visible */}
            <div className="sticky top-0 z-20 flex justify-end p-4 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-500 hover:rotate-90 shadow-lg"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Image Section */}
              <div className="w-full flex justify-center bg-gray-800 px-4 pb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[250px] sm:max-h-[400px] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm md:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* All Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs md:text-sm font-semibold text-purple-400 rounded-full px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;