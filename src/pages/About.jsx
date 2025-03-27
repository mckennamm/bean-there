import './About.css';

import React from 'react';
import './FAQ.css'; // Import CSS for styling

const About = () => {
  const questionsAnswers = [
    {
      question: 'Who is behind "Bean There"?',
      answer: 'Molly & Cameron, of course! We are a couple of coffee lovers who have traveled around Raleigh in search of the best brews. We started this site to share our experiences and help others find their perfect cup of coffee.',
      image: '../assets/beans.svg' 
    },
    {
      question: 'What are areas of the venue I can explore?',
      answer: 'Great question! As this is a private home that we are so grateful to be able to use for our wedding, we ask that you please respect the privacy of the homeowners and stay within the designated areas for the ceremony and reception. The backyard and tent will be open for exploration, as well as the first floor of the home, where the bathrooms are located. Please do not enter the upstairs, downstairs, or any of the closed doors marked "Private". Thank you!',
      image: '../images/icons/map.webp',
    },
    {
      question: 'Is the venue handicap accessible?',
      answer: 'There are no ramps or elevators on the property, but the ceremony and reception will be held in the yard, which is flat and grassy. The bathrooms are located on the first floor of the home, which is accessible by a few steps. If you have any concerns about accessibility, please reach out to us and we will do our best to help and accommodate you!',
      image: '../images/icons/accessible.webp',
    },
    {
      question: 'When should I arrive?',
      answer: 'The ceremony will begin promptly at 4:00 PM, so we recommend arriving at least 15 minutes early to park and get settled in your seats.',
      image: '../images/icons/clock.webp',
    },
    {
      question: 'What is the RSVP deadline?',
      answer: 'Please fill out your RSVP on our website by March 17th, 2025 so that we may obtain an accurate head count for meal and seating arrangements. If you do not give us a response by this date, we will assume you are unable to attend and mark you as a "no".',
      image: '../images/icons/calendar.webp',
    },
    {
      question: 'Should I bring cash for the bar?',
      answer: 'Bartenders will serve a selection of specialty cocktails (gin, whisky), beer, wine, and alcoholic seltzer free of charge to our guests. So, no cash necessary, unless you want to give the bartenders a little something extra for their awesome service 😜! For those who prefer non-alcoholic beverages, we will have a selection of lemonade, iced tea, and water available, and any of the cocktails can be made without liquor at your request.',
      image: '../images/icons/money.webp',
    },
    {
      question: 'What should I wear?',
      answer: 'The dress code is Semi-formal, springtime attire. While not required, if you don\'t feel like matching the bridesmaids, stay away from muted and pastel greens or pinks! Also, given that the ceremony will not be in a covered area, we recommend wearing a sun covering of some type, as well as shoes that you are comfortable walking in on grass.',
      image: '../images/icons/outfit.webp',
    },
    {
      question: 'Can I bring a guest?',
      answer: 'We are so excited to celebrate this day with our nearest and dearest, and are hoping to keep the guest list limited. Thank you for not bringing a guest unless your invitation indicates otherwise.Please check your invitation or reach out to us if you are unsure about who is invited.',
      image: '../images/icons/envelope.webp',
    },
    {
      question: 'Are children invited?',
      answer: 'We love the little ones, however we have opted for an Adult-Only Ceremony and Reception, with the exception of a few littles who we have special relationships with, and young babies that need to be in their parents\' arms. Please refer to your invitation for details about who is invited, and feel free to contact the Bride or Groom with specific questions.',
      image: '../images/icons/kids.webp',
    },
    {
      question: 'What will the weather be like?',
      answer: 'While we can\'t be certain this far out, the weather in Durham, NC in May is typically warm and sunny. However, we recommend checking the weather forecast closer to the date for the most accurate information.',
      image: '../images/icons/umbrella.webp',
    },

    {
      question: 'May I take photos?',
      answer: 'We are honored to have you all as witnesses to our vows and the beginning of our marriage. With this in mind, we have hired an incredible team of professional photographers to capture the beautiful moments of our wedding. so that you, our guests, can be truly present with us. We respectfully request that all cameras and phones be turned off during the ceremony. After the ceremony? Take as many photos and videos as you would like!',
      image: '../images/icons/camera.webp'
    },
    {
      question: 'What if I have a food allergy or dietary restriction?',
      answer: 'We\'ve hired a wonderful caterer that is happy to accomodate where they can. You can find our tentative menu in the "Event Details" page of the website. Please let us know about any food allergies or dietary restrictions when you RSVP, but if you\'re worried, you can always reach out!.',
      image: '../images/icons/table.webp'
    }
    // Add more questions and answers as needed
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {questionsAnswers.map((qa, index) => (
          <div
            key={index}
            className={`faq-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="faq-image">
              <img src={qa.image} alt={`FAQ ${index + 1}`} />
            </div>
            <div className="faq-text">
              <h2>{qa.question}</h2>
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;