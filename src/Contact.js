import React from 'react';

const Contact = () => {
  const mailId = "spacematics001@gmail.com"; 
  const phoneNumber = "9748038141"; 
  const whatsappMessage = "Hi Sir/Ma'am, I am sharing my CV and want to join you";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      
    <section id="contact" className="min-h-screen p-8 bg-gray-950">
      <div className="container flex flex-col mx-auto text-white md:flex-row">
        <div className="p-4 md:w-1/2">
            <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
            <p className="mt-10 mb-4">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${mailId}`} className="underline">{mailId}</a>
            </p>
            <p className="mb-8"><strong>Contact Number:</strong> {phoneNumber}{' '}
            </p>
            <a href={whatsappLink} className="px-4 py-2 font-bold text-white bg-blue-500 rounded">Message Us</a>
        </div>
        <div className="p-4 md:w-1/2">
          {/* Keep the Map iframe */}
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
      </section>
    </>
  );
};

export default Contact;
