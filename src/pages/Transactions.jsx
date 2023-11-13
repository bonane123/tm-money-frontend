import Row from "../ui/Row";
import TransactionTable from "../features/transactions/TransactionTable";
import Heading from "../ui/Heading";

function Transactions() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Transactions</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <TransactionTable />
      </Row>
    </>
  );
}

export default Transactions;
