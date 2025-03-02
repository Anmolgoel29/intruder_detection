import React, { useState } from 'react';

// filepath: /c:/Users/nisha/Desktop/project_new1/intruder_detection/src/frontend/src/components/Freq/Freq.jsx
function Freq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-center mb-8 hover:underline">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleAnswer(1)}
            className="w-full text-left flex justify-between items-center p-4 bg-white rounded-lg"
          >
            <span>What is Detectify?</span>
            <span id="icon-1">{openQuestion === 1 ? '▼' : '▶'}</span>
          </button>
          <div
            id="answer-1"
            className={`mt-2 p-4 bg-gray-100 rounded-lg transition-all duration-300 ease-in-out ${
              openQuestion === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            Detectify is a comprehensive solution for intruder detection.
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleAnswer(2)}
            className="w-full text-left flex justify-between items-center p-4 bg-white rounded-lg"
          >
            <span>How does it work?</span>
            <span id="icon-2">{openQuestion === 2 ? '▼' : '▶'}</span>
          </button>
          <div
            id="answer-2"
            className={`mt-2 p-4 bg-gray-100 rounded-lg transition-all duration-300 ease-in-out ${
              openQuestion === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            Detectify uses advanced algorithms to detect intruders in real-time.
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleAnswer(3)}
            className="w-full text-left flex justify-between items-center p-4 bg-white rounded-lg"
          >
            <span>Is it easy to set up?</span>
            <span id="icon-3">{openQuestion === 3 ? '▼' : '▶'}</span>
          </button>
          <div
            id="answer-3"
            className={`mt-2 p-4 bg-gray-100 rounded-lg transition-all duration-300 ease-in-out ${
              openQuestion === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            Yes, Detectify is designed to be user-friendly and easy to set up.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freq;