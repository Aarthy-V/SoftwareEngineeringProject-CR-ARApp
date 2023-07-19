import "../Styles/NavBarStyles.css";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavbarItems">
      <Link to="/" className="logo">
        CR AR App
      </Link>
      <ul className="nav-menu">
        <CustomLink to="/students">Student</CustomLink>
        <CustomLink to="/courses">Course</CustomLink>
        <CustomLink to="/advisors">Advisor</CustomLink>
        <CustomLink to="/newsemester">New Semester</CustomLink>
      </ul>
      <h4>Gowsi Kan</h4>
    </nav>
  );
}

export default NavBar;

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <>
      <li>
        <Link to={to} className={isActive ? "active" : "nav-links"}>
          {children}
        </Link>
      </li>
    </>
  );
}
