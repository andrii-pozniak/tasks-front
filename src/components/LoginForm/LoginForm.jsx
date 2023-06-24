import { useDispatch } from 'react-redux';
import { logIn } from '../Redux/Auth/operations';
import {
  StyleButton,
  StyleLabel,
  StyleForm,
  StyleInput,
  Section,
} from './LoginForm.style';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <StyleForm onSubmit={handleSubmit} autoComplete="off">
        <StyleLabel>Email</StyleLabel>
        <StyleInput type="email" name="email" />
        <StyleLabel>Password</StyleLabel>
        <StyleInput type="password" name="password" />
        <StyleButton bg="blue.100" type="submit" _hover={{ shadow: 'md' }}>
          Log In
        </StyleButton>
      </StyleForm>
    </Section>
  );
};