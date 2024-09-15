const apiUrl = "https://wedev-api.sky.pro/api/kanban/";

export const getTasks = async (token) => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  return response.json();
};

export const changeTask = async (token, id, editTask) => {
  const response = await fetch(apiUrl + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      editTask,
  ),
  });
  if (!response.ok) {
    throw new Error("Не удается изменить данные");
  }
  return response.json();
};

export const deleteTask = async (token, id) => {
  const response = await fetch(apiUrl + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось удалить задачу");
  }
  return response.json();
};
