import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
