import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaCog, FaBell } from 'react-icons/fa';
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

const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  &:hover {
    color: #FFD700;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #DA291C;
  color: white;
  border-radius: 50%;
  font-size: 0.7rem;
  padding: 2px 6px;
  font-weight: bold;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: -10px;
  background-color: white;
  min-width: 250px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #EDF2F4;
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  z-index: 1001;
  overflow: hidden;
`;

const DropdownHeader = styled.div`
  padding: 12px 15px;
  background-color: #F8F9FA;
  border-bottom: 1px solid #EDF2F4;
  color: #2B2D42;
  font-weight: bold;
  font-size: 0.9rem;
`;

const NotificationItem = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid #EDF2F4;
  color: #2B2D42;
  font-size: 0.85rem;
  cursor: pointer;
  
  &:hover {
    background-color: #F0F4F8;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Header = ({ appName, appNameSecondary, userAvatar, searchPlaceholder, logoColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Dummy notifications array
  const notifications = [
    "New post from Jane Doe in Newsfeed",
    "Your profile was updated successfully",
    "You have a new friend request"
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Logo color={logoColor} to="/Newsfeed">{appName}<span>{appNameSecondary}</span></Logo> 
      <SearchBar>
        <FaSearch color="#DA291C" />
        <input type="text" placeholder={searchPlaceholder} />
      </SearchBar>
      <IconsContainer>
        <NotificationWrapper>
          <NotificationIcon onClick={toggleDropdown}>
            <FaBell />
            <Badge>{notifications.length}</Badge>
          </NotificationIcon>
          <DropdownMenu $isOpen={isDropdownOpen}>
            <DropdownHeader>Notifications</DropdownHeader>
            {notifications.map((note, index) => (
              <NotificationItem key={index}>{note}</NotificationItem>
            ))}
          </DropdownMenu>
        </NotificationWrapper>

        <Link to="/UserProfile">
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
