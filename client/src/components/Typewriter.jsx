import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases = [], typingSpeed = 90, deletingSpeed = 45, delayBetween = 1800 }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const fullText = phrases[currentPhraseIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          if (currentText.length + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="hero-typewriter-container">
      <span className="hero-typewriter-text">{currentText}</span>
      <span className="hero-cursor" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
