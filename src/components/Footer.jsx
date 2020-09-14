import React from "react";
import { FooterWrap } from "./Footer.style";
import github from "../images/github.png";

function Footer() {
  return (
    <FooterWrap>
      <span>Create By ParkDajeong</span>
      <a href="https://github.com/ParkDajeong" target="_blank">
        <img src={github} alt="깃허브 아이콘" />
      </a>
    </FooterWrap>
  );
}

export default Footer;
