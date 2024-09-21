import { Link, useNavigate, useParams } from "react-router-dom";
import { Calendar } from "../Calendar/calendar";
import { routes } from "../../router/routes";
import * as S from "./popbrowse.styled";

import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { useEffect, useState } from "react";
import { statusList } from "../../data";
import { changeTask, deleteTask } from "../../api/tasks";
import { useUserContext } from "../../context/UserContext/useUserContext";

export const PopBrowse = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useTaskContext();
  const { user } = useUserContext();
  const nav = useNavigate();
  let openTask = null;
  if (tasks.length) {
    openTask = tasks.find((task) => task._id === id);
  }

  console.log(tasks);
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(
    openTask ? new Date(openTask.date) : ""
  );
  const [error, setError] = useState("");
  const [editTask, setEditTask] = useState({
    title: openTask?.title,
    topic: openTask?.topic,
    status: openTask?.status,
    description: openTask?.description,
  });

  useEffect(() => {
    setEditTask({
      title: openTask?.title,
      topic: openTask?.topic,
      status: openTask?.status,
      description: openTask?.description,
    });
  }, [openTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const editCart = async (e) => {
    e.preventDefault();
    if (editTask.description.trim() === "") {
      setError("Заполните описание задачи");
      return;
    }
    try {
      await changeTask(user.token, id, { ...editTask, date: selected }).then(
        (res) => {
          setTasks(res.tasks);
          nav(routes.main);
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteCard = async (e) => {
    e.preventDefault();
    await deleteTask(user.token, id)
      .then((res) => {
        setTasks(res.tasks);
        nav(routes.main);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onChangeDate = (e) => {
    if (!isEdit) return;
    setSelected(e);
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи: {editTask.title}</S.PopBrowseTtl>
              <S.CategoriesTheme $color={editTask.topic}>
                <p> {editTask.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusP>Статус</S.StatusP>
              {!isEdit ? (
                <S.StatusThemeTask>
                  <p>{editTask.status}</p>
                </S.StatusThemeTask>
              ) : (
                <S.StatusThemes>
                  {statusList.map((status, i) => (
                    <S.StatusTheme key={i}>
                      <input
                        type="radio"
                        onChange={handleChange}
                        id={`radio ${i}`}
                        name="status"
                        value={status}
                        checked={editTask.status === status}
                      />
                      <label htmlFor={`radio ${i}`}>{status}</label>
                    </S.StatusTheme>
                  ))}
                </S.StatusThemes>
              )}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  {!isEdit ? (
                    <S.FormBrowseArea
                      value={editTask.description}
                      placeholder="Описание задачи"
                    ></S.FormBrowseArea>
                  ) : (
                    <S.FormBrowseAreaEdit
                      onChange={handleChange}
                      name="description"
                      value={editTask.description}
                      // readOnly={!isEdit}
                      placeholder="Введите описание задачи..."
                    ></S.FormBrowseAreaEdit>
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selected={selected} setSelected={onChangeDate} />
            </S.PopBrowseWrap>
            {!isEdit ? (
              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBrowse onClick={handleToggleEdit}>
                    <a href="#">Редактировать задачу</a>
                  </S.BtnBrowse>
                  <S.BtnBrowse onClick={deleteCard}>
                    <a href="#">Удалить задачу</a>
                  </S.BtnBrowse>
                </S.BtnGroup>
                <S.BtnClose>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnClose>
              </S.PopBrowseBtnBrowse>
            ) : (
              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnEditSave onClick={editCart}>
                    <a href="#">Сохранить</a>
                  </S.BtnEditSave>
                  <S.BtnEdit onClick={handleToggleEdit}>
                    <a href="#">Отменить</a>
                  </S.BtnEdit>
                  <S.BtnEdit onClick={deleteCard} id="btnDelete">
                    <a href="#">Удалить задачу</a>
                  </S.BtnEdit>
                </S.BtnGroup>
                <S.BtnClose>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnClose>
              </S.PopBrowseBtnEdit>
            )}
          </S.PopBrowseContent>
          {error && <S.Error>{error}</S.Error>}
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
