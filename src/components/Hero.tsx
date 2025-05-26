import React from 'react';
import { Notebook as Robot, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8566453/pexels-photo-8566453.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80"></div>
      </div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
            <Robot className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Hands-on Learning for Future Innovators</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Future Tech</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Robotics Lab
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
            Where students design, build, and code the future. Join our community of young innovators exploring robotics, AI, and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Join the Lab
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium transition-all transform hover:-translate-y-1"
            >
              See Projects
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
        
        {/* Tech pattern decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;