import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Btn } from 'components/Button';
import { StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenu>
      <p>Welcome, {user.name}!</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </StyledUserMenu>
  );
};
