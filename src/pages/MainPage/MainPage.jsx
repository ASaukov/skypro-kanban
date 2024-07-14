import { useEffect, useState } from "react"
import { Header } from "../../components/Header/header.jsx"
import { Main } from "../../components/Main/main.jsx"
import { Wrapper } from "../../globalStyle.styled.js"
import { Outlet } from "react-router-dom"
import { getTasks } from "../../api/tasks.js"
import { ErrorMessage, Loader } from "./mainpage.styled.js"
import { useUserContext } from "../../context/useUserContext.js"

export const MainPage = () => {

  const {user} = useUserContext()

    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

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
        getTasks(user.token)
        .then((res) => {
          setCards(res.tasks)
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        })
        .finally (() => {
          setIsLoading(false)
        })
      }, [user.token])

    return (
    <Wrapper>
      <Header addCard={addCard}/>
      {isLoading ? <Loader>Loading...</Loader> : <Main cards={cards}/>}
      <ErrorMessage>{error}</ErrorMessage>
      <Outlet/>
    </Wrapper>
    )
}