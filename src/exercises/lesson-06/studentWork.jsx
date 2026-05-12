import { useEffect, useState } from 'react';
import FilterButtons from './components/FilterButtons.jsx';
import Task from './components/Task.jsx';
import filterTasks from './utils/filterTasks.js';
import useFetchTasks from './hooks/useFetchTasks.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  //  #1: Data fetching + state + UI logic all mixed together
  const { tasks, loading } = useFetchTasks();

  // #2: Filtering logic inside component
  let visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <FilterButtons setFilter={setFilter} filter={filter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </ul>
    </div>
  );
}
