import React from 'react';

const Home = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Digital Portfolio</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <p className="text-lg mb-4">
          This portfolio showcases my academic journey and professional development through various projects and assignments.
        </p>
        <p className="text-lg">
          Navigate through the different sections to explore my work, including my literacy narrative, rhetorical analysis,
          and other academic achievements.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <p className="mb-4">Discover my latest academic work and creative projects.</p>
        </div>
        <div className="bg-blue-900/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Academic Journey</h2>
          <p className="mb-4">Learn about my educational background and academic achievements.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;