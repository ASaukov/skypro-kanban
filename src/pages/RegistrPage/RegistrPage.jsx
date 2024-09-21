import { Link, useNavigate } from "react-router-dom";
import {
  ContainerSignin,
  ErrorP,
  H2,
  Modal,
  ModalBlock,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  Wrapper,
} from "../LoginPage/loginpage.styled";
import { ModalBtnSignupEnt } from "./registrpage.styled";
import { routes } from "../../router/routes";
import { getUser } from "../../api/newUser";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext/useUserContext";

export const RegistrPage = () => {
  const { login } = useUserContext();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleRegistr = (e) => {
    e.preventDefault();
    if (
      formData.login === "" ||
      formData.name === "" ||
      formData.password === ""
    ) {
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }

    getUser(formData)
      .then((res) => {
        console.log(res.user);
        login(res.user);
        navigate(routes.login);
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
              <H2>Регистрация</H2>
            </ModalTtl>
            <ModalFormLogin onSubmit={handleRegistr} id="formLogUp" action="#">
              <ModalInput
                $error={error}
                value={formData.name}
                onChange={handleInput}
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                $error={error}
                value={formData.login}
                onChange={handleInput}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                $error={error}
                value={formData.password}
                onChange={handleInput}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              {error && <ErrorP>{error}</ErrorP>}
              <ModalBtnSignupEnt
                $error={error}
                disabled={error}
                onClick={handleRegistr}
                id="SignUpEnter"
              >
                Зарегистрироваться{" "}
              </ModalBtnSignupEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};
