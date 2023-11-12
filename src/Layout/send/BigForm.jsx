import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { countries } from "../../data/countries";

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

function BigForm({ updateFormData, updateAnswer }) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  // const watchAmountToSend = watch("amount-to-send", 0);

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    let transferFees = 0;

    if (amount < 10000) {
      transferFees = amount * 0.2;
    } else if (amount < 20000) {
      transferFees = amount * 0.3;
    } else if (amount < 50000) {
      transferFees = amount * 0.4;
    } else {
      transferFees = amount * 0.5;
    }

    setValue("receiver-gets", transferFees);
    updateFormData({
      "amount-to-send": amount,
      "receiver-gets": transferFees,
      destinationCurrency: selectedCountry ? selectedCountry.currency : "KRW",
    });
  };

  const watchAmountToSend = watch("amount-to-send", 0);
  useEffect(() => {
    setAmount(watchAmountToSend);
  }, [watchAmountToSend]);

  useEffect(() => {
    var myHeaders = new Headers();
  myHeaders.append('apikey', 'RDt2npcGu4QVGOkuX7UwQsxlXMpj140q');

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${selectedCountry.currency ? selectedCountry.currency : 'KRW'}&from=${'KRW'}&amount=${1}`,
          requestOptions
        );
        const data = await response.json();
        console.log(data.result);
        updateAnswer(data.result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    
    fetchData(); // Call the fetchData function inside useEffect
  }, [amount, selectedCountry]);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  // const watchAmountToSend = watch("amount-to-send", 0);
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
            required
          />
        </StyledName>
      </StyledNames>
      <StyledPElement>Destination Information</StyledPElement>
      <StyledNames>
        <StyledName>
          <StyledLabel htmlFor="destination-country">Country</StyledLabel>
          <StyledSelect
            id="destination-country"
            {...register("destinationCountry", { required: true })}
            required
            onChange={(e) =>
              setSelectedCountry(
                countries.find((c) => c.name === e.target.value)
              )
            }
          >
            {countries.map((c) => (
              <option value={c.name} key={c.name}>
                {c.name}
              </option>
            ))}
          </StyledSelect>
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor="destination-account">Account</StyledLabel>

          <StyledSelect
            id="destination-account"
            {...register("destinationAccount", { required: true })}
            required
          >
            <option value="">Select an account</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
          </StyledSelect>
        </StyledName>
        <StyledName>
          <StyledLabel htmlFor="destination-account">
            Account-details
          </StyledLabel>
          <StyledInput
            type="text"
            id="destination-account-details"
            {...register("destinationAccountDetails", { required: true })}
            placeholder="Ex: 500-400-222"
            required
          />
        </StyledName>
      </StyledNames>
      <StyledName>
        <StyledLabel htmlFor="destination-currency">Currency</StyledLabel>
        <StyledSelect
          id="destination-currency"
          {...register("destinationCurrency", { required: true })}
          required
        >
          <option value={selectedCountry ? selectedCountry.currency : ""}>
            {selectedCountry && <p> {selectedCountry.currency}</p>}
            {!selectedCountry && <p>Select country first</p>}
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
            required
            {...register("amount-to-send", {
              min: 5000,
              valueAsNumber: true,
            })}
            onChange={handleAmountChange}
          />
        </StyledName>
        {/* <StyledName>
          <StyledLabel htmlFor="receiver-gets">Receiver Gets</StyledLabel>
          <StyledInput
            type="number"
            id="receiver-gets"
            name="receiver-gets"
            disabled
            {...register("receiver-gets", { valueAsNumber: true })}
            value={watchAmountToSend} // Display the value from watch function
          />
        </StyledName> */}
      </StyledNames>
      <div>
        <StyledSendButton type="submit">Send Money</StyledSendButton>
      </div>
    </StyledForm>
  );
}

export default BigForm;
