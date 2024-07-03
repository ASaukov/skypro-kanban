import styled from "styled-components";

export const ContainerNF = styled.div`
position: relative;
`

export const Img = styled.img`
   max-width: 100%;
   max-height: 100%;
   display: block;
`

export const ButtonNF = styled.button`
position: absolute;
top: 55%;
left: 2%;
font-size: 35px;
color: white;
background-color: DarkOrange;
border-radius: 30px;
border: none;
padding: 15px;

&:hover {
   background-color: MediumPurple;
}
`