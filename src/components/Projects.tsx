import React from 'react';
import { Bot, Cpu, Cog, Cloud, Rocket, Zap, Ship as Chip, Settings } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, accentColor }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full ${accentColor} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      <div className={`inline-flex items-center justify-center p-3 rounded-lg ${accentColor} bg-opacity-20 mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Autonomous Rovers",
      description: "Building small-scale Mars rover prototypes with autonomous navigation capabilities.",
      icon: <Rocket className="h-6 w-6 text-blue-400" />,
      accentColor: "bg-blue-500"
    },
    {
      title: "Smart Robotic Arms",
      description: "Programming robotic arms to perform precise movements for various tasks.",
      icon: <Cog className="h-6 w-6 text-purple-400" />,
      accentColor: "bg-purple-500"
    },
    {
      title: "AI Vision Systems",
      description: "Developing computer vision algorithms for robots to recognize and interact with objects.",
      icon: <Bot className="h-6 w-6 text-cyan-400" />,
      accentColor: "bg-cyan-500"
    },
    {
      title: "IoT Environment Monitors",
      description: "Creating connected sensor networks to monitor and respond to environmental conditions.",
      icon: <Cloud className="h-6 w-6 text-green-400" />,
      accentColor: "bg-green-500"
    },
    {
      title: "Neural Networks",
      description: "Implementing machine learning models to help robots make intelligent decisions.",
      icon: <Cpu className="h-6 w-6 text-red-400" />,
      accentColor: "bg-red-500"
    },
    {
      title: "Energy Systems",
      description: "Exploring renewable energy sources and efficient power systems for robotics applications.",
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      accentColor: "bg-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block">
            Student Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our innovative student-led projects that combine robotics, programming, and creative problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              accentColor={project.accentColor}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium transition-all transform hover:-translate-y-1"
          >
            Join a Project Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;