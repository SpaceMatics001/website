import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Contact from './Contact';

const teamData = [
  {
    id: 1,
    name: 'Raunaq Dey',
    position: 'Founder & CEO',
    description: 'Space Enthusiast by Heart, Forward-Thinking Technologist | Working on to build the Spacepreneur Community | Course Coordinator- AI//ML @ WorkBuds | MCA Background with skills of AI/ML Engineer',
    imageUrl: 'Raunaq.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/raunaq-dey-215a811a5/',
  },
  {
    id: 2,
    name: 'Tathagata Marik',
    position: 'Co-Founder & CTO',
    description: 'Forward-Thinking Technologist | Passionate with Emerging Technologies and Mechanics | Committed to driving technological advancements in the intersection of space and science | 7+ years experience in AI/ML | ME Background',
    imageUrl: 'Tathagat.jpeg',
    //linkedinUrl: 'https://www.linkedin.com/in/raunaq-dey-215a811a5/',
  },
  {
    id: 3,
    name: 'Anirban Paul',
    position: 'Co-Founder & CPO',
    description: 'Forward-Thinking Technologist | Passionate with Emerging Technologies | Committed to driving technological advancements in the intersection of space and science | 7+ years experience in AI/ML | IT Background',
    imageUrl: 'AnirbanPaul.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/paulanirban4/',
  },
  {
    id: 4,
    name: 'Anirban Dutta',
    position: 'Advisory Head',
    description: 'Forward-Thinking Technologist and Innovator by Mind | Amalgamating AI and Space Exploration | Passionate about leveraging cutting-edge technologies | 4+ years Experience in Robotics and AI | EE Background',
    imageUrl: 'AnirbanDutta.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/gh05t/',
  },
  {
    id: 5,
    name: 'Bidesh Roy',
    position: 'HR Executive | Content Builder',
    description: 'Developer by mindset, Space Enthusiast by Heart | Enthusiastic about exploring the intersection of AI and space exploration | 6+ years experience in Software Development | MCA Background',
    imageUrl: 'BideshRoy.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/bidesh-roy/',
  },
  // Add more team members as needed
];

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-4 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105">
      <img 
        src={member.imageUrl} 
        alt={member.name} 
        className="object-cover w-32 h-32 mb-4 rounded-full"
      />
      <h2 className="mb-2 text-xl font-bold text-white">{member.name}</h2>
      <h3 className="mb-2 text-lg font-semibold text-white">{member.position}</h3>
      <p className="mb-4 text-center text-white">{member.description}</p>
      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-100">
        <FaLinkedin size={32} />
      </a>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <section id="team" className="min-h-screen p-8 bg-gray-950">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-white">Our Team</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
      </section>
      <Contact/>
    </>
  );
};

export default Team;
