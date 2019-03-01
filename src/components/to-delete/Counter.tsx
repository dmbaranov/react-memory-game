import React, { useState, useEffect, useRef } from 'react';

type counterHook = [number, () => void, () => void, () => void];

function useCounter(value: number): counterHook {
  const initialValue = () => {
    console.log('This function called only once, at a first render...');
    return value;
  };

  const [counter, setCounter] = useState(initialValue);
  useEffect(
    () => {
      console.log('Updating a counter...');
      localStorage.setItem('counter', String(counter));
    },
    [counter]
  );

  function increase() {
    setCounter((counter: number) => (counter += 1));
  }

  function decrease() {
    setCounter((counter: number) => (counter -= 1));
  }

  function preserveValue() {
    setCounter((counter: number) => (counter = counter));
  }

  return [counter, increase, decrease, preserveValue];
}

export default function Counter({ initialValue = 0 }) {
  const counterRef = useRef(null);
  const [counter, increase, decrease, preserveValue] = useCounter(initialValue);

  return (
    <>
      <div data-testid="counterText" ref={counterRef}>
        Counter: {counter}
      </div>
      <button data-testid="decreaseBtn" onClick={decrease}>
        -
      </button>
      <button data-testid="increaseBtn" onClick={increase}>
        +
      </button>
      <button onClick={preserveValue}>Just a random button...</button>
    </>
  );
}
