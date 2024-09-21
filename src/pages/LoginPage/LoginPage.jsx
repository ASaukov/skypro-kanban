import { Link, useNavigate } from "react-router-dom";
import {
  ContainerSignin,
  ErrorP,
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
    setError("");
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
              <ModalInput $error={error}
                value={formData.login}
                onChange={handleInput}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput $error={error}
                value={formData.password}
                onChange={handleInput}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              {error && <ErrorP>{error}</ErrorP>}
              <ModalBtnEnter $error={error} type="submit" id="btnEnter" disabled={error}>
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
