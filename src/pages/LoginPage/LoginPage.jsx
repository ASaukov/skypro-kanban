import { Link, useNavigate } from "react-router-dom"
import { ContainerSignin, H2, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl, Wrapper } from "./loginpage.styled"
import { routes } from "../../router/routes"

export const LoginPage = ({setIsAuth}) => {
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		setIsAuth(true)
		navigate(routes.main)
	}
    return (
        <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtl>
						<H2>Вход</H2>
					</ModalTtl>
					<ModalFormLogin id="formLogIn" action="#">
						<ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<ModalBtnEnter onClick={handleLogin} id="btnEnter">Войти</ModalBtnEnter>
						<ModalFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={routes.registr}>Регистрируйтесь здесь</Link>
						</ModalFormGroup>
					</ModalFormLogin>
				</ModalBlock>
            </Modal>
        </ContainerSignin>
    </Wrapper>
    )
}