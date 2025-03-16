'use client'
import React from 'react';
import emailjs from 'emailjs-com';

// Replace these with your actual EmailJS credentials
const serviceId = 'service_liqv2xr';
const templateId = 'template_e42rcre';  // e.g., "template_abc123"
const publicKey = 'J5ef65iNu-7Xn81OV'; // e.g., "J5ef65iNu-7Xn81OV"

const ContactSection = () => {
  // Handle form submission
  interface EmailJSResponse {
    text: string;
  }

  interface EmailFormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const sendEmail = (e: EmailFormEvent): void => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result: EmailJSResponse) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error: EmailJSResponse) => {
        console.error('Email sending error:', error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <section
      id="contact-section"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or want to work together? We&apos;d love to hear from you!
          </p>
        </div>
        {/* Card container with shadow effect */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-6 md:p-10">
              <h3 className="text-xl font-semibold text-purple mb-6">Send us a message</h3>
              <form className="space-y-5" onSubmit={(e)=>{
                alert('Message sent successfully!');
                e.preventDefault();

              }}>
                {/* Subject (matches {{title}}) */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="title"         // Must match {{title}}
                    id="title"
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm
                               focus:ring-2 focus:ring-purple focus:border-transparent
                               transition duration-200"
                    placeholder="Brief subject..."
                    required
                  />
                </div>

                {/* Name (matches {{name}}) */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"          // Must match {{name}}
                    id="name"
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm
                               focus:ring-2 focus:ring-purple focus:border-transparent
                               transition duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email (matches {{email}}) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"         // Must match {{email}}
                    id="email"
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm
                               focus:ring-2 focus:ring-purple focus:border-transparent
                               transition duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message (matches {{message}}) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"       // Must match {{message}}
                    id="message"
                    rows={5}
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm
                               focus:ring-2 focus:ring-purple focus:border-transparent
                               transition duration-200"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 text-base font-medium
                             rounded-lg shadow-md text-white bg-purple hover:bg-purple-700
                             focus:outline-none focus:ring-2 focus:ring-purple-500
                             focus:ring-offset-2 transition duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="h-80 lg:h-auto relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.712856051413!2d-77.03653078465786!3d38.89767697957016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6952c19e6637d%3A0x3f12d3bdc77cb5!2s1600%20Pennsylvania%20Ave%2C%20Washington%20DC!5e0!3m2!1sen!2sus!4v1635927303152!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform
                          hover:-translate-y-2 transition-all duration-300 border-t-4
                          border-purple-600"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                            bg-gradient-to-r from-purple to-bgpurple text-white mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042
                     11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493
                     1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21
                     3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-purple">Phone</h4>
            <p className="text-gray-600 text-lg font-medium hover:text-purple-600 transition-colors">
              (123) 456-7890
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform
                          hover:-translate-y-2 transition-all duration-300 border-t-4
                          border-purple-600"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                            bg-gradient-to-r from-purple to-bgpurple text-white mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2
                     2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-purple">Email</h4>
            <p className="text-gray-600 text-lg font-medium hover:text-purple-600 transition-colors">
              info@example.com
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform
                          hover:-translate-y-2 transition-all duration-300 border-t-4
                          border-purple-600"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                            bg-gradient-to-r from-purple to-bgpurple text-white mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827
                     0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-purple">Address</h4>
            <p className="text-gray-600 text-lg font-medium hover:text-purple-600 transition-colors">
              1600 Pennsylvania Ave, Washington DC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
