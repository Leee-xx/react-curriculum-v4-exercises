//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here

import BugEffectLoop from './BugEffectLoop.jsx';
import BugMutatedState from './BugMutatedState.jsx';
import BugProps from './BugProps.jsx';

export default function StudentWork() {
  return (
    <div>
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}
