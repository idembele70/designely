import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const CircleLoader = styled.div`
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  border-top-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
const Loader = () => {
  return (
    <Container>
      <CircleLoader />
    </Container>
  );
};

export default Loader;
