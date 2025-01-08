// Clients.js
import React from 'react';

const clients = [
  { id: 1, name: 'Client A', logo: '/images/client-a-logo.png' },
  { id: 2, name: 'Client B', logo: '/images/client-b-logo.png' },
  { id: 3, name: 'Client C', logo: '/images/client-c-logo.png' },
  { id: 4, name: 'Client D', logo: '/images/client-d-logo.png' }
];

const Clients = () => {
  return (
    <section className="min-h-screen py-16 bg-gray-950">
      <h2 className="mb-10 text-3xl font-bold text-center text-white">Our Clients</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {clients.map((client) => (
          <div
            key={client.id}
            className="p-6 text-center transition-transform transform bg-gray-800 rounded-lg client-item hover:scale-105 hover:bg-gray-700 hover:text-white"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="object-contain w-32 h-32 mx-auto mb-4"
            />
            <p className="text-lg font-semibold">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
