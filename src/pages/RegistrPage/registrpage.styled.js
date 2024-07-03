
  
//   div,
//   button,
//   a {
//     font-family: "Roboto", sans-serif;
//   }

import styled from "styled-components";
import { Hover01 } from "../../globalStyle.styled";

   
  export const ModalBtnSignupEnt = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;

    & a {
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${Hover01}
  
  @media screen and (max-width: 375px) {
      height: 40px;
  }
  `