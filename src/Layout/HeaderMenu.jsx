import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import DarkModeToggle from "../ui/DarkModeToggle";
import { getAuthToken } from "../utils/auth";
import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    flex-direction: column;
    align-items: start;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* gap: 1.2rem; */
    white-space: nowrap;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;
  }
`;

function HeaderMenu({ isOpen }) {
  const storedValue = getAuthToken();

  if (!storedValue) {
    return (
      <StyledHeaderMenu $isOpen={isOpen}>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">About Us</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/send">Send Money</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reviews">Reviews</StyledNavLink>
        </li>
        <li>
          {/* <StyledNavLink to="/login">Login</StyledNavLink> */}
          <div id="signInDiv"></div>
        </li>
        <li style={{ paddingLeft: "1.2rem" }}>
          <DarkModeToggle />
        </li>
      </StyledHeaderMenu>
    );
  }

  return (
    <StyledHeaderMenu $isOpen={isOpen}>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/about">About Us</StyledNavLink>
      </li>

      {storedValue.data.user.role === "user" && (
        <>
          <li>
            <StyledNavLink to="/send">Send Money</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/transactions/users">History</StyledNavLink>
          </li>
        </>
      )}

      <li>
        <StyledNavLink to="/reviews">Reviews</StyledNavLink>
      </li>

      {storedValue.data.user.role === "admin" && (
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
      )}
      <li>
        <Logout />
      </li>
      <li style={{ paddingLeft: "1.2rem" }}>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
