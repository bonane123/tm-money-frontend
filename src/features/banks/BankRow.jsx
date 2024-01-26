import styled from "styled-components";

// import CreateReviewForm from './CreateReviewForm';
// import { useDeleteReview } from './useDeleteReview';
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// import CreateCountryForm from "./CreateCountryForm";
// import { useDeleteReview } from "./useDeleteReview";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 0.5fr 2.2fr 0.6fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Bank = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Currency = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Banks = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function BankRow({ banks }) {
  //   const { isDeletingReview, deleteReview } = useDeleteReview();

  const { direction, directionInfo, _id: BankId } = banks;

  return (
    <>
      <Table.Row>
        <Bank>{direction}</Bank>
        {directionInfo?.map((bank) => (
          <Banks key={BankId}>
            <div>{bank.bank}</div>
            <div>{bank.bankAccount}</div>
            <div>{bank.name}</div>
          </Banks>
        ))}
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={BankId} />
              <Menus.List id={BankId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                {/* <CreateBankForm BankToEdit={countries} /> */}
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default BankRow;
