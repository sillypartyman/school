import React from 'react';

const LiteracyNarrative = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Literacy Narrative</h1>
      <div className="bg-blue-900 rounded-lg p-8 mb-8">
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Writing My Story</h2>
            <div className="w-full aspect-[8.5/11] bg-white rounded-lg overflow-hidden">
              <iframe
                src="/pdfs/Writing_My_Story.pdf#toolbar=0"
                className="w-full h-full"
                title="Writing My Story"
              />
            </div>
          </section>

          

         
        </div>
      </div>
    </div>
  );
};

export default LiteracyNarrative;