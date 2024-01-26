import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
// import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";
import CheckoutButton from "../../features/check-in-out/CheckoutButton";
import { format } from "date-fns";

const StyledTransactionRow = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

function TransactionRow({ activity }) {
  const {
    id,
    receiverFirstName,
    receiverLastName,
    status,
    receiverGets,
    destinationCurrency,
    destinationCountry,
    destinationAccountDetails,
    createdAt,
    bank, 
    bankAccount,
    name,
  } = activity;
  return (
    <StyledTransactionRow>
      {status === "pending" && <Tag type="yellow">Pending</Tag>}
      {status === "confirmed" && <Tag type="green">Confirmed</Tag>}
      <Guest>{receiverFirstName}</Guest>
      <Guest>{receiverLastName}</Guest>
      <div>{format(new Date(createdAt), "MMM dd yyyy")}</div>
      <div>
        {receiverGets.toLocaleString()} {destinationCurrency}
      </div>
      <div>{destinationCountry?.name}</div>
      <div>{destinationAccountDetails}</div>
      <Stacked>
        <span>
          {bank ? bank : ""} {" "}{bankAccount ? bankAccount : ""}
        </span>
        <span>{name ? name : ""}</span>
      </Stacked>
    </StyledTransactionRow>
  );
}

export default TransactionRow;
