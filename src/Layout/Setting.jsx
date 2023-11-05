import { styled } from 'styled-components';
import ButtonIcon from '../ui/ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../ui/DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.4rem;
`;

function Setting() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default Setting;
