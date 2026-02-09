import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;
const AdImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const AdContent = styled.div`
  padding: 15px;
`;
const AdTitle = styled.h4`
  margin: 0 0 5px 0;
  color: #2B2D42;
  font-size: 1rem;
`;
const AdSubtitle = styled.p`
  margin: 0;
  color: #8D99AE;
  font-size: 0.875rem;
`;
const AdCard = ({ image, title, subtitle }) => {
  return (
    <CardContainer>
      <AdImage src={image} alt={title} />
      <AdContent>
        <AdTitle>{title}</AdTitle>
        <AdSubtitle>{subtitle}</AdSubtitle>
      </AdContent>
    </CardContainer>
  );
};

export default AdCard;
