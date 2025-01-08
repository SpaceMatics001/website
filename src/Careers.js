import React from 'react';

const careerData = [
  {
    id: 1,
    title: 'Software Engineer',
    description: `We are looking for a Software Engineer with 3+ years of experience in JavaScript, React, and Node.js. 
                  The candidate will be responsible for developing scalable web applications and working with cross-functional teams.`,
    mailto: 'Application for Software Engineer',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    description: `Join our team as a UI/UX Designer. We are seeking a creative individual who can design user-friendly interfaces 
                  and improve the overall user experience across our web applications. Prior experience with Figma or Sketch is required.`,
    mailto: 'Application for UI/UX Designer',
  },
  {
    id: 3,
    title: 'Project Manager',
    description: `We are in need of an experienced Project Manager to lead teams and manage software development projects. 
                  You should have strong communication and organizational skills and experience working in an Agile environment.`,
    mailto: 'Application for Project Manager',
  },
];

const CareerOpportunity = ({ opportunity }) => {
  return (
    <section className="p-4 mb-8 bg-gray-800 rounded-lg shadow-lg min-h-screen">
      <h2 className="text-2xl font-bold text-white">{opportunity.title}</h2>
      <p className="text-white">{opportunity.description}</p>
      <button
        onClick={() => window.open(`mailto:careers@example.com?subject=${opportunity.mailto}`)}
        className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-500"
      >
        Send CV
      </button>
    </section>
  );
};

function Careers() {
  return (
    <div className="p-8 bg-gray-950">
      <h1 className="mb-8 text-4xl font-bold text-center text-white">Careers</h1>
      {careerData.map(opportunity => (
        <CareerOpportunity key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}

export default Careers;
