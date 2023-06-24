import { useDispatch } from 'react-redux';
import { register } from '../Redux/Auth/operations';
import {
  StyleButton,
  StyleLabel,
  StyleForm,
  StyleInput,
  Section,
} from 'components/LoginForm/LoginForm.style';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log("register", form );
    form.reset();
  };

  return (
    <Section>
      <StyleForm onSubmit={handleSubmit} autoComplete="off">
        <StyleLabel>Username</StyleLabel>
        <StyleInput type="text" name="name" />
        <StyleLabel>Email</StyleLabel>
        <StyleInput type="email" name="email" />
        <StyleLabel>Password</StyleLabel>
        <StyleInput type="password" name="password" />
        <StyleButton bg="blue.100" type="submit">
          Register
        </StyleButton>
      </StyleForm>
    </Section>
  );
};