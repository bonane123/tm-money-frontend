
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoutBtn = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  @media (max-width: 768px) {
    padding: 2.4rem;
  }

  &:hover {
    background-color: var(--color-orange-700);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    /* color: var(--color-brand-600); */
  }
`;


function Logout() {
const navigate = useNavigate()
const logoutBtn = ()=>{
  window.localStorage.removeItem('tm-user-access')
  navigate('/login')
}

  return (
    <LogoutBtn onClick={()=> logoutBtn()}>
      Logout
    </LogoutBtn>
  );
}

export default Logout;
