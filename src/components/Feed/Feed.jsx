import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Feed = ({ posts, onDelete, onEdit }) => {
  return (
    <FeedContainer>
      {posts.map(post => (
        <PostCard 
          key={post.id}
          id={post.id}
          avatar={post.avatar}
          username={post.username}
          title={post.title}
          description={post.description}
          image={post.image}
          editLabel="Edit Post"
          deleteLabel="Delete Post"
          onDelete={() => onDelete(post.id)}
          onEdit={() => onEdit(post)}
        />
      ))}
    </FeedContainer>
  );
};
export default Feed;
