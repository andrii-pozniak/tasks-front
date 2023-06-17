import {
    StyleButton,
    StyleText,
    StyleContainer,
  } from 'components/Form/Form.Style';
  import { logOut } from 'components/Redux/Auth/operations';
  import { useDispatch } from 'react-redux';
  import { useAuth } from 'components/hooks/useAuth';
  
  export const UserNav = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    console.log("user", user)
    return (
      <StyleContainer>
        <StyleText>Welcome, {user.name}</StyleText>
        <StyleButton type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </StyleButton>
      </StyleContainer>
    );
  };