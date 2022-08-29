import styled from "styled-components";
import { Container } from "../styles/globalStyle";

export const ImageCard = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={text.image} alt={text.title} />
        </ImageWrapper>
        <TextWrapper>
          <Title>{text.title}</Title>
          <Description>{text.description}</Description>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #232323;
  border-radius: 25px;
  padding: 20px;
  font-family: sans-serif;
  margin-bottom: 13px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TextWrapper = styled.div`
  height: 110px;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 32px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 18px;
`;
