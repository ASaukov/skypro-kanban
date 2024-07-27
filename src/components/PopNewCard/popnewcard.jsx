import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { Calendar } from "../Calendar/calendar";
import * as S from "./popnewcard.styled";
import { useState } from "react";
import { addTask } from "../../api/newTask";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { useUserContext } from "../../context/UserContext/useUserContext";

export const PopNewCard = () => {
  const { user } = useUserContext();
  const {setTasks} = useTaskContext();
  const navigation = useNavigate();
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");

  const [cardData, setCardData] = useState({
    title: "",
    topic: "Web Design",
    status: "Без статуса",
    description: "",
    date: "",
  });

  const newCard = {
    title: cardData.title,
    topic: cardData.topic,
    description: cardData.description,
    date: selected,
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleNewCard = async (e) => {
    e.preventDefault();
    if (cardData.title === "") {
      setError("Введите название задачи");
      return;
    }
    if (cardData.description === "") {
      setError("Заполните описание задачи");
      return;
    }
    if (cardData.date === "") {
      setError("Выберите дату");
      return;
    }
    await addTask(user.token, newCard)
      .then((res) => {
        setTasks(res.tasks);
        navigation(routes.main);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={routes.main}>
              <S.PopNewCardClose href="#">&#10006;</S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={cardData.title}
                    onChange={handleData}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                  <S.FormNewArea
                    name="description"
                    value={cardData.description}
                    onChange={handleData}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <div className="prod_checbox">
                  <div className="radio-toolbar">
                    <input
                      onChange={handleData}
                      type="radio"
                      id="radio1"
                      name="topic"
                      value="Web Design"
                      checked={cardData.topic === "Web Design"}
                    />
                    <label htmlFor="radio1">Web Design</label>

                    <input
                      onChange={handleData}
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                      checked={cardData.topic === "Research"}
                    />
                    <label htmlFor="radio2">Research</label>

                    <input
                      onChange={handleData}
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                      checked={cardData.topic === "Copywriting"}
                    />
                    <label htmlFor="radio3">Copywriting</label>
                  </div>
                </div>
                {/* <S.CategoriesOrangeActive>
                  <input
                    type="radio"
                    onChange={handleData}
                    name="topic"
                    value={cardData.topic}
                  />
                  <S.OrangeCat>Web Design</S.OrangeCat>
                </S.CategoriesOrangeActive>
                <S.CategoriesGreen>
                  <S.GreenCat>Research</S.GreenCat>
                </S.CategoriesGreen>
                <S.CategoriesPurple>
                  <S.PurpleCat>Copywriting</S.PurpleCat>
                </S.CategoriesPurple> */}
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            {error && <p>{error}</p>}
            <S.FormNewCreate onClick={handleNewCard} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
