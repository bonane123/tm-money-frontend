import { styled } from 'styled-components';

const StyledStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFrame = styled.iframe`
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  margin-bottom: 2rem;

`;

const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    height: 50vh;
  }
`;

function OurStory() {
  return (
    <StyledStory>
      <h2>Our Story</h2>

      <StyledFrame
        src='https://www.youtube.com/embed/1h_pNh3oil4'
        title='TM PROMO VIDEO'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></StyledFrame>
      <p>
        TM Money Transfer is a cutting-edge mobile payment service that enables
        individuals to transfer money in real-time to mobile money and other
        local financial institutions in Rwanda, Uganda, Kenya, Tanzania,
        Burundi, DRC Congo, Malawi, Zambia, and South Korea. We understand that
        convenience, cost, and speed are critical challenges when it comes to
        money transfers, and that's why we leverage the latest technology to
        offer a robust and reliable service. At present, other money remittance
        companies charge exorbitant fees of over 10% for each transfer, coupled
        with an unfair currency exchange rate. However, we believe that we can
        provide a better solution, and that's why we developed the revolutionary
        TM Money Transfer. Our service is the fastest and most secure way to
        send money directly to available financial institutions back home. We
        offer incredibly low fees and a fair exchange rate, making our service
        the best option for people looking to send money to their loved ones in
        the countries we serve.
      </p>
      <StyledImage
        src='https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Credit card'
        className='rounded-md'
      />
    </StyledStory>
  );
}

export default OurStory;
