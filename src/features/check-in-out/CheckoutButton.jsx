import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

function CheckoutButton({ transactionId }) {
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

export default CheckoutButton;
