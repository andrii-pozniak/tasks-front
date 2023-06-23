import {
    // StyleButton,
    StyleText,
    StyleContainer,
  } from 'components/Form/Form.Style';
  import { logOut } from 'components/Redux/Auth/operations';
  import { useDispatch } from 'react-redux';
  import { useAuth } from 'components/hooks/useAuth';
  import { Link } from 'pages/Layout.Style';
  
  export const UserNav = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
      <StyleContainer>
        <StyleText>Welcome, {user.name}</StyleText>
        <Link to="/" onClick={() => dispatch(logOut())}>
          Log Out
        </Link>
      </StyleContainer>
    );
  };