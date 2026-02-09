import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import LeftNavigation from './components/LeftNavigation/LeftNavigation';
import Form from './components/Form/Form';
import PostCard from './components/PostCard/PostCard';
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
  grid-template-columns: 250px 1fr 300px; /* Nav | Feed | Ads */
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
function App() {
  const navLinks = ["Newsfeed", "Messages", "Watch"];
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header 
          appName="Post" 
          appNameSecondary="Live" 
          userAvatar={avatarImg} 
          searchPlaceholder="Search..." 
        />
        <MainContent>
          <Column className="nav-column">
            <LeftNavigation links={navLinks} />
          </Column>
          
          <Column>
            <Form 
              formTitle="Create Post"
              titlePlaceholder="Post Title"
              descPlaceholder="What's on your mind?"
              btnLabel="Post"
            />
            <PostCard 
              avatar={avatarImg}
              username="Willy Holguin"
              title="Exploring the Wilderness"
              description="Just got back from an amazing trip to the mountains. The views were breathtaking and the air was so fresh! Check out this photo I took."
              image={scenicImg}
              editLabel="Edit Post"
              deleteLabel="Delete Post"
            />
            <PostCard 
              avatar={catImg}
              username="Cat Lover"
              title="My new kitten!"
              description="Meet Whiskers! She is so playful and cute. I can't believe how small she is."
              editLabel="Edit Post"
              deleteLabel="Delete Post"
            />
             <PostCard 
              avatar={khattImg}
              username="Tech Enthusiast"
              title="New Update Available"
              description="The latest system update is finally here. It brings so many cool features and performance improvements. Highly recommend installing it."
              image={updateImg}
              editLabel="Edit Post"
              deleteLabel="Delete Post"
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

export default App;
