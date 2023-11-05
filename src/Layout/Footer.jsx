import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';

const StyledFooter = styled.footer`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  height: 33vh;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 1200px) {
    height: 38vh;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    height: 55vh;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 1.2rem;
`;

const StyledBottomUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 1.5rem;
  }

  & li {
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }
`;

const StyledSocialUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyledNavLink = styled(Link)`
  padding: 0 0.8rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about'>About Us</StyledLink>
        <StyledLink to='/send'>Send Money</StyledLink>
        <StyledLink to='/reviews'>Reviews</StyledLink>
        <StyledLink to='/fqas'>FAQs</StyledLink>
      </StyledUl>
      <StyledBottomUl>
        <li>&copy; 2020 All right reserved.</li>
        <Link>Terms. Privacy Policy</Link>
        <StyledSocialUl>
          <StyledNavLink
            to='https://www.youtube.com/channel/UC6_1mPTOwZPA16CtQ3XcwiA'
            target={'_blank'}
          >
            <AiFillYoutube />
          </StyledNavLink>
          <StyledNavLink
            to='https://twitter.com/TM_Money_Trans?t=Q1h9eVGP73xnpRxbKraYEw&s=09'
            target={'_blank'}
          >
            <BsTwitter />
          </StyledNavLink>
          <StyledNavLink
            to='https://instagram.com/tm_money_transfer?igshid=YmMyMTA2M2Y='
            target={'_blank'}
          >
            <AiFillInstagram />
          </StyledNavLink>
          <StyledNavLink
            to='https://www.linkedin.com/company/tm-money-transfer/'
            target={'_blank'}
          >
            <BiLogoLinkedin />
          </StyledNavLink>
        </StyledSocialUl>
      </StyledBottomUl>
    </StyledFooter>
  );
}

export default Footer;
