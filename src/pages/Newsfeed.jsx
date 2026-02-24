import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form/Form';
import Feed from '../components/Feed/Feed';
import AdCard from '../components/AdCard/AdCard';

// Import Images
import avatarImg from '../assets/images/avatar.jpg';
import khattImg from '../assets/images/Khatt.jpg';
import catImg from '../assets/images/cat.jpg';
import scenicImg from '../assets/images/scenic.jpg';
import updateImg from '../assets/images/update.jpg';

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  
  @media (max-width: 900px) {
    .ads-column {
      display: none;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AdsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  flex-shrink: 0;
`;

const Newsfeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: avatarImg,
      username: "Willy Holguin",
      title: "Exploring the Wilderness",
      description: "Just got back from an amazing trip to the mountains. The views were breathtaking and the air was so fresh! Check out this photo I took.",
      image: scenicImg
    },
    {
      id: 2,
      avatar: catImg,
      username: "Cat Lover",
      title: "My new kitten!",
      description: "Meet Whiskers! She is so playful and cute. I can't believe how small she is.",
      image: catImg
    },
    {
      id: 3,
      avatar: khattImg,
      username: "Tech Enthusiast",
      title: "New Update Available",
      description: "The latest system update is finally here. It brings so many cool features and performance improvements. Highly recommend installing it.",
      image: updateImg
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [postToEdit, setPostToEdit] = useState(null);

  // Create: Add a new post
  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now() };
    setPosts([postWithId, ...posts]);
  };

  // Delete: Remove a post
  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    if (editingId === id) {
      cancelEdit();
    }
  };

  // Update: Modify an existing post
  const editPost = (updatedData) => {
    const updatedPosts = posts.map(post => 
      post.id === editingId ? { ...post, ...updatedData } : post
    );
    setPosts(updatedPosts);
    setEditingId(null);
    setPostToEdit(null);
  };

  // Prepare to edit a post
  const startEditing = (post) => {
    setEditingId(post.id);
    setPostToEdit(post);
  };

  // Cancel Edit Mode
  const cancelEdit = () => {
    setEditingId(null);
    setPostToEdit(null);
  };

  return (
    <ContentContainer>
      <Column>
        <Form 
          formTitle="Create Post"
          titlePlaceholder="Post Title"
          descPlaceholder="What's on your mind?"
          btnLabel="Post"
          onSubmit={addPost}
          avatar={avatarImg} 
        />
        <Feed 
          posts={posts}
          onDelete={deletePost}
          onEdit={startEditing}
          editingId={editingId}
          postToEdit={postToEdit}
          onEditSubmit={editPost}
          onCancelEdit={cancelEdit}
          avatar={avatarImg}
        />
      </Column>
      <AdsColumn className="ads-column">
        <AdCard 
          image={scenicImg}
          title="Exotic Destinations"
          subtitle="Just kidding, this is my backyard"
        />
        <AdCard 
          image={catImg}
          title="Pet Supplies Sale"
          subtitle="50% off on all items"
        />
      </AdsColumn>
    </ContentContainer>
  );
};

export default Newsfeed;
