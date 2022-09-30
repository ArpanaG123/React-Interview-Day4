import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
        <h3>Question1:What is useRef hook(Implementation)?</h3>
        <p>The useRef hooks allow you to persists values between renders.It can be used to store a mutable value that does not cause a re-render when updated it.</p>
        <p>It can be used to access a DOM elements directly.</p>
        <h5>Implementation</h5>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default UseRef;