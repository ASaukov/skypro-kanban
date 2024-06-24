import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import "./App.css";
import { useEffect, useState } from "react";
import { cardList } from "./data.js";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";

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
