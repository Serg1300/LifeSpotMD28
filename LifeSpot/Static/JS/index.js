﻿
let session = new Map();
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);

function handleSession() {    
    session.set("startDate", new Date().toLocaleString())    
    session.set("userAgent", window.navigator.userAgent)
}
function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}




function contentFilter(inputString) {
    
    let elements = document.getElementsByClassName('video-container');
    
    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector('h3').innerText;
        
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {           
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
function inputData() {
    return contentFilter(document.getElementsByTagName('input')[0].value.toLowerCase());
}
