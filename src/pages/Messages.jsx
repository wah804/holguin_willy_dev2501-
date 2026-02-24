import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  min-height: 400px;
`;

const PageTitle = styled.h2`
  color: #2B2D42;
  margin-bottom: 15px;
`;

const Messages = () => {
  return (
    <PageContainer>
      <PageTitle>Messages</PageTitle>
      <p>Your inbox is currently empty.</p>
    </PageContainer>
  );
};

export default Messages;
