import { Link, useNavigate } from "react-router-dom";
import {
  ContainerSignin,
  H2,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  Wrapper,
} from "./loginpage.styled";
import { routes } from "../../router/routes";
import { useState } from "react";
import { signIn } from "../../api/user";
import { useUserContext } from "../../context/UserContext/useUserContext";

export const LoginPage = () => {
  const { login } = useUserContext();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.login === "") {
      setError("Введите логин");
      return;
    }
    if (formData.password === "") {
      setError("Введите пароль");
      return;
    }

    signIn(formData)
      .then((res) => {
        login(res.user);
        navigate(routes.main);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <H2>Вход</H2>
            </ModalTtl>
            <ModalFormLogin onSubmit={handleLogin} id="formLogIn" action="#">
              <ModalInput
                value={formData.login}
                onChange={handleInput}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                value={formData.password}
                onChange={handleInput}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              {error && <p>{error}</p>}
              <ModalBtnEnter type="submit" id="btnEnter">
                Войти
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routes.registr}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};
