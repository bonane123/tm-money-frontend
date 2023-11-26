import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "styled-components";
// import { countries } from "../../data/countries";
import { useCharges } from "../../features/charges/useCharges";
import Spinner from "../../ui/Spinner";
import { useUser } from "../../features/authentication/useUser";
import { useCreateTransaction } from "../../features/transactions/useCreateTransaction";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCountries } from "../../features/countries/useCountries";

const StyledForm = styled.form`
  /* background-color: #152238; */
  border: 1px solid var(--color-grey-200);
  border-radius: 8px;
  padding: 1.5rem;
`;

const StyledP = styled.p`
  margin: 2rem 0;
`;
const StyledPElement = styled.p`
  margin-bottom: 2rem;
`;

const StyledNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem 0;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin: 0rem;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const StyledSelect = styled.select`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const StyledSendButton = styled.button`
  max-width: 20rem;
  background-color: var(--color-orange-700);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

function BigForm({ updateFormData, updateAnswer, answer }) {
  const { register, handleSubmit, setValue, control, watch } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, isLoading } = useUser();

  const { data, isChargesLoading } = useCharges();
  const { countriesList, isCountriesLoading } = useCountries();
  const { createNewTransaction, isTransactionLoading } = useCreateTransaction();
  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Z3j2e55HJl4Y9IT767CZ2HulW3Y7rGQK ");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${
            selectedCountry.currency ? selectedCountry.currency : "KRW"
          }&from=${"KRW"}&amount=${1}`,
          requestOptions
        );
        const data = await response.json();

        updateAnswer(data.result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
    // Call the fetchData function inside useEffect
  }, [selectedCountry]);

  const handleCountryChange = (selectedCountryId) => {
    const country = countriesList.find((c) => c._id === selectedCountryId);
    setSelectedCountry(country);
    setValue("currency", country.currency);
    setValue("account", country.account[0]); // Select the first account by default
  };

  if (isChargesLoading || isCountriesLoading) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  const calculateTransferFees = (amount) => {
    let transferFees = 0;
    let chargePercentage = 5000;
    if (amount <= 50000) {
      transferFees = 5000;
      return { transferFees, chargePercentage };
    } else
      for (const charge of data) {
        if (amount >= charge.minAmount && amount <= charge.maxAmount) {
          transferFees = amount * charge.chargePercentage;
          chargePercentage = charge.chargePercentage;
          break;
        }
      }
    return { transferFees, chargePercentage };
  };

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    const { transferFees, chargePercentage } = calculateTransferFees(amount);

    const updatedReceiverGets = (amount - transferFees) * answer;
    setValue("transferFees", transferFees);
    setValue("receiverGets", updatedReceiverGets);
    setValue("percentageCharges", chargePercentage);
    updateFormData({
      amountToSend: amount,
      transferFees: transferFees,
      receiverGets: updatedReceiverGets,
      percentageCharges: chargePercentage,
      destinationCurrency: selectedCountry ? selectedCountry.currency : "KRW",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    const userId = user.data.user._id;
    const formDataWithUser = {
      ...data,
      user: userId,
    };

    try {
      createNewTransaction({
        transaction: formDataWithUser,
      });

      navigate("/"); // Move navigation inside the try block to ensure successful completion of transaction creation
    } catch (error) {
      console.error("Transaction creation failed:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledP>Receiver Information</StyledP>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="receiver-first-name">First Name</StyledLabel>
          <StyledInput
            type="text"
            id="receiver-first-name"
            {...register("receiverFirstName", { required: true })}
            placeholder="Ex: NIYIGENA"
            disabled={isTransactionLoading}
            required
          />
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor="receiver-last-name">Last Name</StyledLabel>
          <StyledInput
            type="text"
            id="receiver-last-name"
            {...register("receiverLastName", { required: true })}
            placeholder="Ex: Adolphe"
            disabled={isTransactionLoading}
            required
          />
        </StyledName>
      </StyledNames>
      <StyledPElement>Destination Information</StyledPElement>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="destination-country">Country</StyledLabel>
          <Controller
            name="destinationCountry"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleCountryChange(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countriesList.map((country) => (
                  <option key={country._id} value={country._id}>
                    {country.name}
                  </option>
                ))}
              </StyledSelect>
            )}
          />
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor="destination-account">Account</StyledLabel>
          <Controller
            name="account"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                {selectedCountry &&
                  selectedCountry.account.map((account, index) => (
                    <option key={index} value={account}>
                      {account}
                    </option>
                  ))}
              </StyledSelect>
            )}
          />
          {/* <StyledSelect
            id="destination-account"
            {...register("destinationAccount", { required: true })}
            disabled={isTransactionLoading}
            required
          >
            <option value="">Select an account</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
          </StyledSelect> */}
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor="destination-account">
            Account-details
          </StyledLabel>
          <StyledInput
            type="text"
            id="destination-account"
            {...register("destinationAccountDetails", { required: true })}
            placeholder="Ex: 500-400-222"
            disabled={isTransactionLoading}
            required
          />
        </StyledName>
      </StyledNames>
      <StyledName>
        <StyledLabel htmlFor="destination-currency">Currency</StyledLabel>
        <StyledSelect
          id="destination-currency"
          {...register("destinationCurrency", { required: true })}
          disabled={isTransactionLoading}
          required
        >
          <option value={selectedCountry ? selectedCountry.currency : ""}>
            {selectedCountry && <>{selectedCountry.currency}</>}
            {!selectedCountry && "Select country first"}
          </option>
        </StyledSelect>
      </StyledName>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="amount-to-send">
            Amount To Send in KRW (minimum is 5000 krw)
          </StyledLabel>
          <StyledInput
            type="number"
            id="amount-to-send"
            name="amount-to-send"
            min="5000"
            step="1"
            disabled={isTransactionLoading}
            required
            {...register("amountToSend", {
              min: 5000,
              valueAsNumber: true,
            })}
            onChange={handleAmountChange}
          />
        </StyledName>
      </StyledNames>
      <div>
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <StyledSendButton type="submit" disabled={isTransactionLoading}>
            Send Money
          </StyledSendButton>
        )}
      </div>
    </StyledForm>
  );
}

export default BigForm;
