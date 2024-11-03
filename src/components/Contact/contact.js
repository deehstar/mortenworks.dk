import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const name = formData.get('from_name')?.trim();
    const email = formData.get('from_email')?.trim();
    const message = formData.get('message')?.trim();
  
    // Custom validation
    if (!name || !email || !message) {
      setPopupMessage('Please fill in all fields.');
      setIsError(true);
      showPopup();
      return;
    }
    
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setPopupMessage('Please enter a valid email address.');
      setIsError(true);
      showPopup();
      return;
    }
  
    emailjs.sendForm('service_2e2zk8v', 'template_29royt6', form.current, 'z-hzMCZFdN_yzwjZs')
      .then(() => {
        setPopupMessage('Message sent successfully!');
        setIsError(false);
        showPopup();
        e.target.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setPopupMessage('Failed to send the message. Please try again later.');
        setIsError(true);
        showPopup();
      });
  };
  

  const showPopup = () => {
    setTimeout(() => {
      setPopupMessage('');
    }, 3000);
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">contact <span className="contactHighlight">me</span></h1>
        <span className="contactDescription">do not hesitate to get in touch, send me a message</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="your name" name="from_name" />
          <input type="email" className="email" placeholder="your email" name="from_email" />
          <textarea className="message" placeholder="your message" rows="5" name="message"></textarea>
          <button type="submit" className="submitBtn">send message</button>
        </form>
        {popupMessage && (
          <div className={`popup-message ${isError ? 'error' : 'success'}`}>
            {popupMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
