import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: fit-content;
  border-left: 5px solid #004E98; /* Blue accent */
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NavItem = styled.li`
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  transition: all 0.2s;
  &:hover {
    background-color: #DA291C; /* Red */
    color: #FFD700; /* Yellow */
    transform: translateX(5px);
  }
`;
const LeftNavigation = ({ links }) => {
  return (
    <NavContainer>
      <NavList>
        {links.map((link, index) => (
          <NavItem key={index}>{link}</NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default LeftNavigation;
