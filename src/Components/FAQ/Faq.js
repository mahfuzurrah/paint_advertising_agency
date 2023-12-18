import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  // Define your list of questions and answers
  const faqData = [
    {
      question: " Qu'est-ce qui distingue PaintConnect des autres agences de régie publicitaire ?",
      answer: "PaintConnect se distingue par sa spécialisation exclusive dans la publicité artistique, combinant expertise publicitaire et passion pour l'art pour créer des campagnes uniques et percutantes.",
    },
    {
      question: "Quels types d'artistes travaillez-vous et quelle est votre expertise dans le domaine artistique ?",
      answer: "Nous travaillons avec une diversité d'artistes, allant des émergents aux établis. Notre équipe possède une expertise approfondie dans le domaine artistique, ce qui nous permet de comprendre et de promouvoir chaque vision artistique de manière authentique.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Comment fonctionne le processus de collaboration avec PaintConnect ?",
      answer:
        'Notre processus commence par un diagnostic approfondi de vos besoins, suivi par une collaboration étroite dans la construction dune stratégie publicitaire artistique sur mesure. La transparence et la communication ouverte sont au cœur de notre collaboration.',
    },
    {
      question: "Quels sont les avantages de la publicité spécialisée dans l'art pour les artistes et les annonceurs ?",
      answer:
        'La publicité spécialisée dans lart offre une visibilité ciblée, renforce lidentité artistique, et crée des connexions émotionnelles avec le public, contribuant ainsi à la croissance et à la notoriété de l artiste ou de lannonceur.',
    },
    {
      question: "Pouvez-vous donner des exemples de campagnes publicitaires réussies que vous avez réalisées dans le passé ?",
      answer:
        'Nous avons réalisé des campagnes variées mettant en valeur la diversité artistique. Des exemples concrets sont disponibles sur notre site pour illustrer notre succès dans la promotion dartistes et dœuvres.',
    },
    {
      question: "Comment évaluez-vous les besoins spécifiques de chaque artiste ou annonceur avant de créer une campagne publicitaire ?",
      answer:
        'Nous débutons chaque collaboration par un diagnostic approfondi, comprenant les objectifs artistiques et publicitaires, pour élaborer une stratégie sur mesure qui répond à vos besoins spécifiques.',
    },
  ];

  // State to manage the open/closed state of each question
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/closed state of a question
  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2 className="mb-4">Question fréquemment posée</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`question ${index === openIndex ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
            <FaChevronDown />
          </div>
          {index === openIndex && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
