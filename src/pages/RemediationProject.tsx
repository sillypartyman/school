import React from 'react';

const RemediationProject = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Remediation Project</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <div className="w-full h-[400px] bg-black/50 rounded-lg flex items-center justify-center">
            {/* Video embed will go here */}
            <p className="text-gray-400">Video Content</p>
          </div>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Review</h2>
            <div className="w-full aspect-[8.5/11] bg-white rounded-lg overflow-hidden">
              <iframe
                src="/pdfs/Multimodality.pdf#toolbar=0"
                className="w-full h-full"
                title="Project Overview"
              />
            </div>
          </section>
          
         
        </div>
      </div>
    </div>
  );
};

export default RemediationProject;