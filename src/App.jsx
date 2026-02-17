import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import Form from './components/Form/Form';
import Feed from './components/Feed/Feed';
import AdCard from './components/AdCard/AdCard';
// Import Images
import avatarImg from './assets/images/avatar.jpg';
import khattImg from './assets/images/Khatt.jpg';
import catImg from './assets/images/cat.jpg';
import scenicImg from './assets/images/scenic.jpg';
import updateImg from './assets/images/update.jpg';
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* Space for fixed header */
`;
const MainContent = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 200px 1fr;
    .ads-column {
      display: none;
    }
  }
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
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
          image: null
        },
        {
          id: 3,
          avatar: khattImg,
          username: "Tech Enthusiast",
          title: "New Update Available",
          description: "The latest system update is finally here. It brings so many cool features and performance improvements. Highly recommend installing it.",
          image: updateImg
        }
      ],
      themeColor: "#FFFFFF",
      editingId: null,
      postToEdit: null,
      logoColor: "#DA291C"
    };
  }
  componentDidMount() {
    // Lifecycle method: Change logo color after 5 seconds
    setTimeout(() => {
      this.setState({ logoColor: "#FFD700" });
    }, 5000);
  }
  // Create: Add a new post
  addPost = (newPost) => {
    // Generate a unique ID
    const postWithId = { ...newPost, id: Date.now() };
    // Spread operator to create new array state
    this.setState({
      posts: [postWithId, ...this.state.posts]
    });
  }
  // Delete: Remove a post
  deletePost = (id) => {
    // Filter out the post with the matching ID
    const updatedPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts: updatedPosts });
    // If we're editing the post we just deleted, cancel edit mode
    if (this.state.editingId === id) {
      this.cancelEdit();
    }
  }
  // Update: Modify an existing post
  editPost = (updatedData) => {
    // Map through posts to find and replace the updated one
    const updatedPosts = this.state.posts.map(post => 
      post.id === this.state.editingId ? { ...post, ...updatedData } : post
    );
    this.setState({ 
      posts: updatedPosts,
      editingId: null,
      postToEdit: null
    });
  }
  // Handle Form Submit (Decides whether to Add or Edit)
  handleFormSubmit = (formData) => {
    if (this.state.editingId) {
      this.editPost(formData);
    } else {
      this.addPost(formData);
    }
  }
  // Prepare to edit a post
  startEditing = (post) => {
    this.setState({
      editingId: post.id,
      postToEdit: post
    });
    // Optional: Scroll to top to see form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Cancel Edit Mode
  cancelEdit = () => {
    this.setState({
      editingId: null,
      postToEdit: null
    });
  }
  render() {
    const navLinks = ["Newsfeed", "Messages", "Watch"];
    return (
      <>
        <GlobalStyles />
        <AppContainer style={{ backgroundColor: this.state.themeColor }}>
          <Header 
            appName="Post" 
            appNameSecondary="Live" 
            userAvatar={avatarImg} 
            searchPlaceholder="Search..." 
            logoColor={this.state.logoColor} // Pass dynamic color to Header
          />
          <MainContent>
            <Column className="nav-column">
              <LeftNavigation links={navLinks} />
            </Column>
            <Column>
              <Form 
                formTitle={this.state.editingId ? "Edit Post" : "Create Post"}
                titlePlaceholder="Post Title"
                descPlaceholder="What's on your mind?"
                btnLabel={this.state.editingId ? "Update Post" : "Post"}
                onSubmit={this.handleFormSubmit}
                onCancel={this.cancelEdit}
                avatar={avatarImg} 
                postToEdit={this.state.postToEdit} // Pass the post data to the form
              />
              <Feed 
                posts={this.state.posts}
                onDelete={this.deletePost}
                onEdit={this.startEditing}
              />
            </Column>
            <Column className="ads-column">
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
            </Column>
          </MainContent>
        </AppContainer>
      </>
    );
  }
}
export default App;
