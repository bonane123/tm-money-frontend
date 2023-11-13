import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
// import { formatDistanceFromNow } from '../../utils/helpers';
// import Menus from '../../ui/Menus';
// import {
//   HiArrowDownOnSquare,
//   HiArrowUpOnSquare,
//   HiEye,
//   HiTrash,
// } from 'react-icons/hi2';
// import { useNavigate } from 'react-router-dom';
// import { useCheckout } from '../check-in-out/useCheckout';
// import { useDeleteBooking } from './useDeleteBooking';
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

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

function UserRow({
  userInfo: { id: userId, fullName, email, role, createdAt },
}) {
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  const statusToTagName = {
    pending: "yellow",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Stacked>
        <div>{fullName}</div>
      </Stacked>
      <Stacked>
        <div>{email}</div>
      </Stacked>
      <Stacked>
        <span>{format(new Date(createdAt), "MMM dd yyyy")}</span>
      </Stacked>
      <Stacked>
        <div>{role}</div>
      </Stacked>

      {/* <Modal>
        <Menus.Menu>
          <Menus.Toggle id={userId} />
          <Menus.List id={userId}>
            <Menus.Button
              icon={<HiEye />}
              // onClick={() => navigate(`/bookings/${transactionId}`)}
            >
              see details
            </Menus.Button>
            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                // onClick={() => navigate(`/checkin/${transactionId}`)}
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

            <Modal.Open opens='delete'>
              <Menus.Button icon={<HiTrash />}>Delete transaction</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="transaction"
            // onConfirm={() => deleteBooking(transactionId)}
            // disabled={isDeletingBooking}
          />
        </Modal.Window>
      </Modal> */}
    </Table.Row>
  );
}

export default UserRow;
