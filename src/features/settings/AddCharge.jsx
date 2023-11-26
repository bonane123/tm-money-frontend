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

// function AddCharge() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCharge;
