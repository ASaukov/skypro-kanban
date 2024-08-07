import { DayPicker } from "react-day-picker";
import styled, { css } from "styled-components";

export const Calendar = css`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`
export const Subttl = css`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const PopNewCardCalendar = styled.div`
@media screen and (max-width: 495px) {
    width: 100%;
}
${Calendar}
`

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 5px;

  ${Subttl}
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const CalendarBlock = styled.div`
  display: block;
`

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`

export const CalendarPeriod = styled.div`
  padding: 0 3px;
`
export const CalendarPDateEnd = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;

  & span {
    color: #000000
    }
`

export const StyledDayPicker = styled(DayPicker)`
margin: 0;
--rdp-cell-size: 24px;
--rdp-caption-font-size: 14px;
--rdp-accent-color: #94a6be;
& div {
    color: #94a6be;
    text-transform: capitalize;
  }
  & td {
    font-size: 10px;
    color: #94a6be;
  }

  & th {
    color: #94a6be;
    font-size: 10px;
  }

  & svg {
    color: #94a6be;
  }
`