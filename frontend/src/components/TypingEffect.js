import React, { useEffect, useRef } from 'react';

const TypingEffect = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    let i = 0;

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };

    type();
  }, [text]);

  return <h2 ref={textRef}></h2>;
};

export default TypingEffect;
