import { useState } from 'react';
import styled from 'styled-components';
import { questions } from '../../data/questions';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDash } from 'react-icons/bs';

const FAQWrapper = styled.div`
  text-align: center;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const FAQHeading = styled.h2`
  font-weight: bold;
  margin: 6rem 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FQAContainer = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

const FAQList = styled.ul`
  padding: 8px;
  border-radius: 8px;
`;

const FAQItem = styled.li`
  margin-bottom: 16px;
`;

const FAQQuestion = styled.p`
  font-size: 1.8rem;
  font-weight: medium;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FAQAnswer = styled.div`
  border-left: 4px solid #3182ce;
  padding: 8px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FQASQuestionTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: medium;
  margin: 1rem 0rem;
`;

const ReadMoreButton = styled.button`
  border: 1px solid #ff9900;
  padding: 8px;
  background: linear-gradient(to top right, #ff9900, #ff6600);
  color: white;
  font-weight: lighter;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: linear-gradient(to top right, #ff6600, #ff3300);
  }
`;

function Fqas() {
  const [isMore, setIsMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const moreHandler = () => {
    setIsMore(true);
  };

  return (
    <>
      {isMore ? (
        <FAQWrapper>
          <FAQHeading>Frequently Asked Questions</FAQHeading>
          {questions.map((item) => (
            <FQAContainer key={item.id}>
              <div>
                <FQASQuestionTitle>{item.question}</FQASQuestionTitle>
                <p>{item.answer}</p>
              </div>
              <hr />
            </FQAContainer>
          ))}
        </FAQWrapper>
      ) : (
        <FAQWrapper>
          <FAQHeading>Frequently Asked Questions</FAQHeading>
          <FAQList>
            {questions.slice(0, 5).map((item) => (
              <FAQItem key={item.id}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                  onClick={() => handleClick(item.id)}
                >
                  <FAQQuestion>{item.question}</FAQQuestion>
                  <div>
                    {openIndex === item.id ? <BsDash /> : <AiOutlinePlus />}
                  </div>
                </div>
                <hr />
                {openIndex === item.id && <FAQAnswer>{item.answer}</FAQAnswer>}
              </FAQItem>
            ))}
          </FAQList>
          <ReadMoreButton onClick={moreHandler}>Read More...</ReadMoreButton>
        </FAQWrapper>
      )}
    </>
  );
}

export default Fqas;
