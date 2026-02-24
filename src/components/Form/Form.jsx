import React, { Component } from 'react';
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
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const StyledInput = styled.input`
  flex: 1;
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
const AvatarPreview = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.postToEdit ? props.postToEdit.title : '',
      description: props.postToEdit ? props.postToEdit.description : ''
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.postToEdit && this.props.postToEdit !== prevProps.postToEdit) {
      this.setState({
        title: this.props.postToEdit.title,
        description: this.props.postToEdit.description
      });
    }
    if (prevProps.postToEdit && !this.props.postToEdit) {
      this.setState({ title: '', description: '' });
    }
  }
  handleSubmit = () => {
    const { title, description } = this.state;
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both title and description.");
      return;
    }
    if (this.props.onSubmit) {
      this.props.onSubmit({
        title,
        description,
        username: this.props.postToEdit ? this.props.postToEdit.username : "Willy Holguin", 
        avatar: this.props.postToEdit ? this.props.postToEdit.avatar : this.props.avatar, 
        image: this.props.postToEdit ? this.props.postToEdit.image : null
      });
    }
    if (!this.props.postToEdit) {
      this.setState({ title: '', description: '' });
    }
  }
  render() {
    const { formTitle, titlePlaceholder, descPlaceholder, btnLabel, avatar, onCancel, postToEdit } = this.props;
    const { title, description } = this.state;
    return (
      <FormContainer>
        <FormTitle>{formTitle}</FormTitle>
        <InputGroup>
          {avatar && <AvatarPreview src={postToEdit ? postToEdit.avatar : avatar} alt="User" />}
          <StyledInput 
            type="text" 
            name="title"
            placeholder={titlePlaceholder} 
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </InputGroup>
        <InputGroup>
          <StyledTextArea 
            name="description"
            placeholder={descPlaceholder} 
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
        </InputGroup>
        <ButtonGroup>
          {postToEdit && (
             <Button label="Cancel" onClick={onCancel} style={{ marginRight: '10px', backgroundColor: '#8D99AE' }} />
          )}
          <Button label={btnLabel} onClick={this.handleSubmit} />
        </ButtonGroup>
      </FormContainer>
    );
  }
}
export default Form;
