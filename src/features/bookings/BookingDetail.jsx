import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { useCheckout } from '../check-in-out/useCheckout';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteBooking } from './useDeleteBooking';
import Empty from '../../ui/Empty';
import { useTransaction } from '../transactions/useTransaction';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { transaction, isLoading } = useTransaction();
  // const { checkout, isCheckingOut } = useCheckout();
  // const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (!transaction) return <Empty resourceName='transaction' />;

  const { status, id: transactionId } = transaction.data.transaction;
  const singleTransaction = transaction.data.transaction
  console.log(singleTransaction)

  const statusToTagName = {
    pending: 'blue',
    confirmed: 'green',
  };

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h2'>Transaction #{transactionId}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox transaction={singleTransaction} />

      <ButtonGroup>
        {status === 'pending' && (
          <Button onClick={() => navigate(`/confirm/${transactionId}`)}>
            Confirm
          </Button>
        )}

        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger'>Delete Transaction</Button>
          </Modal.Open>

          {/* <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='bookings'
              disabled={isDeletingBooking}
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
            />
          </Modal.Window> */}
        </Modal>

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
