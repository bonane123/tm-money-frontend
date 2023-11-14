import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useTransaction } from "../transactions/useTransaction";
import { useUpdateTransaction } from "./useUpdateTransaction";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { transaction, isLoading } = useTransaction();
  // const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(
    () => setConfirmPaid(transaction?.data?.transaction?.isPaid ?? false),
    [transaction]
  );

  const moveBack = useMoveBack();
  // const {updatedTransaction, isConfirmed} = useUpdateTransaction()

  // console.log(updatedTransaction)

  if (isLoading) return <Spinner />;

  const singleTransaction = transaction.data.transaction;

  const {
    id: transactionId,
    amountToSend,
    destinationCurrency,
    receiverGets,
    user,
  } = singleTransaction;

  // const optionalBreakfastPrice =
  //   settings.breakfastPrice * numNights * numGuests;

  // function handleTransactionUpdate() {
  //   if (!confirm) return;

  //   updatedTransaction(transactionId)
  //   if (addBreakfast) {
  //     checkin({
  //       tra,
  //       breakfast: {
  //         hasBreakfast: true,
  //         extrasPrice: optionalBreakfastPrice,
  //         totalPrice: totalPrice + optionalBreakfastPrice,
  //       },
  //     });
  //   } else {
  //     checkin({ bookingId, breakfast: {} });
  //   }
  // }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Confirm transaction #{transactionId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox transaction={singleTransaction} />
      {/* 
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id='breakfast'
          >
            Want to add breakfast for{' '}
            {!addBreakfast
              ? formatCurrency(optionalBreakfastPrice)
              : `${formatCurrency(
                  totalPrice + optionalBreakfastPrice
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalBreakfastPrice
                )})`}
          </Checkbox>
        </Box>
      )} */}

      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          I confirm that {user.fullName} has paid the total amount of{" "}
          {formatCurrency(amountToSend)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid}>
          Confirm to send {receiverGets.toLocaleString()} {destinationCurrency}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
export default CheckinBooking;
