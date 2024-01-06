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
        console.log(this.scrollHeight)
        console.log(this.style.height)
        if(this.scrollHeight < 70){
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/1.9) + 'px';
        } else if(this.scrollHeight < 120) {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight/1) + 'px';
        }
        else {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight - 50) + 'px';
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
}

////////////////////////////////// Форма

