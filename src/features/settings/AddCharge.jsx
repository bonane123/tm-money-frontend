import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateChargeForm from './CreateChargeForm';

function AddCharge() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='charge-form'>
          <Button>Add new charge</Button>
        </Modal.Open>
        <Modal.Window name='charge-form'>
          <CreateChargeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCharge;
