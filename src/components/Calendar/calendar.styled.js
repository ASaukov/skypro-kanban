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
  padding: 0 7px;

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
  padding: 0 7px;
`


export const StyledDayPicker = styled(DayPicker)`
--rdp-cell-size: 24px;
--rdp-caption-font-size: 14px;
--rdp-accent-color: #94a6be;

`