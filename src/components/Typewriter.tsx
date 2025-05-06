import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  startDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 40, 
  className = "", 
  startDelay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting the animation
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, started]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="inline-block w-1 h-4 bg-[#3A0C3A] ml-1 animate-pulse"></span>}
    </span>
  );
};

export default Typewriter;
