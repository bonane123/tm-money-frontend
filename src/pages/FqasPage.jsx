import styled from 'styled-components';
import Fqas from '../Layout/fqas/fqas';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;


`;

function FqasPage() {
  return (
    <Main>
      <Container>
        <Fqas />
      </Container>
    </Main>
  );
}

export default FqasPage;
