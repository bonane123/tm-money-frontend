import styled from 'styled-components';
import Tag from '../../ui/Tag';
import { Flag } from '../../ui/Flag';
import Button from '../../ui/Button';
import CheckoutButton from './CheckoutButton';
import { Link } from 'react-router-dom';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { receiverFirstName, receiverLastName, status, receiverGets, destinationCurrency, destinationCountry, destinationAccountDetails} = activity;
  return (
    <StyledTodayItem>
      {status === 'pending' && <Tag type='green'>Unconfirmed</Tag>}
      {status === 'confirmed' && <Tag type='blue'>Departing</Tag>}
      {/* <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} /> */}
      <Guest>{receiverFirstName}</Guest>
      <Guest>{receiverLastName}</Guest>
      <div>{receiverGets} {destinationCurrency}</div>
      <div>{destinationCountry}</div>
      <div>{destinationAccountDetails}</div>

      {status === 'pending' && (
        <Button
          size='small'
          variation='primary'
          as={Link}
          // to={`/checkin/${id}`}
        >
          Confirm
        </Button>
      )}
      {status === 'confirmed' && <CheckoutButton />}
    </StyledTodayItem>
  );
}

export default TodayItem;
