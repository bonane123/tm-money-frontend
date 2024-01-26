import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import TransactionRow from "./TransactionRow";
import { useTransactions } from "./useTransactions";
import Pagination from "../../ui/Pagination";

function TransactionTable() {
  const { data, isLoading, count, page } = useTransactions();

  if (isLoading) return <Spinner />;

  if (!data.transactions.length) return <Empty resourceName="transactions" />;
  return (
    <Menus>
      <Table columns="0.2fr 0.7fr 1fr 1fr 0.5fr 0.8fr 0.5fr 0.5fr 0.9fr 0.7fr 0.2rem">
        <Table.Header>
          <div>Country</div>
          <div>Sender</div>
          <div>Reciever</div>
          <div>Our Account</div>
          <div>Dates</div>
          <div>Details</div>
          <div>Account</div>
          <div>Status</div>
          <div>Amount</div>
          <div>Fees</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={data.transactions}
          render={(transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} page={page} page_size={10}/>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TransactionTable;
