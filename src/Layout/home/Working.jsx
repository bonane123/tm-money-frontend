import { styled } from 'styled-components';

const StyledWorking = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Main = styled.main`
  /* background-color: var(--color-grey-50); */
  padding: 4rem 6.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  /* overflow-y: scroll; */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  /* & div{
    background-color: var(--color-grey-50);
    padding: 1rem 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
  } */

`;

function Working() {
  return (
    <StyledWorking>
      <Main>
        <Container>
          <div>
            <p>
              We're always here to help! Our business operates 24/7, so feel
              free to contact us at any time.
            </p>
          </div>
        </Container>
      </Main>
    </StyledWorking>
  );
}

export default Working;
