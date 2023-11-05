import { styled } from 'styled-components';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  @media (max-width: 1200px) {
    padding: 2rem 1rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & h2 {
    text-align: center;
  }
  & div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    & div {
      display: flex;
      flex-direction: column;
      background-color: var(--color-grey-100);
      padding: 1rem 2rem;
      border-radius: var(--border-radius-sm);
    }
  }
`;

function WhyUs() {
  return (
    <Main>
      <Container>
        <h2>Why Us</h2>
        <div>
          <div>
            <h3>Best Services</h3>
            <p>
              We make the difference. We are committed to give you the fastest
              and highly secured services.
            </p>
          </div>
          <div>
            <h3>Privacy Protection</h3>
            <p>Personal data is encrypted & highly secured.</p>
          </div>
          <div>
            <h3>Lowest Fees</h3>
            <p>
              We offer the best foreign currency exchange rates and lower
              transfer fees.
            </p>
          </div>
          <div>
            <h3>Fast Transfer</h3>
            <p>
              We are fast, foremost and genuine concern for what people really
              care about.
            </p>
          </div>
          <div>
            <h3>Trustworthy</h3>
            <p>
              We are fast, foremost and genuine concern for what people really
              care about.
            </p>
          </div>
        </div>
      </Container>
    </Main>
  );
}

export default WhyUs;
