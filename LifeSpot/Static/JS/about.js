

function handlerUser() {
    let userAgent = new Map();
    userAgent.set("startDate", new Date().toLocaleString());
    userAgent.set('nameUser', prompt("Пожалуйста, введите ваше имя"));
    if (userAgent.get("nameUser") == '') {
        return
    }
    userAgent.set('textUser', prompt("Пожалуйста, введите ваш коментарий"));
    if (userAgent.get("textUser") == '') {
        return
    }
    userLog(userAgent);
}
const userLog = (userAgent) => {
    const userName = document.getElementById("nameUs");
    userName.innerHTML += `<p>Имя: ${userAgent.get("nameUser")}, Дата коментария: ${userAgent.get("startDate")}.</p>` + `<p>Коментарий пользователя: ${userAgent.get("textUser")}</p>`;
}
