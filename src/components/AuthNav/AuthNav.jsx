import { NavLink } from 'react-router-dom';
import { Btn } from 'components/Button';
import { StyledAuthNav } from './AuthNaw.styled';

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <NavLink to="/register">
        <Btn>Register</Btn>
      </NavLink>
      <NavLink to="/login">
        <Btn>Log In</Btn>
      </NavLink>
    </StyledAuthNav>
  );
};
