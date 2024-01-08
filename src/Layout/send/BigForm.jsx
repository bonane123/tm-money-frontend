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
  padding: 1rem;
  margin-bottom: 3rem;
`;

const StyledP = styled.p`
  margin: 0;
`;
const StyledPElement = styled.p`
  margin-bottom: 0;
`;

const StyledUSD = styled.p`
  color: var(--color-orange-700);
  font-weight: 800;
`;

const StyledNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 2rem;

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
  const { register, handleSubmit, setValue, control } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [transferCurrency, setTransferCurrency] = useState("KRW");
  const [loading, setLoading] = useState(false);
  const [amountLoading, setAmountLoading] = useState(false);
  const [exchange, setExchange] = useState(null);
  const [newExchange, setNewExchange] = useState(null);
  const { user, isLoading } = useUser();

  const { data, isChargesLoading } = useCharges();
  const { countriesList, isCountriesLoading } = useCountries();
  const { createNewTransaction, isTransactionLoading } = useCreateTransaction();
  const navigate = useNavigate();

  const INITIAL_AMOUNT = 1;

  let updatedReceiverGetsValue = null;

  // Function to fetch exchange data
  const fetchData = async (amount = 1, to = "KRW", from = "USD") => {
    console.log("Fetching data with amount:", amount, "to:", to, "from:", from);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Z3j2e55HJl4Y9IT767CZ2HulW3Y7rGQK");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    setLoading(true);
    let result;
    try {
      // console.log(amount, to, from);
      const response = await fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
        requestOptions
      );
      const data = await response.json();
      result = data.result;
      // console.log(result);
      updateAnswer(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    return result;
  };

  // Fetch exchange data when component mounts
  useEffect(() => {
    const fetchExchangeData = async () => {
      const result = await fetchData(INITIAL_AMOUNT);
      setExchange(result);
    };

    fetchExchangeData();
  }, []);

  // Function to fetch new exchange data based on selected country
  const fetchNewExchangeData = async () => {
    if (selectedCountry) {
      setLoading(true);
      try {
        const result = await fetchData(INITIAL_AMOUNT, selectedCountry.currency, "KRW");
        // console.log(result);
  
        // Update the state immediately
        setNewExchange(result);
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  // Use the useEffect hook to handle the side effect after the state has been updated
  useEffect(() => {
    // Check if newExchange is not null before calling handleAmountChange
    if (newExchange !== null) {
      handleAmountChange({ target: { value: 1 } });
    }
  }, [newExchange]);

  const handleCountryChange = (selectedCountryId) => {
    const country = countriesList.find((c) => c._id === selectedCountryId);
    setSelectedCountry(country);
    setValue("account", country.account[0]); // Select the first account by default
    fetchNewExchangeData();
    // setTransferCurrency("KRW");
  };

  if (isChargesLoading || isCountriesLoading) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  const calculateTransferFees = (amount) => {
    let transferFees = 0;
    let chargePercentage = 0;

    if (amount <= 50000) {
      chargePercentage = 5000;
      transferFees = 5000;
    } else {
      for (const charge of data) {
        if (amount >= charge.minAmount && amount <= charge.maxAmount) {
          transferFees = amount * charge.chargePercentage;
          chargePercentage = charge.chargePercentage;
          break;
        }
      }
    }
    return { transferFees, chargePercentage };
  };

  // Handle amount change using the already fetched exchange and newExchange data
  const handleAmountChange = (e) => {
    console.log(newExchange);
    const amountUSD = parseFloat(e.target.value);
    const amountKRW = amountUSD * exchange;

    const { transferFees, chargePercentage } = calculateTransferFees(amountKRW);

    const updatedReceiverGets = amountKRW - transferFees;

    setLoading(true);

    try {
      if (updatedReceiverGets >= 0) {
        // console.log(exchange, newExchange);
        if (newExchange === null || newExchange === 0) {
          // console.log(updatedReceiverGets);
          updatedReceiverGetsValue = updatedReceiverGets;
        } else {
          updatedReceiverGetsValue = updatedReceiverGets * newExchange;
        }
        // console.log(updatedReceiverGetsValue);
        setValue("transferFees", transferFees);
        setValue("receiverGets", updatedReceiverGetsValue);
        setValue("percentageCharges", chargePercentage);

        updateFormData({
          amountToSend: amountKRW,
          transferFees: transferFees,
          receiverGets: updatedReceiverGetsValue,
          percentageCharges: chargePercentage,
          transferCurrency: transferCurrency,
          destinationCurrency: selectedCountry
            ? selectedCountry.currency
            : "KRW",
        });
        // console.log("Updated Form Data:", {
        //   amountToSend: amountKRW,
        //   transferFees: transferFees,
        //   receiverGets: updatedReceiverGetsValue,
        //   percentageCharges: chargePercentage,
        //   transferCurrency: transferCurrency,
        //   destinationCurrency: selectedCountry
        //     ? selectedCountry.currency
        //     : "KRW",
        // });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    const userId = user.data.user._id;
    const formDataWithUser = {
      ...data,
      user: userId,
    };

    try {
      // createNewTransaction({
      //   transaction: formDataWithUser,
      // });
      // navigate("/transactions/users");
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
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="currency-to-send">Currency To Send</StyledLabel>
          <StyledUSD>USD</StyledUSD>
        </StyledName>
      </StyledNames>
      <StyledPElement>Destination Information</StyledPElement>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="destination-country">Country</StyledLabel>
          <Controller
            name="destinationCountry"
            control={control}
            render={({ field }) => (
              <StyledSelect
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleCountryChange(e.target.value);
                }}
              >
                <option value="">Select a country</option>
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
            Amount To Send (minimum is $5)
          </StyledLabel>
          <StyledInput
            type="number"
            id="amount-to-send"
            name="amount-to-send"
            min={5}
            step="1"
            disabled={isTransactionLoading || loading}
            required
            {...register("amountToSend")}
            onChange={handleAmountChange}
          />
        </StyledName>
      </StyledNames>
      <>
        {loading ? (
          <SpinnerMini />
        ) : (
          <StyledSendButton disabled={isTransactionLoading || loading}>
            Send Money
          </StyledSendButton>
        )}
      </>
    </StyledForm>
  );
}

export default BigForm;
