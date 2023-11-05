import { styled } from 'styled-components';

const StyledImage = styled.div`
    width: 12rem;
`;

function Logo() {
    return (
      <StyledImage>
        <img src='nobglogo.png' alt='logo' />
      </StyledImage>
    );
}

export default Logo
