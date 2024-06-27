import { ContainerSignin, Modal, ModalBlock, ModalBtnEnter, ModalFormLogin, ModalInput, ModalTtlH2, Wrapper } from "./loginpage.styled"

export const LoginPage = () => {
    return (
        <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtlH2>
						<h2>Вход</h2>
					</ModalTtlH2>
					<ModalFormLogin id="formLogIn" action="#">
						<ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<ModalBtnEnter id="btnEnter"><a href="../main.html">Войти</a></ModalBtnEnter>
						<div className="modal__form-group">
							<p>Нужно зарегистрироваться?</p>
							<a href="signup.html">Регистрируйтесь здесь</a>
						</div>
					</ModalFormLogin>
				</ModalBlock>
            </Modal>
        </ContainerSignin>
    </Wrapper>
    )
}