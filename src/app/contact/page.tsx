import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        We wouldd love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md p-3 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
