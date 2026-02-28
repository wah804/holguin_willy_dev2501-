import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---
// Using strictly CSS-in-JS
const ProfileContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #004E98;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Username = styled.h2`
  color: #004E98;
  margin: 0 0 20px 0;
  font-weight: normal;
`;

const SaveButton = styled.button`
  background-color: #004E98;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 10px 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003366;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #004E98;
  border-radius: 4px;
  font-size: 1rem;
  color: #004E98;
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: #DA291C;
    box-shadow: 0 0 0 2px rgba(218, 41, 28, 0.2);
  }
`;

const LoadingText = styled.div`
  font-size: 1.2rem;
  color: #004E98;
  text-align: center;
  margin-top: 50px;
`;



const UserProfile = () => {
  // UseState Hook to store the user data returned from the API
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // UseEffect Hook to run the fetch operation when the component first mounts
  useEffect(() => {
    // Async function to handle the fetch request
    const fetchUserData = async () => {
      // Array of fallback users to dynamically choose from if the API is broken
      const fallbackUsers = [
        {
          name: { first: "Jane", last: "Doe" },
          location: { street: { number: 123, name: "API Error St" }, city: "Techville", state: "CA", postcode: "90210" },
          email: "jane.doe@example.com",
          phone: "(555) 123-4567",
          login: { username: "janedoe99", password: "fallback_password!" },
          picture: { large: "https://randomuser.me/api/portraits/women/44.jpg" }
        },
        {
          name: { first: "John", last: "Smith" },
          location: { street: { number: 456, name: "Backup Ave" }, city: "Datatown", state: "NY", postcode: "10001" },
          email: "john.smith@example.com",
          phone: "(555) 987-6543",
          login: { username: "jsmith2024", password: "secure_backup!" },
          picture: { large: "https://randomuser.me/api/portraits/men/32.jpg" }
        },
        {
          name: { first: "Alice", last: "Johnson" },
          location: { street: { number: 789, name: "Server Down Blvd" }, city: "Code City", state: "TX", postcode: "73301" },
          email: "alice.j@example.com",
          phone: "(555) 555-0000",
          login: { username: "alice_j", password: "try_again_later" },
          picture: { large: "https://randomuser.me/api/portraits/women/68.jpg" }
        }
      ];

      // Select a random fallback user to simulate an API update
      const randomFallbackUser = fallbackUsers[Math.floor(Math.random() * fallbackUsers.length)];

      try {
        // Appending a random timestamp and forcing cache: 'no-store' ensures the browser actually
        // goes to the network every single time instead of aggressively serving stale cached data.
        const cacheBuster = new Date().getTime();
        const response = await fetch(`/api/randomuser/?results=1&noinfo&t=${cacheBuster}`, {
          cache: 'no-store'
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // RandomUser.me sometimes returns empty results [] when their servers are overloaded.
        // We handle that gracefully by checking if the user exists.
        if (data.results && data.results.length > 0) {
          const user = data.results[0]; // The API returns an array called results
          console.log("RandomUser API fetched successfully:", user);
          setUserData(user);
        } else {
          console.warn("RandomUser API returned empty data. Using fallback data.");
          setUserData(randomFallbackUser);
        }
        
      } catch (err) {
        console.error("Fetch error or CORS block from RandomUser API:", err.message);
        console.warn("Using fallback profile data so the UI continues to function.");
        // We set the fallback user instead of blocking the whole UI with an error message
        setUserData(randomFallbackUser);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) return <LoadingText>Loading user profile...</LoadingText>;
  if (!userData) return null;

  return (
    <div>
      <h1 style={{ color: '#004E98', marginBottom: '20px' }}>Settings</h1>
      <ProfileContainer>
        <LeftColumn>
          <Avatar src={userData.picture.large} alt="User Avatar" />
          <Username>@{userData.login.username}</Username>
          <SaveButton onClick={() => alert('Profile Saved!')}>SAVE</SaveButton>
        </LeftColumn>

        <RightColumn>
          <InputField type="text" readOnly value={userData.name.first} />
          <InputField type="text" readOnly value={userData.name.last} />
          
          <InputField type="text" readOnly value={`${userData.location.street.number} ${userData.location.street.name}`} />
          <InputField type="text" readOnly value={userData.location.city} />
          
          <InputField type="text" readOnly value={userData.location.state} />
          <InputField type="text" readOnly value={userData.location.postcode} />
          
          <InputField type="text" readOnly value={userData.email} />
          <InputField type="text" readOnly value={userData.phone} />

          <InputField type="text" readOnly value={userData.login.password} />
        </RightColumn>
      </ProfileContainer>
    </div>
  );
};

export default UserProfile;
