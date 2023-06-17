import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'components/hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
console.log("isLoggedIn", isLoggedIn)
  return <div>{isLoggedIn ? <UserNav /> : <AuthNav />}</div>;
};