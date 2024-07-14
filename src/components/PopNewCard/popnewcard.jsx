
import { Calendar } from "../Calendar/calendar";
import * as S from "./popnewcard.styled"

export const PopNewCard = () => {
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose href="#">
            &#10006;
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                id="formNewCard"
                action="#"
              >
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">
                    Название задачи
                  </S.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">
                    Описание задачи
                  </S.Subttl>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesOrangeActive>
                  <S.OrangeCat>Web Design</S.OrangeCat>
                </S.CategoriesOrangeActive>
                <S.CategoriesGreen>
                  <S.GreenCat>Research</S.GreenCat>
                </S.CategoriesGreen>
                <S.CategoriesPurple>
                  <S.PurpleCat>Copywriting</S.PurpleCat>
                </S.CategoriesPurple>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewCreate id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
