import React from 'react';

function Reflection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Reflection</h1>
      <div className="bg-gray-900 rounded-lg p-8">
        <div className="w-full aspect-[8.5/11] bg-white rounded-lg overflow-hidden">
          <iframe
            src="/pdfs/Reflection.pdf#toolbar=0"
            className="w-full h-full"
            title="Reflection"
          />
        </div>
      </div>
    </div>
  );
}

export default Reflection;