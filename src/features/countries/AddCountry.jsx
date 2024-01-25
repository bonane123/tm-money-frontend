import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCountryForm from './CreateCountryForm';

function AddCountry() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='country-form'>
          <Button>Add new country</Button>
        </Modal.Open>
        <Modal.Window name='country-form'>
          <CreateCountryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCountry;
