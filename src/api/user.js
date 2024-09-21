const apiUrl = "https://wedev-api.sky.pro/api/user/login"

export const signIn = async({login, password}) => {
    const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    });
    if(response.status === 400) {
        throw new Error("Веденные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа")
    }
    if(!response.ok) {
        throw new Error("Не удалось загрузить данные, попробуйте позже")
    }
    return response.json()
}