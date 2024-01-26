import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FiMessageCircle } from "react-icons/fi";
import { FaRegFlag } from "react-icons/fa";
import { BsBank } from "react-icons/bs";


const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/dashboard'>
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/transactions'>
            <AiOutlineTransaction />
            Transactions
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/all-reviews'>
            <FiMessageCircle />
            All Reviews
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/all-users'>
            <HiOutlineUsers />
            List of Users
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/users'>
            <HiOutlineUser />
            Create User
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/charges'>
            <HiOutlineCog6Tooth />
            Charges
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/countries'>
          <FaRegFlag />
            Countries
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/banks'>
          <BsBank />
            Banks
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
