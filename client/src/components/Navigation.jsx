import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/globalStyle";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setlastScroll] = useState(0);

  const showHideNavbar = () => {
    setlastScroll(window.scrollY);
    if (window.scrollY > 250 && window.scrollY > lastScroll) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", showHideNavbar);
    return () => {
      document.removeEventListener("scroll", showHideNavbar);
    };
  });

  return (
    <Nav open={show}>
      <Container>
        <Wrapper>
          <Logo href="/">Gallery</Logo>
          <Link to="/addCard">
            <Button>Add Card</Button>
          </Link>
        </Wrapper>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  transition: 300ms ease-in-out;
  top: ${(props) => (props.open ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 80px;
  background: #1f1f1f;
  font-family: sans-serif;
  font-size: 20px;
  z-index: 5;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 39px;
  font-weight: 700;
  cursor: pointer;
`;
const Button = styled.button`
  height: 46px;
  cursor: pointer;
  width: 150px;
  outline: none;
  font-size: 25px;
  font-weight: 700;
  border: none;
  color: white;
  background: crimson;
  border-radius: 25px;
  transition: 250ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    background: springgreen;
  }
`;
