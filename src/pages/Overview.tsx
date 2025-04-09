import React from 'react';

const Overview = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Portfolio Overview</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Course Goals and Objectives</h2>
            <p className="text-gray-300">
              Insert your course goals and objectives here...
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
            <p className="text-gray-300">
              Insert your learning outcomes here...
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Portfolio Contents</h2>
            <p className="text-gray-300">
              Insert your portfolio contents overview here...
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Overview;