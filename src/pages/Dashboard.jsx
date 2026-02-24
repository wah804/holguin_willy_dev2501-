import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageTitle = styled.h2`
  color: #2B2D42;
  margin-bottom: 10px;
`;

const ChartCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: 400px;
`;

const ChartTitle = styled.h3`
  margin-bottom: 20px;
  color: #555;
`;

const Dashboard = () => {
  // UseState Hook for storing Chart Data
  const [userGrowthData] = useState([
    { name: 'Jan', users: 400, active: 240 },
    { name: 'Feb', users: 600, active: 398 },
    { name: 'Mar', users: 800, active: 580 },
    { name: 'Apr', users: 1100, active: 890 },
    { name: 'May', users: 1500, active: 1100 },
    { name: 'Jun', users: 1900, active: 1400 },
  ]);

  const [engagementData] = useState([
    { name: 'Mon', likes: 120, comments: 45 },
    { name: 'Tue', likes: 240, comments: 80 },
    { name: 'Wed', likes: 180, comments: 60 },
    { name: 'Thu', likes: 300, comments: 120 },
    { name: 'Fri', likes: 450, comments: 180 },
    { name: 'Sat', likes: 600, comments: 250 },
    { name: 'Sun', likes: 550, comments: 200 },
  ]);

  return (
    <DashboardContainer>
      <PageTitle>Dashboard</PageTitle>

      <ChartCard>
        <ChartTitle>User Growth (Overview)</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={userGrowthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#8D99AE" name="Total Users" />
            <Bar dataKey="active" fill="#EF233C" name="Active Users" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard>
        <ChartTitle>Weekly Engagement</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={engagementData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="likes" stroke="#FFD700" activeDot={{ r: 8 }} name="Likes" />
            <Line type="monotone" dataKey="comments" stroke="#2B2D42" name="Comments" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

    </DashboardContainer>
  );
};

export default Dashboard;
