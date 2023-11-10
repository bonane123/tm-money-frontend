
import { useNavigate } from 'react-router-dom';
import ButtonIcon from '../../ui/ButtonIcon';


function Logout() {
const navigate = useNavigate()
const logoutBtn = ()=>{
  window.localStorage.removeItem('tm-user-access')
  navigate('/login')
}

  return (
    <ButtonIcon onClick={()=> logoutBtn()}>
      Logout
    </ButtonIcon>
  );
}

export default Logout;
