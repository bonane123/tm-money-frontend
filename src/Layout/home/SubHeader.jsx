import { styled } from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';
import SendForm from '../SendForm';

const StyledSubHeader = styled.div`
  /* height: 40rem; */
  width: 100%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Main = styled.main`
  padding: 4rem 6.4rem;
  @media (max-width:1200px){
    padding: 2rem 1.5rem;
  }

  @media (max-width:768px){
    padding: 2rem 1rem ;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */
  
`;

const StyledSubHeaderGrig = styled.div`
  display: grid;
  grid-template-columns: 1fr 50rem;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StyledSubRight = styled.div`

& div{
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      margin-bottom: .5rem;
    }
}
& div:first-child{
    font-size: 3rem;
    font-weight: 900;
& span{
    color: var(--color-orange-700);
}
}

& div:nth-child(2){
font-size: 2rem;
font-weight: 600;
}

& div:last-child{
    margin-bottom: 0;
}
`;

function SubHeader() {
  const { isDarkMode } = useDarkMode();
  const url = isDarkMode
    ? 'https://images.pexels.com/photos/10149288/pexels-photo-10149288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    : 'https://media.istockphoto.com/id/904359234/photo/modern-keyboard-with-blue-money-transfer-button.jpg?s=170667a&w=0&k=20&c=jSVo2NDH4xjgfZdG8GfyKHkXfQ9z48DVvg40GfLcf7M=';
  return (
    <StyledSubHeader url={url}>
      <Main>
        <Container>
          <StyledSubHeaderGrig>
            <StyledSubRight>
              <div>
                TM <span>Money Transfer</span>
              </div>
              <div>Send money quickly and securely.</div>
              <div>
                We own speed and safety. Over the last three years, we've helped
                hundreds of customers save a lot of money and time on remittance
                costs.
              </div>
            </StyledSubRight>
            <SendForm/>
          </StyledSubHeaderGrig>
        </Container>
      </Main>
    </StyledSubHeader>
  );
}

export default SubHeader;
