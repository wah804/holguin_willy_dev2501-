import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  
  /* Variant styling */
  background-color: ${props => props.$variant === 'secondary' ? '#FFD700' : '#004E98'}; /* Yellow or Blue */
  color: ${props => props.$variant === 'secondary' ? '#004E98' : '#FFFFFF'};
  border-bottom: 3px solid ${props => props.$variant === 'secondary' ? '#DA291C' : '#002855'};
  &:hover {
    background-color: ${props => props.$variant === 'secondary' ? '#F4C430' : '#003366'};
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;
const Button = ({ label, onClick, variant = 'primary' }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
