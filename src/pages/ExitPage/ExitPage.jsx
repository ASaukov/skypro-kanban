import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../router/routes"
import * as S from "./exitpage.styled"
import { useUserContext } from "../../context/useUserContext"

export const ExitPage = () => {

  const {logout} = useUserContext()
  const nav = useNavigate()
  const handleLogaut = () => {
    logout()
    nav(routes.login)
  }
    return (
    <S.PopExit>
    <S.PopExitContainer>
      <S.PopExitBlock>
        <S.PopExitTtl>
          <S.H2>Выйти из аккаунта?</S.H2>
        </S.PopExitTtl>
        <form className="pop-exit__form" id="formExit" action="#">
          <S.PopExitFormGroup>
            <S.PopExitYes id="exitYes"
              onClick={handleLogaut}><a>Да, выйти</a>{" "}
            </S.PopExitYes>
            <S.PopExitNo id="exitNo">
              <Link to={routes.main}>Нет, остаться</Link>{" "}
            </S.PopExitNo>
          </S.PopExitFormGroup>
        </form>
      </S.PopExitBlock>
    </S.PopExitContainer>
  </S.PopExit>)
}