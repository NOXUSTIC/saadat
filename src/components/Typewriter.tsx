import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  startDelay?: number;
  cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 40, 
  className = "", 
  startDelay = 0,
  cursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [showEllipsis, setShowEllipsis] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowEllipsis(false);
      setStarted(true);
    }, startDelay + 800);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const char = text[currentIndex];
      let charDelay = delay;
      if (char === '.' || char === ',' || char === '!' || char === '?') {
        charDelay = delay * 4;
      } else if (char === ' ') {
        charDelay = delay * 1.5;
      } else {
        charDelay = delay + Math.random() * 20;
      }

      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, charDelay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, started]);

  return (
    <span className={className}>
      {showEllipsis && !started && (
        <span className="inline-block text-muted-foreground animate-pulse">...</span>
      )}
      {displayText}
      {cursor && started && currentIndex < text.length && (
        <span className="inline-block w-1 h-5 bg-[#30A5FF] ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

export default Typewriter;
