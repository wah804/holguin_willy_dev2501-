import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: #004E98; 
  color: #FFD700;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-bottom: 4px solid #DA291C;
`;
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  text-shadow: 2px 2px #DA291C;
  span {
    color: ${props => props.color || '#FFD700'};
    transition: color 0.5s ease;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding: 5px 15px;
  border-radius: 20px;
  width: 40%;
  border: 2px solid #DA291C;
  input {
    border: none;
    background: transparent;
    margin-left: 10px;
    outline: none;
    width: 100%;
    color: #004E98;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #FFD700;
  cursor: pointer;
`;
const IconWrapper = styled(Link)`
  font-size: 1.2rem;
  cursor: pointer;
  color: #FFFFFF;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #FFD700;
  }
`;

const Header = ({ appName, appNameSecondary, userAvatar, searchPlaceholder, logoColor }) => {
  return (
    <HeaderContainer>
      <Logo color={logoColor} to="/Newsfeed">{appName}<span>{appNameSecondary}</span></Logo> 
      <SearchBar>
        <FaSearch color="#DA291C" />
        <input type="text" placeholder={searchPlaceholder} />
      </SearchBar>
      <IconsContainer>
        <Link to="/Profile">
          <Avatar src={userAvatar} alt="User Avatar" />
        </Link>
        <IconWrapper to="/Settings">
          <FaCog />
        </IconWrapper>
      </IconsContainer>
    </HeaderContainer>
  );
};
export default Header;
