import styled from "styled-components";
import colors from "../utils/colors";

export default function Footer() {
  return (
    <FooterComponent>
      Developed by &nbsp; <Link href="https://github.com/superTheus" target="_blank"> Matheus Souza </Link>
    </FooterComponent>
  );
}

const FooterComponent = styled.footer`
  width: 100%;
  height: 5vh;
  color: ${colors.white};
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  color: ${colors.white};
`;