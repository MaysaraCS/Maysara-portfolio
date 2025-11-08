import React, { useState, useEffect } from "react";
import { certificate } from "../../constants";

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCertificate(cert);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  return (
    <section
      id="certificate"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my earned certificates, showcasing my skills and expertise across various technologies
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificate.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="p-4">
              <div className="relative w-full pb-[70%] overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold text-white text-center line-clamp-2 min-h-[3.5rem]">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container - Full Screen Certificate Viewer */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-95 p-0 sm:p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 rounded-none sm:rounded-xl shadow-2xl w-full sm:max-w-5xl min-h-screen sm:min-h-0 sm:my-8 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed at top, always visible */}
            <div className="sticky top-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white max-w-[80%]">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-500 hover:rotate-90 shadow-lg flex-shrink-0"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Content - Full Certificate Image */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
              <div className="w-full flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Download/View Button */}
              <div className="mt-6 w-full max-w-md">
                <a
                  href={selectedCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3.5 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  View Full Size
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;