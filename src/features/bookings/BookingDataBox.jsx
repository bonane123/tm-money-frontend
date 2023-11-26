import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

import {MdEmojiFlags} from 'react-icons/md'

import DataItem from "../../ui/DataItem";
// import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Span = styled.span`
  color: var(--color-grey-100);
`;


const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

// A purely presentational component
function BookingDataBox({ transaction }) {
  const {
    createdAt,
    amountToSend,
    account,
    destinationAccountDetails,
    destinationCountry,
    destinationCurrency,
    percentageCharges,
    receiverGets,
    receiverFirstName,
    receiverLastName,
    transferFees,
    status,
    user,
  } = transaction;

  let newPercentage = '';

  if (percentageCharges === 5000){
    newPercentage = `${formatCurrency(percentageCharges)}`
  }
  else newPercentage = `${percentageCharges}%`

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <AiOutlineTransaction />
          <p>
            {user.fullName} Transfer money to <Span>{receiverLastName} {receiverFirstName}</Span>
          </p>
        </div>

        <p>
          {format(new Date(createdAt), "EEE, MMM dd yyyy")} (
          {isToday(new Date(createdAt))
            ? "Today"
            : formatDistanceFromNow(createdAt)}
          ) 
        </p>
      </Header>

      <Section>
        <Guest>
          <p>
            Destination Information
          </p>
          <span>&bull;</span>
          <p>{account}</p>
          <span>&bull;</span>
          <p>Account Details {destinationAccountDetails}</p>
        </Guest>
        <Guest>
          <p>
            Reciever Information 
          </p>
          <span>&bull;</span>
          <p>{receiverLastName}</p>
          <p> {receiverFirstName}</p>
        </Guest>

        
          <DataItem
            icon={<FaPercent />}
            label="Percentage rate"
          >
           {newPercentage}
          </DataItem>
        
          <DataItem
            icon={<MdEmojiFlags />}
            label="Country"
          >
           <p>&ndash;</p> {destinationCountry?.name}
          </DataItem>


        <DataItem icon={<HiOutlineCheckCircle />} label="Transfer Fees">
         {formatCurrency(transferFees)} 
        </DataItem>

        <Price >
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Amount Recieved`}>
            {formatCurrency(amountToSend)}
          </DataItem>

          <p>Deposited Amount</p>
        </Price>
        <Price isPaid={status}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Amount To Send`}>
            {receiverGets.toLocaleString()} {destinationCurrency}
          </DataItem>

          <p>Receiver Amount</p>
        </Price>
      </Section>

      <Footer>
        <p>Transfered {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
