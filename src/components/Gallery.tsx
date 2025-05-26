import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/8566534/pexels-photo-8566534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Student working on robot arm"
    },
    {
      src: "https://images.pexels.com/photos/8566397/pexels-photo-8566397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Group of students programming a robot"
    },
    {
      src: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Student testing autonomous vehicle"
    },
    {
      src: "https://images.pexels.com/photos/8566350/pexels-photo-8566350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Close-up of circuit board assembly"
    },
    {
      src: "https://images.pexels.com/photos/8566359/pexels-photo-8566359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Robotics competition"
    },
    {
      src: "https://images.pexels.com/photos/8566426/pexels-photo-8566426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Lab workspace with tools and components"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block">
            Lab Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Take a peek inside our lab and see our students in action as they design, build, and test their robotic creations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;