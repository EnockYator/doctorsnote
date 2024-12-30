import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 px-3 pb-16 pt-6 md:pt-9 mt-[52px]">
      <div className="max-w-4xl mx-auto p-3 md:p-6 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We value your feedback and inquiries. Feel free to reach out to us using the contact information below or the form.
        </p>

        <div className="mb-10">
          <h2 className="text-lg font-semibold text-blue-800 mt-4">General Inquiries</h2>
          <p className="text-gray-600">
            - <strong>Email:</strong> verifiednotes@dr-snote.com <br />
            - <strong>Phone:</strong> (531) 224-6633
          </p>
        </div>

        <div className="mb-10">
  <h2 className="text-lg font-semibold text-blue-800 mt-4">Support Hours</h2>
  <p className="text-gray-700">United Kingdom (UK Time)</p>
  <p className="text-gray-600">
    - Monday to Friday: 9:00 AM - 6:00 PM<br />
    - Saturday: 10:00 AM - 4:00 PM<br />
</p>
</div>
<div className="mb-10">
    <h2 className="text-lg font-semibold text-blue-800 mt-4">Connect With Us</h2>
    <p className="flex flex-col space-y-2 text-gray-600">
    <Link to="http://twitter.com/DoctorsNoteOfficial" 
    className="flex items-center text-blue-600 underline"
    target="_blank" 
    rel="noopener noreferrer"
    >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5 mr-2"
        >
        <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.88-2.36 8.4 8.4 0 01-2.68 1.03 4.21 4.21 0 00-7.3 3.84A11.94 11.94 0 013 4.89a4.2 4.2 0 001.3 5.62 4.18 4.18 0 01-1.9-.52v.05a4.22 4.22 0 003.38 4.14 4.26 4.26 0 01-1.9.07 4.23 4.23 0 003.94 2.93 8.47 8.47 0 01-5.25 1.8A11.91 11.91 0 008 19.35c7.72 0 11.95-6.4 11.95-11.95 0-.18-.01-.37-.02-.55a8.5 8.5 0 002.1-2.17z"/>
        </svg>
    @DoctorsNoteOfficial
  </Link>
  <Link to="https://facebook.com/DoctorsNoteOfficial" 
    className="flex items-center text-blue-600 underline"
    target="_blank" 
    rel="noopener noreferrer"
    >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5 mr-2"
        >
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.65 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.4c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.89h-2.3v6.99C18.35 21.13 22 16.99 22 12z"/>
        </svg>
    @DoctorsNoteOfficial
  </Link>
</p>

        </div>

        <div className="max-w-md bg-gray-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-lg font-semibold text-blue-800 mt-4 text-center">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
