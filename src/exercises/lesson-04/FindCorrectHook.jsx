import { useRef, useEffect } from 'react';

// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const buttonRef = useRef(null);
  let clickCount = 0;

  function handleClick() {
    clickCount++;
    buttonRef.current.innerText = `${clickCount} Clicks`;
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        {clickCount} Clicks
      </button>
    </div>
  );
}
