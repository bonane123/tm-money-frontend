import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
// import CreateCountryForm from './CreateBankForm';

function AddBank() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='bank-form'>
          <Button>Add new Bank</Button>
        </Modal.Open>
        <Modal.Window name='bank-form'>
          {/* <CreateBankForm /> */}
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBank;
