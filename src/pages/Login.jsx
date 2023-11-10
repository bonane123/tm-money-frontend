import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('tm-user-access')

    if (token) {
      navigate('/')
    }
  }, [navigate])
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
