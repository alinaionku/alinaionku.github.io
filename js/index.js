////////////////////////////////// Шапка
let header = this.document.querySelector('header');
let scroll_prev = this.scrollY;
let beginProzrachnost = 100;

if(this.scrollY > beginProzrachnost){
    prozrachnost = (this.scrollY-beginProzrachnost)/100;
    header.style.background = 
    "linear-gradient(-90deg,hsla(223, 87.8%, 32.2%,"+prozrachnost+
    "), hsla(223, 87.8%, 32.2%,"+prozrachnost+
    "), hsla(223, 84.7%, 23.1%,"+prozrachnost+
    "), hsla(223, 84.7%, 23.1%,"+prozrachnost;
}
window.addEventListener("scroll", function(){
    if(this.scrollY > beginProzrachnost && this.scrollY > scroll_prev){
        prozrachnost = (this.scrollY-beginProzrachnost)/100;
        header.style.background = 
        "linear-gradient(-90deg,hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost;
    }
    else if(this.scrollY < scroll_prev ){
        prozrachnost = (this.scrollY-beginProzrachnost)/100;
        if(prozrachnost < 0.15){
            prozrachnost = 0;
        }
        header.style.background = 
        "linear-gradient(-90deg,hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost;
    } 
    scroll_prev = this.scrollY;
})
////////////////////////////////// Шапка

////////////////////////////////// Затемнение "Портфолио"
let portfolio = document.querySelector(".portfolio");
let portfolio_begin = portfolio.offsetTop;
let portfolio_end = portfolio.offsetTop + portfolio.clientHeight;

let start_darkness = portfolio_begin - window.innerHeight/3;
let end_darkness = start_darkness + (portfolio_end - portfolio_begin)/4;
let start_whitness = portfolio_begin + (portfolio_end - portfolio_begin)*3/4;
let end_whitness = portfolio_end + window.innerHeight/3;


window.addEventListener("scroll", function(){
    if ((this.scrollY) > start_darkness && (this.scrollY < start_whitness)){
        this.document.body.classList.add("body-dark");
    };
    if ((this.scrollY > start_whitness) || (this.scrollY < start_darkness)){
        this.document.body.classList.remove("body-dark");
    };

})
////////////////////////////////// Затемнение "Портфолио"

////////////////////////////////// Форма
// Это отвечает за увеличение размера textarea (где написано "Ваше сообщение")
document.getElementById('textArea').style.height = '2rem';
document.getElementById('textAreaMobile').style.height = '1rem';
document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.getElementById('textArea');
    var textAreaMobile = document.getElementById('textAreaMobile');

    textArea.addEventListener('input', function() {
        if(this.scrollHeight < 70){
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/1.9) + 'px';
        } else if(this.scrollHeight < 120) {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/1.2) + 'px';
        }
        else {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        }
        if (this.value == ""){
            this.style.height = "2rem";
        }
    });

    textAreaMobile.addEventListener('input', function() {
        if(this.scrollHeight < 50){
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/1.6) + 'px';
        } else if(this.scrollHeight < 100) {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/0.8) + 'px';
        }
        else {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        }
        if (this.value == ""){
            this.style.height = "1rem";
        }
    });
});

//селектор выбора

function toggleOptions() {
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
}

function selectOption(value) {
    const visibleText = document.querySelector('.visible-text');
    visibleText.textContent = ` ${value}`;
    visibleText.style.opacity = 1;
    
    const preferredCommunicationMethod = document.querySelector('#preferredCommunicationMethod');
    preferredCommunicationMethod.value = `${value}`;
}

function toggleOptionsMobile() {
    const optionsContainerMobile = document.querySelector('.options-container-mobile');
    optionsContainerMobile.style.display = optionsContainerMobile.style.display === 'none' ? 'block' : 'none';
}

function selectOptionMobile(value) {
    const visibleTextMobile = document.querySelector('.visible-text-mobile');
    visibleTextMobile.textContent = ` ${value}`;
    visibleTextMobile.style.opacity = 1;

    const preferredCommunicationMethodMobile = document.querySelector('#preferredCommunicationMethodMobile');
    preferredCommunicationMethodMobile.value = `${value}`;
}
////////////////////////////////// Форма

async function communicationForm() {
    let name = document.forms['communication']['name'].value;
    let email = document.forms['communication']['email'].value;
    let phone = document.forms['communication']['phone'].value;
    let message = document.forms['communication']['message'].value;
    let preferredCommunicationMethod = document.forms['communication']['preferredCommunicationMethod'].value;

    const url = 'https://kalitka-designer.ru/telegram.php';
    const params = {
        name:       `${name}`,
        email:      `${email}`,
        phone:      `${phone}`,
        message:    `${message}`,
        preference: `${preferredCommunicationMethod}`,
    };
    
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryParams}`;
    let response = await fetch(fullUrl);
    // .then
    if (response.ok){
        alert ("Сообщение отправлено!")
    } else{
        alert ("Произошла ошибка")
    }
};

async function communicationFormMobile() {
    let name = document.forms['communicationMobile']['name'].value;
    let email = document.forms['communicationMobile']['email'].value;
    let phone = document.forms['communicationMobile']['phone'].value;
    let message = document.forms['communicationMobile']['message'].value;
    let preferredCommunicationMethod = document.forms['communicationMobile']['preferredCommunicationMethod'].value;

    // const url = 'https://alinaionku.github.io/telegram.php';
    const url = 'https://kalitka-designer.ru/telegram.php';
    const params = {
        name:       `${name}`,
        email:      `${email}`,
        phone:      `${phone}`,
        message:    `${message}`,
        preference: `${preferredCommunicationMethod}`,
    };
    // let text = `<b>Имя: ${params.name}</b>
    // <s>Почта: ${params.email}</s>
    // <u>Телефон: ${params.phone}</u>
    // <i>Сообщение: ${params.message}</i>
    // <b>Способ связи: ${params.preference}</b>`
    
    // const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${text}`;
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryParams}`;
    let response = await fetch(fullUrl);
    // .then
    if (response.ok){
        alert ("Сообщение отправлено!")
    } else{
        alert ("Произошла ошибка")
    }
    // console.log(url)
    // console.log(phone);
    // console.log(response);
    console.log(fullUrl);

    // console.log(text)
    // console.log("ok")


    // let response = fetch('https://alinaionku.github.io/telegram.php', {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'},
    //     body: JSON.stringify(name, email, phone, message, preferredCommunicationMethod)});
    // if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // // получаем тело ответа (см. про этот метод ниже)
    // let json = response.json();
    // } else {
    // alert("Ошибка HTTP: " + response.status);
    // }

    // console.log(JSON.stringify(name, email, phone, message, preferredCommunicationMethod))
};