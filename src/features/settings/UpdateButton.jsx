import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

function UpdateButton({ transactionId }) {
  return (
    <Button
          size="small"
          variation="secondary"
          as={Link}
          to={`/transactions/${transactionId}`}
        >
          Paid
        </Button>
  );
}

export default UpdateButton;
