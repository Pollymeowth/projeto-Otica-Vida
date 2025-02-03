import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <Button show={showButton} onClick={scrollToTop}>↑</Button>;
};

export default ScrollToTopButton;
