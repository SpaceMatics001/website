import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_9mv1xm6', // Replace with your EmailJS Service ID
        'template_hj7scfb', // Replace with your EmailJS Template ID
        formData,
        'SpaceMatics' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen p-8 bg-gray-950">
      <div className="container flex flex-col mx-auto text-white">
        <div className="p-4 w-1/2">
          <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
          <p className="mt-10 mb-4">
            <strong>Email:</strong>{' '}
            <a href="mailto:spacematics001@gmail.com" className="underline">
              spacematics001@gmail.com
            </a>
          </p>
          <p className="mb-8">
            <strong>Contact Number:</strong> 9748038141
          </p>
          <a
            href={`https://wa.me/9748038141?text=${encodeURIComponent(
              "Hi Sir/Ma'am, I am sharing my CV and want to join you"
            )}`}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Message Us
          </a>
        </div>
        <div className="p-4 w-1/2">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.41941508468166!3d37.77492977975984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806e45723456%3A0x0!2zMiwgMTg5IFN0YW5mb3JkIFJvY2tldCwgU2FuIEZyYW5jaXNjb8O1bmdvLCBDQTMyMCA2U0M!5e0!3m2!1sen!2sus!4v1634892358032!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-white">
        <h2 className="mb-4 text-2xl font-bold">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
