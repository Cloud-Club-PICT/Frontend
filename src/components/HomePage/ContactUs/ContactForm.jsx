import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-primary-300">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we'll get back to you soon.      </p>      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary-100">Name*</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-100">Email*</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-100">Phone number*</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your phone number" 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-100">Description</label>
          <textarea 
            name="description" 
            placeholder="Enter your description" 
            required 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-gradient-to-r from-primary-100 to-primary-200 text-white font-bold rounded-md hover:bg-gradient-to-l hover:from-primary-200 hover:to-primary-100 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
