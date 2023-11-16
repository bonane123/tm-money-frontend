import styled from 'styled-components';

// import CreateReviewForm from './CreateReviewForm';
// import { useDeleteReview } from './useDeleteReview';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import CreateReviewForm from './CreateReviewForm';

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

const Review = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Message = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Rating = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function ReviewRow({ feedback }) {
  // const { isDeleting, deleteReview } = useDeleteReview();

  const { user, review, rating, id: ReviewId } = feedback;
  return (
    <Table.Row>
      <Review>{user.fullName}</Review>
      <Rating>{rating}</Rating>
      <Message>{review}</Message>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={ReviewId} />
            <Menus.List id={ReviewId}>
              <Modal.Open opens='edit'>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name='edit'>
              <CreateReviewForm reviewToEdit={review} />
            </Modal.Window>

            <Modal.Window name='delete'>
              <ConfirmDelete
                resourceName='review'
                // disabled={isDeleting}
                // onConfirm={() => deleteReview(ReviewId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ReviewRow;
