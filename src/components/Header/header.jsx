import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.styled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useUserContext } from "../../context/UserContext/useUserContext.js";

export const Header = () => {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenModul = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnNew id="btnMainNew">
              <Link to={routes.newcard}>
                <a>Создать новую задачу</a>
              </Link>
            </S.HeaderBtnNew>
            <S.HeaderUser onClick={toggleOpenModul}>{user.name}</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUser id="user-set-target">
                <S.PopUserName>{user.name}</S.PopUserName>
                <S.PopUserMail>{user.login}</S.PopUserMail>
                <S.PopUserTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </S.PopUserTheme>
                <S.HeaderBtnExit type="button">
                  <Link to={routes.exit}>Выйти</Link>
                </S.HeaderBtnExit>
              </S.HeaderPopUser>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
