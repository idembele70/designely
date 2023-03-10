import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { baseUrl } from "./About";
import { LGDown, MDDown, SMDown, XLDown, XXLDown } from "../utils/responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 90px;
  padding-top: 50px;
  padding-bottom: 50px;
  ${XXLDown({
    flexDirection: "column",
    alignItems: "center",
    padding: 48,
  })}
  ${MDDown({
    padding: 24,
  })}
`;
const Left = styled.div`
  width: 532px;
  padding-bottom: 48px;
  opacity: 0;
  transform: translateY(100%);
  ${XXLDown({
    width: "auto",
    textAlign: "center",
  })}
`;
const LeftTitle = styled.h1`
  font-size: 3.125rem;
  line-height: 1.22;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 29px;
`;
const LeftSubTitle = styled.h4`
  font-size: 1.875rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 29px;
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.light};
  max-width: 391px;
  ${XXLDown({
    maxWidth: "initial",
  })}
`;
const Right = styled.div`
  opacity: 0;
  transform: translateY(100%);
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
  ${XXLDown({
    marginTop: 0,
  })}
`;
const RightItemsContainer = styled.div`
  width: calc(100% / 3);
  padding: 0 34px;
  margin-top: 50px;
  ${XLDown({
    padding: "0 24px",
  })}
  ${MDDown({
    width: "50%",
  })}
  ${SMDown({
    width: "100%",
  })}
`;
const RightItems = styled.div`
  padding-left: 13px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 5px ${({ theme }) => theme.boxShadow.light};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.palette.common.white};
  ${LGDown({
    paddingTop: 24,
    paddingBottom: 24,
  })}
`;
const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.yellow.main};
  height: 80px;
  width: 80px;
  margin-right: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${XXLDown({
    marginRight: 16,
  })}
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
`;
const Title = styled.h5`
  font-size: 1.5625;
`;
interface IServicesItem {
  url: string;
  title: string;
}
const servicesItems: IServicesItem[] = [
  {
    url: "web-design1",
    title: "Graphic Design",
  },
  {
    url: "website1",
    title: "Ui Ux Design",
  },
  {
    url: "logo1",
    title: "Logo Maker",
  },
  {
    url: "layout1",
    title: "Layout Design",
  },
  {
    url: "ads1",
    title: "Advertising Design",
  },
  {
    url: "packaging1",
    title: "Packaging Design",
  },
];
const Services = () => {
  // Sets up a ScrollTrigger animation for container > child's
  const containerEl = useRef<HTMLDivElement>(null);
  // Container direct child ref
  const containerChildRefs = useRef<HTMLDivElement[]>([]);
  const addToContainerChildRef = (el: HTMLDivElement) => {
    if (el && !containerChildRefs.current.includes(el))
      containerChildRefs.current.push(el);
  };
  // right direct child ref
  const rightChildRefs = useRef<HTMLDivElement[]>([]);
  const addToRightChildRef = (el: HTMLDivElement) => {
    if (el && !rightChildRefs.current.includes(el))
      rightChildRefs.current.push(el);
  };
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        delay: 0.1,
      },
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top-=250 center",
      },
    });
    tl.to(containerChildRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
    }).fromTo(
      rightChildRefs.current,
      {
        opacity: 0,
        y: "100%",
        stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
    return () => {
      // Get all active ScrollTriggers and kill them
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      // Kill the Timeline
      tl.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Left ref={addToContainerChildRef}>
        <LeftTitle>Top category we have</LeftTitle>
        <LeftSubTitle>Trending course category</LeftSubTitle>
        <Paragraph>Various popular categories on our platform</Paragraph>
      </Left>
      <Right ref={addToContainerChildRef}>
        {servicesItems.map(({ url, title }) => (
          <RightItemsContainer
            className="okr"
            key={title}
            ref={addToRightChildRef}
          >
            <RightItems>
              <ImageWrapper>
                <Image src={`${baseUrl}${url}.png`} />
              </ImageWrapper>
              <Title>{title}</Title>
            </RightItems>
          </RightItemsContainer>
        ))}
      </Right>
    </Container>
  );
};

export default Services;
