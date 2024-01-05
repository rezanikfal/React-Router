import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet
        aspernatur perferendis aut eligendi adipisci? Ut facilis iste doloribus
        ipsam voluptate sequi, eaque, dolor tempora tempore nisi accusamus
        impedit odio.
      </p>
      <nav className="main-nav">
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="help">Help</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
