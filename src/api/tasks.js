const apiUrl = "https://wedev-api.sky.pro/api/kanban"

export const getTasks = async(token) => {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(!response.ok) {
        throw new Error("Не удалось загрузить данные, попробуйте позже")
    }
    return response.json()
}