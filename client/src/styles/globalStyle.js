import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    overflow-y: scroll;
    width: 7px;
    background: black;
  }

  *::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 15px;
  }
  body{
    background: black;
    color:white;
    padding-top: 100px;
  }
  @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to { 
    transform: rotate(360deg);
  }
}
`
export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
`;
export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
