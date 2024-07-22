export const addTask = async (token, {title, topic, status,description, date}) => {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        })
    }) 
    if(!response.ok) {
        throw new Error ("Не удалость добавить задачу")
    }
    return response.json()
} 