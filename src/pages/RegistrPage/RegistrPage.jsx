import { Link, useNavigate } from "react-router-dom"
import { ContainerSignin, H2, Modal, ModalBlock, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl, Wrapper } from "../LoginPage/loginpage.styled"
import { ModalBtnSignupEnt } from "./registrpage.styled"
import { routes } from "../../router/routes"
import { getUser } from "../../api/newUser"
import { useState } from "react"

export const RegistrPage = ({setUser}) => {
	const [error, setError] = useState('');

	const [formData, setFormData] = useState({
		login: "",
		name: "", 
		password: "",
	});
	const navigate = useNavigate()

	const handleInput = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleRegistr = (e) => {
		e.preventDefault()
		if(formData.login === "") {
			setError("Введите логин")
			return
		}
		if(formData.name === "") {
			setError("Введите имя")
			return
		}
		if(formData.password === "") {
			setError("Введите пароль")
			return
		}

		getUser(formData).then ((res) => {
			console.log(res.user);
			setUser(res.user)
			navigate(routes.login)
		})
		.catch((error) => {
			setError(error.message)
		})
	}

    return (
        <Wrapper>
        <ContainerSignin>
            <Modal>
				<ModalBlock>
					<ModalTtl>
						<H2>Регистрация</H2>
					</ModalTtl>
					<ModalFormLogin onSubmit={handleRegistr} id="formLogUp" action="#">
						<ModalInput value={formData.name} onChange={handleInput} type="text" name="name" id="first-name" placeholder="Имя"/>
						<ModalInput value={formData.login} onChange={handleInput} type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<ModalInput value={formData.password} onChange={handleInput} type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						{error && <p>{error}</p>}
						<ModalBtnSignupEnt onClick={handleRegistr} id="SignUpEnter">Зарегистрироваться </ModalBtnSignupEnt>
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