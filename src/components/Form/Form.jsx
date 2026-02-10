import styled from 'styled-components';
import Button from '../Button/Button';

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;
const FormTitle = styled.h3`
  margin-bottom: 15px;
  color: #2B2D42;
`;
const InputGroup = styled.div`
  margin-bottom: 15px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #EF233C;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #EF233C;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = ({ formTitle, titlePlaceholder, descPlaceholder, btnLabel }) => {
  return (
    <FormContainer>
      <FormTitle>{formTitle}</FormTitle>
      <InputGroup>
        <StyledInput type="text" placeholder={titlePlaceholder} />
      </InputGroup>
      <InputGroup>
        <StyledTextArea placeholder={descPlaceholder} />
      </InputGroup>
      <ButtonGroup>
        <Button label={btnLabel} onClick={() => console.log('Post created')} />
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;
