//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Lee Wang';
  const age = '46';
  const hobbies = ['baking', 'video games', 'reading', 'Star Trek'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello, I'm {name}! I'm {age} years old, and I'm currently enrolled in
        CTD's React course.
      </p>
      <p>Here are some of the hobbies I like to do in my free time:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
