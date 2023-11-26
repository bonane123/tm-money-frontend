import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateChargeForm from "./CreateChargeForm";
import { useDeleteCharge } from "./useDeleteCharge";

const Review = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Message = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Rating = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function ChargeItem({ activity }) {
  const { _id: chargeId, maxAmount, minAmount, chargePercentage } = activity;
  const {deleteCharge, isDeletingCharge} = useDeleteCharge();

  return (
    <>
      <Table.Row>
        <Review>{minAmount}</Review>
        <Rating>{maxAmount}</Rating>
        <Message>{chargePercentage}%</Message>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={chargeId} />
              <Menus.List id={chargeId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateChargeForm chargeToEdit={activity} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="charge"
                  disabled={isDeletingCharge}
                  onConfirm={() => deleteCharge(chargeId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default ChargeItem;
