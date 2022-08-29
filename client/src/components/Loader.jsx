import styled from "styled-components";

export const RotateLoader = () => {
  return <Loader />;
};

const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 7px solid white;
  border-bottom: 7px solid transparent;
  margin-top: 40px;
  animation: rotate 1s infinite linear;
`;
