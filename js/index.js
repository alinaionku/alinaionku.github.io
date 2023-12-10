// window.addEventListener("scroll", function(){
//     if(this.scrollY > 50)
//     this.document.querySelector('header').classList.add('header__bgc__on')
//     else
//     this.document.querySelector('header').classList.remove('header__bgc__on')
// })

let header = this.document.querySelector('header');
// let header_ul = this.document.querySelector('.header__ul')
let scroll_prev = this.scrollY;
let beginProzrachnost = 100;

// мы можем перезагрузить страницу, где this.scrollY = 500, и получить шапку без подложки
if(this.scrollY > beginProzrachnost){
    prozrachnost = (this.scrollY-beginProzrachnost)/100;
    header.style.background = 
    "linear-gradient(-90deg,hsla(223, 87.8%, 32.2%,"+prozrachnost+
    "), hsla(223, 87.8%, 32.2%,"+prozrachnost+
    "), hsla(223, 84.7%, 23.1%,"+prozrachnost+
    "), hsla(223, 84.7%, 23.1%,"+prozrachnost;
    // console.log(header.style.background)
}
// Этот листенер отвечает за шапку сайта и его пропажу\появление
window.addEventListener("scroll", function(){
    if(this.scrollY > beginProzrachnost && this.scrollY > scroll_prev){
        prozrachnost = (this.scrollY-beginProzrachnost)/100;
        header.style.background = 
        "linear-gradient(-90deg,hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 87.8%, 32.2%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost+
        "), hsla(223, 84.7%, 23.1%,"+prozrachnost;
        // console.log(header.style.background)
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
    // console.log(scroll_prev, this.scrollY, "before")
    scroll_prev = this.scrollY;
    // console.log(scroll_prev, this.scrollY, "after")

    // && this.scrollY < beginProzrachnost
})

// Этот листенер отвечает за затемнение при достижении блока "Портфолио"
let portfolio = document.querySelector(".portfolio");
let portfolio_begin = portfolio.offsetTop;
let portfolio_end = portfolio.offsetTop + portfolio.clientHeight;

let start_darkness = portfolio_begin - window.innerHeight/3;
let end_darkness = start_darkness + (portfolio_end - portfolio_begin)/4;
let start_whitness = portfolio_begin + (portfolio_end - portfolio_begin)*3/4;
let end_whitness = portfolio_end + window.innerHeight/3;


window.addEventListener("scroll", function(){
    // if ((this.scrollY) > start_darkness && (this.scrollY < end_darkness)){
    if ((this.scrollY) > start_darkness && (this.scrollY < start_whitness)){
        // this.document.body.classList.remove("body-main");
        this.document.body.classList.add("body-dark");
        // this.document.body.style.backgroundColor = "rgba(0,9,66," + (this.scrollY - start_darkness)/(end_darkness - start_darkness)*0.6+")"; 
    };
    // if ((this.scrollY > start_whitness) && (this.scrollY < end_whitness)){
    if ((this.scrollY > start_whitness) || (this.scrollY < start_darkness)){
        this.document.body.classList.remove("body-dark");
        // this.document.body.classList.add("body-main");
        // this.document.body.style.backgroundColor = "rgba(0,9,66," + (end_whitness - this.scrollY)/(end_whitness - start_whitness)*0.6+")"; 
    };

})

// Это отвечает за увеличение размера textarea (где написано "Ваше сообщение")
document.getElementById('textArea').style.height = '2rem';
document.addEventListener('DOMContentLoaded', function() {
    var textArea = document.getElementById('textArea');

    textArea.addEventListener('input', function() {
        console.log(this.scrollHeight)
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
    toggleOptions();
  }

//   тыкнуть не туда, чтобы селектор выбора закрылся

