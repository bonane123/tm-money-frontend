import styled from 'styled-components';
import VerifyEmail from '../features/emailVerify/VerifyEmail';

const Main = styled.main`
  background-color: var(--color-grey-0);
  height: 100vh;
  width: 100%;
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;


`;

function VerifyEmailPage() {
  return (
    <Main>
      <Container>
        <VerifyEmail/>
      </Container>
    </Main>
  );
}

export default VerifyEmailPage;
