import { useState } from "react";
import * as S from "./header.styled.js"
import { Container, Hover03 } from "../../globalStyle.styled.js";


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
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target">
              <a href="">x</a>
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                />
              </div>
              <Hover03 type="button">
                <a href="#popExit">Выйти</a>
              </Hover03>
            </div>
            }
        </S.HeaderNav>
      </S.HeaderBlock>
    </Container>
  </S.Header>)
}