import { Link } from "react-router-dom"
import { ContainerSignin, Modal, ModalBlock, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtlH2, Wrapper } from "../LoginPage/loginpage.styled"
import { ModalBtnSignupEnt } from "./registrpage.styled"
import { routes } from "../../router/routes"

export const RegistrPage = () => {
    return (
        <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtlH2>
						<h2>Регистрация</h2>
					</ModalTtlH2>
					<ModalFormLogin id="formLogUp" action="#">
						<ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<ModalBtnSignupEnt id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </ModalBtnSignupEnt>
						<ModalFormGroup>
							<p>Уже есть аккаунт?  <Link to={routes.login}>Войдите здесь</Link></p>
						</ModalFormGroup>
					</ModalFormLogin>
				</ModalBlock>
			</Modal>
        </ContainerSignin>
    </Wrapper>
    )
}