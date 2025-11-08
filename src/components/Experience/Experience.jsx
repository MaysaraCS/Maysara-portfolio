import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line - Fixed positioning for mobile and desktop */}
        <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle - Fixed positioning */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section - Fixed margins for mobile */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
              ml-16 sm:ml-0 
              ${index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"} 
              transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                {/* Company Logo/Image */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm sm:text-md text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                {experience.desc}
              </p>
              
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm sm:text-base">Skills:</h5>
                <ul className="flex flex-wrap mt-2 gap-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;