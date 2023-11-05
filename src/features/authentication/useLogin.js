import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { login as loginAPI } from '../../services/apiAuth';
import { login as loginAPI } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation(loginAPI, {
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      localStorage.setItem('tm-user-access', JSON.stringify(data));

      if (
        JSON.parse(localStorage.getItem('tm-user-access')).data.user.role ===
        'admin'
      )
        navigate('/dashboard', { replace: true });
      navigate('/');
    },
    onError: (err) => {
      console.error('Login error:', err);
      toast.error('The provided email or password are incorrect'); // Display an error
    },
  });

  return { login, isLoading };
}
