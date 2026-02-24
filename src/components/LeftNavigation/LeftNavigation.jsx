import styled from 'styled-components';
const NavContainer = styled.nav`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: fit-content;
  border-left: 5px solid #004E98;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  transition: all 0.2s;
  text-decoration: none;
  display: block;
  
  &.active {
    background-color: #DA291C;
    color: #FFD700;
    transform: translateX(5px);
  }

  &:hover {
    background-color: #DA291C;
    color: #FFD700;
    transform: translateX(5px);
  }
`;

const LeftNavigation = () => {
  const links = [
    { label: "Dashboard", path: "/Dashboard" },
    { label: "Newsfeed", path: "/Newsfeed" },
    { label: "Messages", path: "/Messages" }
  ];

  return (
    <NavContainer>
      <NavList>
        {links.map((link, index) => (
          <NavItem key={index} to={link.path}>
            {link.label}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};
export default LeftNavigation;
