import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'components/hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return <div>{isLoggedIn ? <UserNav /> : <AuthNav />}</div>;
};