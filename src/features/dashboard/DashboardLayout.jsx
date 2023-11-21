import styled from "styled-components";
// import { useRecentBooking } from './useRecentBookings';
import Spinner from "../../ui/Spinner";
// import { useRecentStays } from './useRecentStays';
import Stats from "./Stats";
// import { useCabins } from '../cabins/useCabins';
import SalesChart from "./SalesChart";
// import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useStatTransactions } from "../transactions/useStatTransactions";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { isLoading, data } = useStatTransactions();
  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        transactions={data}
      />
      <TodayActivity />
      {/* <DurationChart confirmedStays={confirmedStays} /> */}
      <SalesChart transactions={data}  />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
