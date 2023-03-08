import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { LGDown, XLDown, XSDown, XXLDown } from "../../utils/responsive";
import Bars from "../icon/Bars";
const Container = styled.div`
  padding: 80px 106px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.common.white};
  ${XXLDown({
    padding: "12px 48px",
  })}
  ${LGDown({
    padding: "12px 24px",
  })}
`;
const LogoContainer = styled(Link)`
  flex: 0.21;
`;
const Logo = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3.3rem;
  ${LGDown({
    fontSize: "calc(1.425rem + 2.1vw)",
  })}
`;
interface NavbarAndSignWrapperProps {
  expanded: boolean;
}
const NavbarAndSignWrapper = styled.div<NavbarAndSignWrapperProps>`
  flex: 0.79;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: max-height 350ms ease;
  overflow: hidden;
  ${({ expanded }) =>
    XLDown({
      flexBasis: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      maxHeight: expanded ? 550 : 0,
    })}
  ${({ expanded }) =>
    XSDown({
      maxHeight: expanded ? 646 : 0,
    })}
`;
const Navbar = styled.nav`
  display: flex;
  width: 100%;
  ${({ theme }) =>
    XLDown({
      flexDirection: "column",
      padding: "16px 24px 16px 0",
      backgroundColor: theme.palette.secondary.darker,
      margin: "20px 0",
      borderRadius: theme.borderRadius.small,
    })}
`;
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
  ${({ theme }) =>
    XLDown({
      color: theme.palette.common.white,
    })}
`;
const SignContainer = styled.div`
  display: flex;
  ${XSDown({
    flexDirection: "column",
  })}
`;
export const Button = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  padding: 20px 30px;
  white-space: nowrap;
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
  ${XSDown({
    marginRight: 0,
    marginBottom: 10,
  })}
`;
const SignUp = styled(Button)``;
const BarsContainer = styled.button`
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 5px 15px;
  border-radius: ${({ theme }) => theme.borderRadius.XSmall};
  cursor: pointer;
  display: none;
  transition: box-shadow 150ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.25rem;
  }
  ${XLDown({
    display: "initial",
  })}
`;
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Container>
      <LogoContainer to="/">
        <Logo>Designely</Logo>
      </LogoContainer>
      <BarsContainer onClick={handleExpand}>
        <Bars />
      </BarsContainer>
      <NavbarAndSignWrapper expanded={expanded}>
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
      </NavbarAndSignWrapper>
    </Container>
  );
};

export default Header;
