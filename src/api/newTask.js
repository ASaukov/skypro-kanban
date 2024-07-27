export const addTask = async (token, task) => {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(
            task
        )
    }) 
    if(!response.ok) {
        throw new Error ("Не удалость добавить задачу")
    }
    return response.json()
} 