import { CardsItem } from "../Card/card.jsx"
import * as S from "./column.styled.js"

export const Column = ({title, cards}) => {
    return (
    <S.MainColumn>
    <S.ColumnTitle>
      <p>{title}</p>
    </S.ColumnTitle>
    <S.Cards>
    {cards.map((card) => {
      return (
        <CardsItem 
            key={card._id}
            title={card.title}
            topic={card.topic}
            date={card.date}
            id={card._id}
        />
      )
    })}
    </S.Cards>
  </S.MainColumn>)
}