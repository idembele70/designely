import React from "react";
import styled from "styled-components";
import { baseUrl } from "./About";
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 90px;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const Left = styled.div`
  width: 532px;
  //padding-top: 50px;
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
`;
const Right = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
`;
const RightItemsContainer = styled.div`
  width: calc(100% / 3);
  padding: 0 34px;
  margin-top: 50px;
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
  return (
    <Container>
      <Left>
        <LeftTitle>Top category we have</LeftTitle>
        <LeftSubTitle>Trending course category</LeftSubTitle>
        <Paragraph>Various popular categories on our platform</Paragraph>
      </Left>
      <Right>
        {servicesItems.map(({ url, title }) => (
          <RightItemsContainer>
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
