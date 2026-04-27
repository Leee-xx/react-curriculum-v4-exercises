export default function Child({ handleClick }) {
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      Increment Counter
    </button>
  );
}
