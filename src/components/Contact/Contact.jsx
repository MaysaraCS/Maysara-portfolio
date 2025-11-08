import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            disabled={isLoading}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            disabled={isLoading}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            disabled={isLoading}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            disabled={isLoading}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;