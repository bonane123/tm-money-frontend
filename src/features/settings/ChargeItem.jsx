import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
// import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.4fr;
  gap: 1rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function ChargeItem({ activity }) {
  const {
    id,
    maxAmount,
    minAmount,
    chargePercentage,
  } = activity;
  return (
    <StyledTodayItem>
      <Guest>{minAmount}</Guest>
      <Guest>{maxAmount}</Guest>
      <Guest>{chargePercentage}%</Guest>


        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/charges-update/${id}`}
        >
          Update
        </Button>

    </StyledTodayItem>
  );
}

export default ChargeItem;
