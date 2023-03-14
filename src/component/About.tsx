import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "./tools/Header";
import { LGDown, MDDown, XSDown, XXLDown } from "../utils/responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Container = styled.div`
  padding: 0 106px;
  display: flex;
  position: relative;
  overflow: hidden;
  ${XXLDown({
    padding: 48,
    justifyContent: "center",
    minHeight: "681px",
  })}
  ${LGDown({
    padding: "48px 24px",
  })}
  ${MDDown({
    flexDirection: "column",
    alignItems: "center",
    minHeight: "calc(100vw - 48px * 927 / 1195)",
  })}
`;
const Left = styled.div`
  transform: translateX(-100%);
  opacity: 0;
  width: 52%;
  padding-top: 90px;
  padding-bottom: 158px;
  ${XXLDown({
    width: "40%",
    paddingTop: 48,
    paddingBottom: 48,
  })}
  ${MDDown({
    width: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const LeftTitle = styled.h1`
  font-size: 6.25rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-shadow: 0px 10px 10px ${({ theme }) => theme.boxShadow};
  margin-bottom: 30px;
  ${XXLDown({
    fontSize: "3rem",
  })}
  ${LGDown({
    fontSize: "calc(1.425rem + 2.1vw)",
  })}
   ${MDDown({
    textAlign: "center",
  })}
`;
const LeftTitleSecondary = styled(LeftTitle)`
  color: ${({ theme }) => theme.palette.secondary.main};
  position: relative;
  margin: 0;
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
  ${XXLDown({
    fontSize: 16,
  })}
  ${MDDown({
    textAlign: "center",
  })}
`;
const ButtonContainer = styled.div`
  display: flex;
  ${XSDown({
    flexDirection: "column",
  })}
`;
const SignUp = styled(Button)`
  margin-right: 25px;
  ${XSDown({
    marginRight: 0,
    marginBottom: 10,
  })}
`;
const ImageWrapper = styled.div`
  transform: translateX(100%);
  opacity: 0;
  height: 847px;
  width: 48%;
  overflow: hidden;
  ${XXLDown({
    width: "60%",
    height: "auto",
    minHeight: "calc((60vw - 96px)* 927 / 1195)",
  })}
  ${MDDown({
    width: "100%",
    minHeight: "calc((100vw - 48px)* 927 / 1195)",
  })}
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  ${XXLDown({
    height: "auto",
    maxHeight: "100%",
    objectPosition: "8%",
    maxWidth: "100%",
  })}
  ${MDDown({
    maxHeight: "initial",
    maxWidth: "100%",
    objectPosition: "9vw center",
  })};
`;
export const baseUrl = `${process.env.PUBLIC_URL}/assets/`;
const About = () => {
  // Sets up a ScrollTrigger animation for container child's
  const containerEl = useRef<HTMLDivElement>(null);
  const leftEl = useRef<HTMLDivElement>(null);
  const imageWrapperEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        delay: 0.1,
      },
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top center",
      },
    });
    tl.to(leftEl.current, {
      x: 0,
      opacity: 1,
    }).to(imageWrapperEl.current, {
      x: 0,
      opacity: 1,
    });
    return () => {
      // Get all active ScrollTriggers and kill them
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      // Kill the Timeline
      tl.kill();
    };
  }, []);
  // function that refresh scrollTrigger when image get his full width
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={containerEl}>
      <Left ref={leftEl}>
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
      <ImageWrapper ref={imageWrapperEl}>
        <Image onLoad={handleLoad} src={`${baseUrl}illustration1.png`} />
      </ImageWrapper>
    </Container>
  );
};

export default About;
