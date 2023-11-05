import { Outlet } from 'react-router-dom';
import Header from './Header';
import { styled } from 'styled-components';
import Footer from './Footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

function UserLayout() {
  return (
    <StyledApp>
      <Header />
      <Outlet />
      <Footer />
    </StyledApp>
  );
}

export default UserLayout;
