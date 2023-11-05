import { styled } from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  /* height: 20rem; */
  padding: 1.2rem 0rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1rem 0rem;
    gap: 0;
  }
`;

const StyledHeaderLogo = styled(Link)``;

const StyledHeaderMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-right: 2rem; */

  & button {
    display: none;
    @media (max-width: 768px) {
      list-style: none;
      border: 1px solid var(--color-grey-600);
      margin: 2rem;
      display: flex;
      padding: 1rem;
      border-radius: 5px;
    }
    background-color: transparent;
    /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderMenu>
        <StyledHeaderLogo to='/'>
          <Logo />
        </StyledHeaderLogo>

        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaTimes />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        )}
      </StyledHeaderMenu>
      <HeaderMenu isOpen={isOpen} />
    </StyledHeader>
  );
}

export default Header;
