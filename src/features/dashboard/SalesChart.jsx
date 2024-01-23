import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ transactions }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), 30),
    end: new Date(),
  });
  // console.log(transactions.data.transactions);

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalTransfers: transactions.data.transactions
        .filter((transaction) =>
          isSameDay(date, new Date(transaction.createdAt))
        )
        .reduce((acc, cur) => acc + cur.amountToSend, 0),
      transferFees: transactions.data.transactions
        .filter((transaction) =>
          isSameDay(date, new Date(transaction.createdAt))
        )
        .reduce((acc, cur) => acc + cur.transferFees, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalTransfers: { stroke: "#4f46e5", fill: "#4f46e5" },
        transferFees: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalTransfers: { stroke: "#4f46e5", fill: "#c7d2fe" },
        transferFees: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Transfers from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="₩"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalTransfers"
            type="monotone"
            stroke={colors.totalTransfers.stroke}
            fill={colors.totalTransfers.fill}
            strokeWidth={2}
            name="Total Transfer"
            unit="$"
          />
          <Area
            dataKey="transferFees"
            type="monotone"
            stroke={colors.transferFees.stroke}
            fill={colors.transferFees.fill}
            strokeWidth={2}
            name="Income"
            unit="₩"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
