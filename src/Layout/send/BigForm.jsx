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

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 3rem;
`;

// const RadioButton = styled.label`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

const PgeContainer = styled.p`
font-size: 2rem;
font-weight: 700;
text-align: center;
`;

const SpanEl = styled.span`
  font-size: 1.2rem;
  color: var(--color-orange-700);
  font-weight: 800;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const BankInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BankInfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-orange-700);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.isSelected &&
    `
    background-color: var(--color-orange-100);
  `}
`;

const BankInfoText = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-orange-700);
`;

const StyledSendButton = styled.button`
  max-width: 20rem;
  background-color: var(--color-orange-700);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const StepContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

function BigForm({
  updateFormData,
  updateAnswer,
  answer,
  selectedDirection,
  bankInfo,
  paymentMethod,
  setFormData,
}) {
  const { register, handleSubmit, setValue, control } = useForm();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [transferCurrency, setTransferCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchange, setExchange] = useState(null);
  const [newExchange, setNewExchange] = useState(null);
  const { user, isLoading } = useUser();

  const { data, isChargesLoading } = useCharges();
  const { countriesList, isCountriesLoading } = useCountries();
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const { createNewTransaction, isTransactionLoading } = useCreateTransaction();
  const navigate = useNavigate();

  const INITIAL_AMOUNT = 1;

  let updatedReceiverGetsValue = null;

  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle form submission logic here
      console.log("Form submitted!");
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Function to handle radio button change
  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;

    // Show checkboxes if Wire Transfer is selected
    setShowCheckboxes(selectedMethod === "wireTransfer");
  };

  // Function to handle direction radio button change
  const handleDirectionChange = (direction) => {
    const bankInfoArray =
      direction === "RwandaToKorea"
        ? [
            {
              bank: "Bank of Kigali",
              bankAccount: "100085798361",
              name: "TM MONEY GROUP",
            },
            {
              bank: "Equity Bank",
              bankAccount: "400021782521",
              name: "TM MONEY GROUP",
            },
          ]
        : [
            {
              bank: "Woori Bank",
              bankAccount: "1002152136111",
              name: "NIYIGENA ADOLPHE",
            },
          ];

    setFormData((prevData) => ({
      ...prevData,
      selectedDirection: direction,
      bankInfo: bankInfoArray,
    }));
  };
  const handleBankItemClick = (bank) => {
    setSelectedBank(bank);
  };

  // Function to fetch exchange data
  const fetchData = async (amount = 1, to = "KRW", from = "USD") => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Z3j2e55HJl4Y9IT767CZ2HulW3Y7rGQK");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    setLoading(true);
    let result;
    // try {
    //   const response = await fetch(
    //     `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    //     requestOptions
    //   );
    //   const data = await response.json();
    //   result = data.result;
    //   updateAnswer(result);
    // } catch (error) {
    //   console.error(error);
    // }
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
        const result = await fetchData(
          INITIAL_AMOUNT,
          selectedCountry.currency,
          "KRW"
        );
        setNewExchange(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (selectedCountry) {
      fetchNewExchangeData();
    }
  }, [selectedCountry]);

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
    setValue("account", country.account[0]);
    setTransferCurrency("KRW");
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
    const amountUSD = parseFloat(e.target.value);
    const amountKRW = amountUSD * exchange;

    const { transferFees, chargePercentage } = calculateTransferFees(amountKRW);

    const updatedReceiverGets = amountKRW - transferFees;

    setLoading(true);

    try {
      if (updatedReceiverGets >= 0) {
        if (newExchange === null || newExchange === 0) {
          updatedReceiverGetsValue = updatedReceiverGets;
        } else {
          updatedReceiverGetsValue = Math.round(
            updatedReceiverGets * newExchange
          );
        }
        setValue("transferFees", Math.round(transferFees));
        setValue("receiverGets", updatedReceiverGetsValue);
        setValue("percentageCharges", chargePercentage);
        updateFormData({
          amountToSend: amountKRW,
          transferFees: Math.round(transferFees),
          receiverGets: updatedReceiverGetsValue,
          percentageCharges: chargePercentage,
          transferCurrency: transferCurrency,
          destinationCurrency: selectedCountry
            ? selectedCountry.currency
            : "KRW",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const userId = user.data.user._id;
    const formDataWithUser = {
      ...data,
      ...selectedBank,
      user: userId,
    };

    try {
      await createNewTransaction({
        transaction: formDataWithUser,
      });
      navigate("/transactions/users");
    } catch (error) {
      console.error("Transaction creation failed:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StepContainer isVisible={step === 1}>
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
            <StyledLabel htmlFor="currency-to-send">
              Sending Currency
            </StyledLabel>
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
      </StepContainer>
      <StepContainer isVisible={step === 2}>
        <RadioContainer>
          <p>Wire Transfer</p>
          <p>
            Visa/MasterCard<SpanEl> (Coming Soon...)</SpanEl>
          </p>
        </RadioContainer>
        {/* Checkboxes for specific payment method options */}

        <CheckBoxContainer>
          <CheckBoxLabel>
            <CheckBox
              type="radio"
              value="RwandaToKorea"
              checked={selectedDirection === "RwandaToKorea"}
              onChange={() => handleDirectionChange("RwandaToKorea")}
            />
            Rwanda To Korea
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBox
              type="radio"
              value="koreaToRwanda"
              checked={selectedDirection === "koreaToRwanda"}
              onChange={() => handleDirectionChange("koreaToRwanda")}
            />
            Korea To Africa
          </CheckBoxLabel>
        </CheckBoxContainer>

        {/* Display bank info based on the selected direction */}
        {bankInfo && (
          <BankInfoContainer>
            {bankInfo.map((bank, index) => (
              <BankInfoItemContainer
                key={index}
                isSelected={selectedBank === bank}
                onClick={() => handleBankItemClick(bank)}
              >
                <BankInfoText>Bank: {Object.values(bank)[0]}</BankInfoText>
                <BankInfoText>Account: {Object.values(bank)[1]}</BankInfoText>
                <BankInfoText>Holder: {bank.name}</BankInfoText>
              </BankInfoItemContainer>
            ))}
          </BankInfoContainer>
        )}
      </StepContainer>

        <StepContainer isVisible={step === 3}>
          <PgeContainer>If all information is provided, then click make transfer</PgeContainer>
        </StepContainer>

      <NavigationContainer>
        {step !== 1 && (
          <StyledSendButton onClick={handlePrev} disabled={step === 1}>
            Previous
          </StyledSendButton>
        )}
        {step === 3 ? (
          <StyledSendButton
            type="submit"
            disabled={isTransactionLoading || loading}
          >
            Make Transfer
          </StyledSendButton>
        ) : (
          <StyledSendButton onClick={handleNext}>Next</StyledSendButton>
        )}
      </NavigationContainer>
    </StyledForm>
  );
}

export default BigForm;

