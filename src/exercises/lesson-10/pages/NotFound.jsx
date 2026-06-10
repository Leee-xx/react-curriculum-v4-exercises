import { NavLink, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: {pathname} Not Found</h2>
      <NavLink to="/lessons/lesson-10">Go Home</NavLink>
    </section>
  );
}
