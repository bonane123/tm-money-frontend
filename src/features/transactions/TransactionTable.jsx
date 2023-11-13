import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import TransactionRow from './TransactionRow';
import { useTransactions } from './useTransactions';

function TransactionTable() {
  const { data, isLoading } = useTransactions();
  
  if (isLoading) return <Spinner />;
  const transactions = data.data.transactions
  
  if (!transactions.length) return <Empty resourceName='transactions' />;
  return (
    <Menus>
      <Table columns='0.3fr 2fr 2fr 0.5fr 0.8fr 0.5fr 0.5fr 0.9fr 0.5fr 1rem'>
        <Table.Header>
          <div>Country</div>
          <div>Sender</div>
          <div>Reciever</div>
          <div>Dates</div>
          <div>Details</div>
          <div>Account</div>
          <div>Status</div>
          <div>Amount</div>
          <div>Fees</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={transactions}
          render={(transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={count} page={page} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TransactionTable;
