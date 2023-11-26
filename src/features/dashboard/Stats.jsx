import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "../../features/dashboard/Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ transactions }) {


  // 1.
  const numTransactions = transactions.results;

  // 2.
  const sales = transactions.data.transactions.reduce(
    (acc, cur) => acc + cur.amountToSend,
    0
  );
  // 3.

  const pendingTransactions = transactions.data.transactions.filter(
    (transaction) => transaction.status === "pending"
  );

  const numberOfPendingTransactions = pendingTransactions.length;

  // 4.
  const confirmedTransactions = transactions.data.transactions.filter(
    (transaction) => transaction.status === "confirmed"
  );

  const numberOfConfirmedTransactions = confirmedTransactions.length;

  return (
    <>
      <Stat
        title="Transactions"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numTransactions}
      />
      <Stat
        title="Amounts"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Pendings"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={numberOfPendingTransactions}
      />
      <Stat
        title="Confirmed Transactions"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={numberOfConfirmedTransactions}
      />
    </>
  );
}

export default Stats;
