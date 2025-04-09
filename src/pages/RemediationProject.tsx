import React from 'react';

const RemediationProject = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Remediation Project</h1>
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