import { useEffect, useState } from "react";
import { Header } from "../../components/Header/header.jsx";
import { Main } from "../../components/Main/main.jsx";
import { Wrapper } from "../../globalStyle.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";
import { ErrorMessage, Loader } from "./mainpage.styled.js";
import { useUserContext } from "../../context/UserContext/useUserContext.js";
import { useTaskContext } from "../../context/TaskContext/useTaskContext.js";

export const MainPage = () => {
  const { user } = useUserContext();

  const {tasks, setTasks} = useTaskContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks(user.token)
      .then((res) => {
        setTasks(res.tasks);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user.token]);

  return (
    <Wrapper>
      <Header  />
      {isLoading ? <Loader>Loading...</Loader> : <Main cards={tasks} />}
      <ErrorMessage>{error}</ErrorMessage>
      <Outlet />
    </Wrapper>
  );
};
