import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
  @media (max-width: 1200px) {
    padding: 1rem 0;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  & h2 {
    text-align: center;
  }
`;

const StyledTransfer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRight = styled.div`
  & div {
    margin: 2rem;
    @media (max-width: 1200px) {
      margin: 1rem;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  & div {
    & span {
      font-weight: 700;
    }
  }
`;

const StyledLeft = styled.div`
  width: 100%;
  height: 40rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledButton = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  outline: none;
  background-color: var(--color-grey-100);
`;

const BUTTONS = [
  {
    id: 1,
    label: 'Create Account',
    title: '1. Create Account',
    description:
      'To create an account, please provide your personal information including your name and email address. Then, you will be prompted to set a password. After completing this step, you will need to verify your email address before being able to log in and access the platform. Once verified, you can enjoy all the features and benefits of the platform.',
  },
  {
    id: 2,
    label: 'Send Money',
    title: '2. Send Money',
    description:
      "To avoid errors or fraudulent activity, it's important to ensure that the correct information is provided before sending money. The information that needs to be entered includes the recipient's name, email address or phone number, and the amount to be transferred. Double-checking this information before submitting the transfer will help ensure a smooth and secure transaction.",
  },
  {
    id: 3,
    label: 'Email Verification',
    title: '3. Email Verification',
    description:
      'Once the money has been successfully delivered, the system will automatically send you a confirmation email with the receipt. Please be sure to check your email inbox for this confirmation to ensure that the transaction has been completed as intended.',
  },
  {
    id: 4,
    label: 'Transaction History',
    title: '4. Transaction History',
    description:
      'If you are unable to locate an email confirmation, please log in to your payment system account to check the transaction history and payment status. Be sure to review any pending transactions or those that have already been completed. This will help you confirm whether the transfer was successful and ensure that your account information is up to date.',
  },
];

function AutoNext() {
  const [activeButtonId, setActiveButtonId] = useState(BUTTONS[0].id);
  const [buttonClicked, setButtonClicked] = useState(false);

  const { isDarkMode } = useDarkMode();
  const image = isDarkMode ? 'signin.png' : 'signinlight.png';

  useEffect(() => {
    let intervalId;

    if (!buttonClicked) {
      intervalId = setInterval(() => {
        const currentIndex = BUTTONS.findIndex(
          (button) => button.id === activeButtonId
        );
        const nextIndex =
          currentIndex === BUTTONS.length - 1 ? 0 : currentIndex + 1;
        setActiveButtonId(BUTTONS[nextIndex].id);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [activeButtonId, buttonClicked]);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId(buttonId);
    setButtonClicked(true);
  };

  const bgColor = {
    backgroundColor: 'var(--color-orange-700)',
  };
  const otherIndex = {
    border: 'none',
  };
  return (
    <Main>
      <Container>
        <h2>How to transfer money?</h2>
        <StyledTransfer>
          <StyledRight>
            <div>
              {BUTTONS.map((button) => (
                <StyledButton
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  style={activeButtonId === button.id ? bgColor : otherIndex}
                >
                  {button.label}
                </StyledButton>
              ))}
            </div>
            <div>
              <span>
                {BUTTONS.find((button) => button.id === activeButtonId)?.title}
              </span>
              <br />
              {
                BUTTONS.find((button) => button.id === activeButtonId)
                  ?.description
              }
            </div>
          </StyledRight>
          <StyledLeft image={image}></StyledLeft>
        </StyledTransfer>
      </Container>
    </Main>
  );
}

export default AutoNext;
