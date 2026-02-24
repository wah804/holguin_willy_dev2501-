import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
import Form from '../Form/Form';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Feed = ({ posts, onDelete, onEdit, editingId, postToEdit, onEditSubmit, onCancelEdit, avatar }) => {
  return (
    <FeedContainer>
      {posts.map(post => {
        return (
          <React.Fragment key={`fragment-${post.id}`}>
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
            {post.id === editingId && (
              <Form 
                key={`edit-${post.id}`}
                formTitle="Edit Post"
                titlePlaceholder="Post Title"
                descPlaceholder="What's on your mind?"
                btnLabel="Update Post"
                onSubmit={onEditSubmit}
                onCancel={onCancelEdit}
                avatar={avatar} 
                postToEdit={postToEdit}
              />
            )}
          </React.Fragment>
        );
      })}
    </FeedContainer>
  );
};
export default Feed;
