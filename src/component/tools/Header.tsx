import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  padding: 80px 106px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled(Link)``;
const Logo = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3.3rem;
`;
const Navbar = styled.div``;
const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 25px;
  transition: 150ms color ease-in-out;
  &.active {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
const SignContainer = styled.div``;
export const Button = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.palette.primary.main};
  filter: drop-shadow(0px 4px 4px ${({ theme }) => theme.boxShadow});
  background-color: ${({ theme }) => theme.palette.common.white};
  transition: 500ms all ease;
  &:hover {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.secondary.main};
    box-shadow: 0px 4px 4px ${({ theme }) => theme.boxShadow};
    filter: none;
  }
`;
const SignIn = styled(Button)`
  margin-right: 30px;
`;
const SignUp = styled(Button)``;
const Header = () => {
  return (
    <Container>
      <LogoContainer to="/">
        <Logo>Designely</Logo>
      </LogoContainer>
      <Navbar>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/category">Category</NavItem>
        <NavItem to="/course">Course</NavItem>
        <NavItem to="/price">Price</NavItem>
        <NavItem to="/community">Community</NavItem>
      </Navbar>
      <SignContainer>
        <SignIn to="/signin">Sign in</SignIn>
        <SignUp to="/signup">Sign up</SignUp>
      </SignContainer>
    </Container>
  );
};

export default Header;
