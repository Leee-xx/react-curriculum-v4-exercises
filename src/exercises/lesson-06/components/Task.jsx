const Task = ({ title, completed }) => {
  return (
    <li>
      {title} {completed ? '✅' : '⏳'}
    </li>
  );
};

export default Task;
