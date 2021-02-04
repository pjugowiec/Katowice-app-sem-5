import { Nav, NavItem, NavLink as BSNavLink, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

import { MdDashboard, MdDescription } from "react-icons/md";
const navItems = [
  { to: "/", name: "Strona Główna", exact: true, Icon: MdDashboard },
  {
    to: "/project/",
    name: "Projekty",
    exact: false,
    Icon: MdDescription,
  },
];

const Navigation = () => {
  return (
    <Container style={{ backgroundColor: "#0ec7c7" }}>
      <Nav
        horizontal
        className="d-flex justify-content-between align-items-center"
      >
        {navItems.map(({ to, name, exact, Icon }, index) => {
          return (
            <NavItem
              key={index}
              className="d-flex align-items-center"
              style={{ height: 100 }}
            >
              <BSNavLink
                id={`navItem-${name}-${index}`}
                className="text-uppercase d-flex align-items-center"
                tag={NavLink}
                to={to}
                activeClassName="active"
                exact={exact}
              >
                <Icon color="#fff" size="30" />
                <span style={{ color: "#fff", fontSize: 25 }}>{name}</span>
              </BSNavLink>
            </NavItem>
          );
        })}
      </Nav>
    </Container>
  );
};

export default Navigation;
