import React, { Component } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Username = styled.span`
  font-weight: bold;
  color: #2B2D42;
`;
const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #2B2D42;
`;
const Description = styled.p`
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
`;
const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
  max-height: 300px;
  object-fit: cover;
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  border-top: 1px solid #EDF2F4;
  padding-top: 15px;
`;
const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #8D99AE;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: ${props => props.$type === 'delete' ? '#D90429' : '#2B2D42'};
  }
`;
class PostCard extends Component {
  render() {
    const { avatar, username, title, description, image, editLabel, deleteLabel } = this.props;
    return (
      <Card>
        <CardHeader>
          <Avatar src={avatar} alt={username} />
          <UserInfo>
            <Username>{username}</Username>
          </UserInfo>
        </CardHeader>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {image && <PostImage src={image} alt={title} />}
        <Actions>
          <ActionButton onClick={() => console.log('Edit clicked')} aria-label={editLabel}>
            <FaEdit />
          </ActionButton>
          <ActionButton $type="delete" onClick={() => console.log('Delete clicked')} aria-label={deleteLabel}>
            <FaTrash />
          </ActionButton>
        </Actions>
      </Card>
    );
  }
}

export default PostCard;
