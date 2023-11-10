import { styled } from 'styled-components';
import { countries } from '../data/countries';
import { useState } from 'react';

const StyledSendForm = styled.form`
  max-width: 500px;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  @media (max-width: 768px) {
    max-width: 100%;
  }
  & p {
    text-align: center;
    padding: 1rem 0rem;
    font-size: 1.7rem;
    font-weight: 600;
  }
`;
const StyledInputDiv = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 15rem 1fr;
  gap: 1.5rem;
  & select,
  & input {
    background-color: var(--color-grey-50);
    /* border: 1px solid var(--color-grey-400); */
    border: none;
    outline: none;
  }

  & select:focus {
    outline: none;
  }
  & input:focus {
    outline: none;
  }
  & p {
    font-weight: 300;
    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledInputMoney = styled.input`
  border: 1px solid var(--color-grey-400) !important;
  border-radius: 5px;
`;
const StyledButton = styled.button`
  background-color: var(--color-orange-700);
  border: none;
  border-radius: var(--border-radius-sm);
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

function SendForm() {
  const [amount, setAmount] = useState(100);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedToCountry, setSelectedToCountry] = useState(null);
  const [answer, setAnswer] = useState('They get');
  const [loading, setLoading] = useState(false);

  // Function to handle currency conversion
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
        `https://api.apilayer.com/exchangerates_data/convert?to=${selectedToCountry.currency}&from=${selectedCountry.currency}&amount=${amount}`,
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      setAnswer(data.result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <StyledSendForm onSubmit={handleSubmit}>
      <p>Exchange Rate</p>
      <StyledInputDiv>
        <select
          onChange={(e) =>
            setSelectedCountry(countries.find((c) => c.name === e.target.value))
          }
        >
          <option value='From country'>From Rwanda</option>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
        <StyledInputMoney
          type='text'
          placeholder='100'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        {selectedCountry && <p> {selectedCountry.currency}</p>}
        {!selectedCountry && <p>CURRENCY</p>}
      </StyledInputDiv>
      <StyledInputDiv>
        <select
          onChange={(e) =>
            setSelectedToCountry(
              countries.find((c) => c.name === e.target.value)
            )
          }
        >
          <option value='From country'>To South Korea</option>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
        {loading && <p>Loading</p>}
        {!loading && (
          <input type='text' placeholder='They get' value={answer.toLocaleString()} disabled />
        )}

        {selectedToCountry && <p>{selectedToCountry.currency}</p>}
        {!selectedToCountry && <p>CURRENCY</p>}
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledButton>Convert</StyledButton>
      </StyledInputDiv>
    </StyledSendForm>
  );
}

export default SendForm;
