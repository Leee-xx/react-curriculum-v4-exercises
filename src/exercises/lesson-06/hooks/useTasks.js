import { useState, useEffect } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('hello');
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return [tasks, setTasks];
}

export default useTasks;
