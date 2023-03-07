import React from "react";
import styled from "styled-components";
import { Button } from "./tools/Header";
const Container = styled.div`
  padding: 0 106px;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Left = styled.div`
  width: 52%;
  padding-top: 90px;
  padding-bottom: 158px;
`;
const LeftTitle = styled.h1`
  font-size: 6.25rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-shadow: 0px 10px 10px ${({ theme }) => theme.boxShadow};
  margin-bottom: 30px;
`;
const LeftTitleSecondary = styled(LeftTitle)`
  color: ${({ theme }) => theme.palette.secondary.main};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.palette.common.white};
    opacity: 0.1;
    backdrop-filter: blur(2px);
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.light};
  max-width: 615px;
  margin-bottom: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const SignUp = styled(Button)`
  margin-right: 25px;
`;
const Image = styled.img`
  position: absolute;
  right: -153px;
  top: 0;
  max-height: 847px;
  object-fit: cover;
  overflow: visible;
`;
export const baseUrl = `${process.env.PUBLIC_URL}/assets/`;
const About = () => {
  return (
    <Container>
      <Left>
        <LeftTitle>
          Exceedingly Good learn design with
          <LeftTitleSecondary>Designely</LeftTitleSecondary>
        </LeftTitle>
        <Paragraph>
          Publish your designs, impress your friends choose lessons that you
          like anytime and anywhere with Designely
        </Paragraph>
        <ButtonContainer>
          <SignUp to="/signup">Sign up</SignUp>
          <Button to="/learnmore">Learn More</Button>
        </ButtonContainer>
      </Left>
      <Image src={`${baseUrl}illustration1.png`} />
    </Container>
  );
};

export default About;
