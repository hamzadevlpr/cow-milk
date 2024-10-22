import React, { useEffect, useState } from 'react';

// Define an interface for the component's props
interface CustomTypingEffectProps {
    phrases: string[]; 
    typingSpeed?: number; 
    pauseDuration?: number; 
}

const CustomTypingEffect: React.FC<CustomTypingEffectProps> = ({
    phrases,
    typingSpeed = 1000,
    pauseDuration = 1000,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0); 

    useEffect(() => {
        if (isTyping) {
            const currentPhrase = phrases[currentPhraseIndex];

            const typingInterval = setInterval(() => {
                if (charIndex < currentPhrase.length) {
                    setDisplayedText((prev) => prev + currentPhrase[charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, typingSpeed);

            return () => clearInterval(typingInterval);
        } else {
            const pauseInterval = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0); 
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); 
                setIsTyping(true); 
            }, pauseDuration);

            return () => clearTimeout(pauseInterval);
        }
    }, [isTyping, currentPhraseIndex, phrases, typingSpeed, pauseDuration, charIndex]);

    return (
        <span
            style={{
                fontSize: '1em', 
                color: 'white',
                textDecoration: 'underline',
            }}
        >
            {displayedText}
        </span>
    );
};

export default CustomTypingEffect;
