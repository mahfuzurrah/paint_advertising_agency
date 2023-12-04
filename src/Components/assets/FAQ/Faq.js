import React, { useState } from 'react';

const Faq = () => {
  // Define your list of questions and answers
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React by using the "create-react-app" command or by adding React to an existing project.',
    },
    // Add more questions and answers as needed
  ];

  // State to manage the open/closed state of each question
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/closed state of a question
  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`question ${index === openIndex ? 'open' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
          </div>
          {index === openIndex && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
