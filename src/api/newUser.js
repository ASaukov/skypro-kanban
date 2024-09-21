const apiUrl = "https://wedev-api.sky.pro/api/user"

export const getUser = async({login, name, password}) => {
const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
        login,
        name,
        password,
    })
})
if(response.status === 400) {
    throw new Error("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.")
}
if(!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
}
return response.json()
}