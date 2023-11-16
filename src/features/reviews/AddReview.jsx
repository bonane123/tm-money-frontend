import Button from '../../ui/Button';
// import CreateReviewForm from './CreateReviewForm';
import Modal from '../../ui/Modal';

function AddReview() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='review-form'>
          <Button>Add review</Button>
        </Modal.Open>
        <Modal.Window name='review-form'>
          {/* <CreateReviewForm /> */}
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddReview;
