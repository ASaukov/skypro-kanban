import { useState } from "react";
import * as S from "./header.styled.js"
import { Container } from "../../globalStyle.styled.js";


export const Header = ({addCard}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpenModul = () => {
    setIsOpen((prev) => !prev)
  }

  return (
  <S.Header>
    <Container>
      <S.HeaderBlock>
        <S.HeaderLogo>
        {/* _show _light для светлой темы */}
          <a href="" target="_self">
            <img src="public/logo.png" alt="logo" />
          </a>
        </S.HeaderLogo>
        <S.HeaderLogo>
        {/* _dark для темной темы */}
          <a href="" target="_self">
            <img src="public/logo_dark.png" alt="logo" />
          </a>
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderBtnNew onClick={addCard}
            id="btnMainNew"><a>Создать новую задачу</a>
          </S.HeaderBtnNew>
          <S.HeaderUser onClick={toggleOpenModul}>Ivan Ivanov</S.HeaderUser>
          {isOpen &&
            <S.HeaderPopUser id="user-set-target">
              <a href="">x</a>
              <S.PopUserName>Ivan Ivanov</S.PopUserName>
              <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
              <S.PopUserTheme>
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                />
              </S.PopUserTheme>
              <S.HeaderBtnExit type="button">
                <a href="#popExit">Выйти</a>
              </S.HeaderBtnExit>
            </S.HeaderPopUser>
            }
        </S.HeaderNav>
      </S.HeaderBlock>
    </Container>
  </S.Header>)
}