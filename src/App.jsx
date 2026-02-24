import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';

// Lazy-loaded Pages (code-splitting)
const Newsfeed = lazy(() => import('./pages/Newsfeed'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Messages = lazy(() => import('./pages/Messages'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));

// Import Images
import avatarImg from './assets/images/avatar.jpg';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* Space for fixed header */
`;

const MainContent = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .nav-column {
      display: none;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [themeColor] = useState("#F0F4F8");
  const [logoColor, setLogoColor] = useState("#DA291C");

  useEffect(() => {
    // Lifecycle method: Change logo color after 5 seconds
    const timer = setTimeout(() => {
      setLogoColor("#FFD700");
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer style={{ backgroundColor: themeColor }}>
        <Header 
          appName="Post" 
          appNameSecondary="Live" 
          userAvatar={avatarImg} 
          searchPlaceholder="Search..." 
          logoColor={logoColor}
        />
        <MainContent>
          <Column className="nav-column">
            <LeftNavigation />
          </Column>
          <Column>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/Newsfeed" replace />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Newsfeed" element={<Newsfeed />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/Profile" element={<Profile />} />
              </Routes>
            </Suspense>
          </Column>
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
