
import styled from "styled-components";
import TransactionTable from "../Layout/transactions/TransactionTable";


const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;


function TransactionsHistory() {

  return (
    <Main>
      <Container>
        <TransactionTable/>
      </Container>
    </Main>
  );
}

export default TransactionsHistory;
