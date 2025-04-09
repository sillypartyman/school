import React from 'react';

const Home = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Digital Portfolio</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <video 
            className="w-full h-[400px] rounded-lg"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/Timeline2.mp4" type="video/mp4" />
            <p className="text-white text-center p-4">
             
              <a href="/videos/Timeline2.mp4" className="text-blue-300 hover:text-blue-400 underline"> </a> .
            </p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
