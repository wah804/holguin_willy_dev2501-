import React, { Component } from 'react';
import styled from 'styled-components';
import { FaSearch, FaCog } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: #004E98; /* Superman Blue */
  color: #FFD700; /* Superman Yellow */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-bottom: 4px solid #DA291C; /* Superman Red Border */
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 2px 2px #DA291C; /* Red shadow */

  span {
    color: #FFD700; /* Yellow */
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
const IconWrapper = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  color: #FFFFFF;
  &:hover {
    color: #FFD700;
  }
`;
class Header extends Component {
  render() {
    const { appName, appNameSecondary, userAvatar, searchPlaceholder } = this.props;
    return (
      <HeaderContainer>
        <Logo>{appName}<span>{appNameSecondary}</span></Logo> 
        <SearchBar>
          <FaSearch color="#DA291C" />
          <input type="text" placeholder={searchPlaceholder} />
        </SearchBar>
        <IconsContainer>
          <Avatar src={userAvatar} alt="User Avatar" />
          <IconWrapper>
            <FaCog />
          </IconWrapper>
        </IconsContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
