import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.Style';
import { useAuth } from 'components/hooks/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              {' '}
              Home{' '}
            </Link>
            {isLoggedIn && <Link to="/tasks"> tasks</Link>}
          </nav>
          <AppBar />
        </Header>                
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};