import { formatDate } from "date-fns/format";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import * as S from "./calendar.styled";

export const Calendar = ({ selected, setSelected }) => {
  return (
    <S.PopNewCardCalendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarContent>
          <S.StyledDayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            locale={ru}
          />
        </S.CalendarContent>
        <S.CalendarPeriod>
          {!selected ? (
            <S.CalendarPDateEnd>Выберите срок исполнения</S.CalendarPDateEnd>
          ) : (
            <S.CalendarPDateEnd>
              Cрок исполнения:
              <span> {formatDate(selected, "dd.MM.yy", { locale: ru })}</span>
            </S.CalendarPDateEnd>
          )}
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.PopNewCardCalendar>
  );
};
