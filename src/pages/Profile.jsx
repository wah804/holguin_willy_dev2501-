import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form/Form';
import Feed from '../components/Feed/Feed';
import avatarImg from '../assets/images/avatar.jpg';
import scenicImg from '../assets/images/scenic.jpg';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const CoverPhoto = styled.div`
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
  position: relative;
`;

const ProfileInfo = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -80px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const Name = styled.h1`
  margin: 15px 0 5px 0;
  color: #2B2D42;
`;

const Title = styled.h3`
  color: #8D99AE;
  margin: 0 0 20px 0;
  font-weight: normal;
`;

const BioSection = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 20px;
  border-top: 1px solid #EDF2F4;
`;

const BioText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Profile = () => {
  // UseState hook managing the personal posts data structure
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: avatarImg,
      username: "Willy Holguin",
      title: "My First Profile Post",
      description: "Welcome to my personal profile page! Here are my personal posts.",
      image: null
    }
  ]);

  // Hook states to manage which post is actively being edited by the Form
  const [editingId, setEditingId] = useState(null);
  const [postToEdit, setPostToEdit] = useState(null);

  // CRUD Create: Generates a new post item mapping the form fields
  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now() };
    setPosts([postWithId, ...posts]);
  };

  // CRUD Delete: Filters out the unwanted post via ID matching
  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    if (editingId === id) {
      cancelEdit();
    }
  };

  // CRUD Update: Modifies a previously established post using the Form modal
  const editPost = (updatedData) => {
    const updatedPosts = posts.map(post => 
      post.id === editingId ? { ...post, ...updatedData } : post
    );
    setPosts(updatedPosts);
    setEditingId(null);
    setPostToEdit(null);
  };

  // Helper toggle to transition Form state into Edit Mode
  const startEditing = (post) => {
    setEditingId(post.id);
    setPostToEdit(post);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setPostToEdit(null);
  };

  return (
    <ProfileContainer>
      <CoverPhoto src={scenicImg} />
      <ProfileInfo>
        <Avatar src={avatarImg} alt="Willy Holguin" />
        <Name>Willy Holguin</Name>
        <Title>Developer</Title>
        <BioSection>
          <h3>About Me</h3>
          <BioText>
            Hi! I'm a passionate developer focusing on building engaging, modern web interfaces and applications.
            I love to design, code, and explore new technologies. When I am not coding,
            I enjoy going out, exploring new places, and taking sweet naps on my downtime!
          </BioText>
        </BioSection>
      </ProfileInfo>
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
    </ProfileContainer>
  );
};

export default Profile;
