import { useEffect, useState } from "react"
import { Header } from "../../components/Header/header.jsx"
import { Main } from "../../components/Main/main.jsx"
import { PopBrowse } from "../../components/PopBrowse/popbrowse"
import { PopNewCard } from "../../components/PopNewCard/popnewcard.jsx"
import { PopUser } from "../../components/PopUser/popuser.jsx"
import { Wrapper } from "../../globalStyle.styled.js"
import { Cardlist } from "../../data.js"

export const MainPage = () => {

    const [cards, setCards] = useState(Cardlist)
    const [isLoading, setIsLoading] = useState(false)

    const addCard = () => {
        const newCard = {
          id: cards.length + 1,
            topic: "Web Design",
            title: "Новая задача",
            date: "13.06.24",
            status: "Без статуса",
        }
        setCards([...cards, newCard])
      }
    
      useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 0);
      }, [])

    return (
    <Wrapper>
      <Header addCard={addCard}/>
      {isLoading ? <p className="loader">....Loading</p> : <Main cards={cards}/>}
      <PopBrowse/>
      <PopNewCard/>
      <PopUser/>
    </Wrapper>
    )
}