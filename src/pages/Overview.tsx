import React from 'react';

const Overview = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Portfolio Overview</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">
              Welcome to my digital portfolio! My name is Shawn Smith and this website is made to show
          off the work I did in class.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Overview;
