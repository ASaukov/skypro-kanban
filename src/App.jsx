import { Header } from "./components/Header/header.jsx";
import { PopBrowse } from "./components/PopBrowse/popbrowse.jsx";
import { PopNewCard } from "./components/PopNewCard/popnewcard.jsx";
import { PopUser } from "./components/PopUser/popuser.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import { cardList } from "./data.js";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";
import { Main } from "./components/Main/main.jsx";

function App() {
  const [cards, setCards] = useState(cardList)
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
<>
  <GlobalStyle/>
  <Wrapper>
      <Header addCard={addCard}/>
      {isLoading ? <p className="loader">....Loading</p> : <Main cards={cards}/>}
      <PopBrowse/>
      <PopNewCard/>
      <PopUser/>
  </Wrapper>
</>

      
  );
}

export default App;
