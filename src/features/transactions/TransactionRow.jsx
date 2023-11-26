import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
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

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function TransactionRow({
  transaction: {
    id: transactionId,
    receiverFirstName,
    receiverLastName,
    status,
    receiverGets,
    destinationCurrency,
    destinationCountry,
    destinationAccountDetails,
    account,
    amountToSend,
    transferFees,
    createdAt,
    user
  },
}) {
    const navigate = useNavigate();


  const statusToTagName = {
    pending: "yellow",
    confirmed: "green",
  };

  return (
    <Table.Row>
      <Cabin>{destinationCountry?.name}</Cabin>

      <Stacked>
        <span>
          {user.fullName}
        </span>
        {/* <span>{user.email}</span> */}
      </Stacked>
      <Stacked>
        <span>
          {receiverFirstName} {receiverLastName}
        </span>
        {/* <span>{user.email}</span> */}
      </Stacked>
      <Stacked>
        <span>{format(new Date(createdAt), "MMM dd yyyy")}</span>
      </Stacked>
      <Stacked>
        <span>{destinationAccountDetails}</span>
      </Stacked>
      <Stacked>
        <span>{account}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status}</Tag>

      <Amount>{receiverGets.toLocaleString()} {destinationCurrency}</Amount>
      <Amount>{formatCurrency(transferFees)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={transactionId} />
          <Menus.List id={transactionId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/transactions/${transactionId}`)}
            >
              see details
            </Menus.Button>
            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/transactions/${transactionId}`)}
              >
                Check in
              </Menus.Button>
            )}
            {status === 'checked-in' && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                // disabled={isCheckingOut}
                // onClick={() => checkout(transactionId)}
              >
                Check out
              </Menus.Button>
            )}

            {/* <Modal.Open opens='delete'>
              <Menus.Button icon={<HiTrash />}>Delete transaction</Menus.Button>
            </Modal.Open> */}
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="transaction"
            // onConfirm={() => deleteBooking(transactionId)}
            // disabled={isDeletingBooking}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default TransactionRow;
