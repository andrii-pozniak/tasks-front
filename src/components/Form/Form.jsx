import { useState } from 'react';
import styled from 'styled-components';
import { 
    StyleButton,
    StyleInput 
} from 'components/Form/Form.Style';

export const StyleForm = styled.form`
  display: flex;
  align-items: baseline;
  padding: ${p => p.theme.space[3]}px;
  gap: 30px;
  margin-bottom: 5px;
`;

export const Form = ({ onSubmit }) => {
  const [moviesName, setMoviesName] = useState('');

  const handleMoviesNameChange = evt => {
    setMoviesName(evt.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (moviesName.trim() === '') {
      alert('do not name image');
      return;
    }
    console.log(moviesName);
    setMoviesName('');
    onSubmit(moviesName);
  };
  return (
    <StyleForm onSubmit={handleSubmit}>
      <StyleInput
        type="text"
        placeholder="Search movies"
        value={moviesName}
        onChange={handleMoviesNameChange}
      />
      <StyleButton type="submit">Search</StyleButton>
    </StyleForm>
  );
};