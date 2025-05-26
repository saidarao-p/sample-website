import React from 'react';
import { Award, BookOpen, Target, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At Future Tech Robotics Lab, we believe that hands-on experience is the key to nurturing the next generation of innovators and problem-solvers.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We provide a collaborative environment where students can explore robotics, artificial intelligence, and engineering principles through project-based learning.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our goal is to inspire curiosity, foster creativity, and build the technical skills needed for students to thrive in an increasingly technological world.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                See Our Lab
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20"></div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8566354/pexels-photo-8566354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students working in robotics lab" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center text-white mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<BookOpen className="h-6 w-6" />}
              title="Hands-on Learning"
              description="We believe in learning by doing, with real-world projects that challenge and inspire."
            />
            <ValueCard 
              icon={<Users className="h-6 w-6" />}
              title="Collaboration"
              description="We foster teamwork and communication skills essential for success in any field."
            />
            <ValueCard 
              icon={<Target className="h-6 w-6" />}
              title="Innovation"
              description="We encourage creative thinking and novel approaches to technical challenges."
            />
            <ValueCard 
              icon={<Award className="h-6 w-6" />}
              title="Excellence"
              description="We strive for quality in our projects, our methods, and our community."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;