import './About.css';

import Header from '../components/Header';

import React from 'react';

import usPhoto from '../assets/hero-photo.JPG';


const About = () => {
  const questionsAnswers = [
    {
      question: 'Who?',
      answer: 'Molly & Cameron, of course! We are a couple of coffee lovers who have traveled around Raleigh in search of the best brews. We started this site to share our experiences and help others find their perfect cup of coffee.',
      image: '../../public/public-assets/beans2.png',
    },
    {
      question: 'What?',
      answer: 'Bean There is a website dedicated to helping coffee lovers find the best coffee shops in Raleigh. However, it just started as a way for me and my fiance to find our favorite coffee shop after we moved.',
      image: '../../public/public-assets/beans2.png',
    },
    {
      question: 'Why?',
      answer: 'Many reasons! I\'m a budding web designer, and my fiance loves coffee. ',
      image: '../../public/public-assets/beans2.png',
    },
    // Add more as needed
  ];

  return (
    <div className="about-container">
    <Header />
    <div className="about">
      <div className="about-content">
        <img src={usPhoto} alt="Molly and Cameron" className="about-photo" />
        <h1>About Us</h1>
        {questionsAnswers.map((qa, index) => (
          <div
            key={index}
            className={`about-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="about-image">
              <img src={qa.image} alt={`about ${index + 1}`} />
            </div>
            <div className="about-text">
              <h2>{qa.question}</h2>
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;