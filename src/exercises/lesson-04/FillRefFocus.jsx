import { useRef } from 'react';

// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
