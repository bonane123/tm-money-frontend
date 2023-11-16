import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import { useUsersTransactions } from "../../features/transactions/useUsersTransactions";
import TransactionRow from "./TransactionRow";
import { getAuthToken } from "../../utils/auth";

const StyledTransactions = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / -1;
  padding-top: 2.4rem;
`;

const TransactionList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TransactionTable() {
  const storedValues = getAuthToken();
  const userId = storedValues.data.user._id;
  const { isLoading, data } = useUsersTransactions(userId);


  // console.log(data);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <StyledTransactions>
      <Row type="horizontal">
        <Heading as="h2">Transactions</Heading>
      </Row>
      {data.transactions?.length > 0 ? (
        <TransactionList>
          {data.transactions.map((activity) => (
            <TransactionRow activity={activity} key={activity.id} />
          ))}
        </TransactionList>
      ) : (
        <NoActivity>No Transaction History...</NoActivity>
      )}
    </StyledTransactions>
  );
}

export default TransactionTable;
