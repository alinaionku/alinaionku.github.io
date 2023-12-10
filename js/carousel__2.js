const repeat2 = false;
const noArrows2 = false;
const noBullets2 = false;

const container2 = document.querySelector('#slider-container__illustrator');
const container2_mobile = document.querySelector('#slider-container-mobile__illustrator');
var slide2 = document.querySelectorAll('.slider-single__2');
var slideTotal2 = slide2.length - 1;
var slideCurrent2 = -1;

function initBullets2() {
    if (noBullets2) {
        return;
    }
    const bulletContainer2 = document.createElement('div');
    bulletContainer2.classList.add('bullet-container')
    bulletContainer2.id = "bullet-container__2"
    slide2.forEach((elem, i) => {
        const bullet2 = document.createElement('div');
        bullet2.classList.add('bullet')
        bullet2.id = `bullet-index-${i}`
        bullet2.addEventListener('click', () => {
            goToIndexSlide2(i);
        })
        bulletContainer2.appendChild(bullet2);
        elem.classList.add('proactivede');
    })
    container2.appendChild(bulletContainer2);
    container2_mobile.appendChild(bulletContainer2);
}

function initArrows2() {
    if (noArrows2) {
        return;
    }
    const leftArrow2 = document.createElement('a')
    const iLeft2 = document.createElement('i');
    iLeft2.classList.add('fa')
    iLeft2.classList.add('fa-arrow-left')
    leftArrow2.classList.add('slider-left')
    leftArrow2.textContent = "<"
    leftArrow2.appendChild(iLeft2)
    leftArrow2.addEventListener('click', () => {
        slideLeft2();
    })
    const rightArrow2 = document.createElement('a')
    const iRight2 = document.createElement('i');
    iRight2.classList.add('fa')
    iRight2.classList.add('fa-arrow-right')
    rightArrow2.classList.add('slider-right')
    rightArrow2.textContent = ">"
    rightArrow2.appendChild(iRight2)
    rightArrow2.addEventListener('click', () => {
        slideRight2();
    })
    container2.appendChild(leftArrow2);
    container2.appendChild(rightArrow2);
    container2_mobile.appendChild(leftArrow2);
    container2_mobile.appendChild(rightArrow2);
}

function slideInitial2() {
    initBullets2();
    initArrows2();
    setTimeout(function () {
        slideRight2();
    }, 500);
}

function updateBullet2() {
    if (!noBullets2) {
        // закладка bullet-container ищется не тот
        document.querySelector('#bullet-container__2').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent2) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat2();
}

function checkRepeat2() {
    if (!repeat2) {
        if (slideCurrent2 === slide2.length - 1) {
            slide2[0].classList.add('not-visible');
            slide2[slide2.length - 1].classList.remove('not-visible');
            if (!noArrows2) {
                // document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (slideCurrent2 === 0) {
            slide2[slide2.length - 1].classList.add('not-visible');
            slide2[0].classList.remove('not-visible');
            if (!noArrows2) {
                // document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            slide2[slide2.length - 1].classList.remove('not-visible');
            slide2[0].classList.remove('not-visible');
            if (!noArrows2) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight2() {
    if (slideCurrent2 < slideTotal2) {
        slideCurrent2++;
    } else {
        slideCurrent2 = 0;
    }

    if (slideCurrent2 > 0) {
        var preactiveSlide2 = slide2[slideCurrent2 - 1];
    } else {
        var preactiveSlide2 = slide2[slideTotal2];
    }
    var activeSlide2 = slide2[slideCurrent2];
    if (slideCurrent2 < slideTotal2) {
        var proactiveSlide2 = slide2[slideCurrent2 + 1];
    } else {
        var proactiveSlide2 = slide2[0];

    }

    slide2.forEach((elem) => {
        var thisSlide2 = elem;
        if (thisSlide2.classList.contains('preactivede')) {
            thisSlide2.classList.remove('preactivede');
            thisSlide2.classList.remove('preactive');
            thisSlide2.classList.remove('active');
            thisSlide2.classList.remove('proactive');
            thisSlide2.classList.add('proactivede');
        }
        if (thisSlide2.classList.contains('preactive')) {
            thisSlide2.classList.remove('preactive');
            thisSlide2.classList.remove('active');
            thisSlide2.classList.remove('proactive');
            thisSlide2.classList.remove('proactivede');
            thisSlide2.classList.add('preactivede');
        }
    });
    preactiveSlide2.classList.remove('preactivede');
    preactiveSlide2.classList.remove('active');
    preactiveSlide2.classList.remove('proactive');
    preactiveSlide2.classList.remove('proactivede');
    preactiveSlide2.classList.add('preactive');

    activeSlide2.classList.remove('preactivede');
    activeSlide2.classList.remove('preactive');
    activeSlide2.classList.remove('proactive');
    activeSlide2.classList.remove('proactivede');
    activeSlide2.classList.add('active');

    proactiveSlide2.classList.remove('preactivede');
    proactiveSlide2.classList.remove('preactive');
    proactiveSlide2.classList.remove('active');
    proactiveSlide2.classList.remove('proactivede');
    proactiveSlide2.classList.add('proactive');

    updateBullet2();
}

function slideLeft2() {
    if (slideCurrent2 > 0) {
        slideCurrent2--;
    } else {
        slideCurrent2 = slideTotal2;
    }

    if (slideCurrent2 < slideTotal2) {
        var proactiveSlide2 = slide2[slideCurrent2 + 1];
    } else {
        var proactiveSlide2 = slide2[0];
    }
    var activeSlide2 = slide2[slideCurrent2];
    if (slideCurrent2 > 0) {
        var preactiveSlide2 = slide2[slideCurrent2 - 1];
    } else {
        var preactiveSlide2 = slide2[slideTotal2];
    }
    slide2.forEach((elem) => {
        var thisSlide2 = elem;
        if (thisSlide2.classList.contains('proactive')) {
            thisSlide2.classList.remove('preactivede');
            thisSlide2.classList.remove('preactive');
            thisSlide2.classList.remove('active');
            thisSlide2.classList.remove('proactive');
            thisSlide2.classList.add('proactivede');
        }
        if (thisSlide2.classList.contains('proactivede')) {
            thisSlide2.classList.remove('preactive');
            thisSlide2.classList.remove('active');
            thisSlide2.classList.remove('proactive');
            thisSlide2.classList.remove('proactivede');
            thisSlide2.classList.add('preactivede');
        }
    });

    preactiveSlide2.classList.remove('preactivede');
    preactiveSlide2.classList.remove('active');
    preactiveSlide2.classList.remove('proactive');
    preactiveSlide2.classList.remove('proactivede');
    preactiveSlide2.classList.add('preactive');

    activeSlide2.classList.remove('preactivede');
    activeSlide2.classList.remove('preactive');
    activeSlide2.classList.remove('proactive');
    activeSlide2.classList.remove('proactivede');
    activeSlide2.classList.add('active');

    proactiveSlide2.classList.remove('preactivede');
    proactiveSlide2.classList.remove('preactive');
    proactiveSlide2.classList.remove('active');
    proactiveSlide2.classList.remove('proactivede');
    proactiveSlide2.classList.add('proactive');

    updateBullet2();
}

function goToIndexSlide2(index) {
    const sliding2 = (slideCurrent2 > index) ? () => slideRight2() : () => slideLeft2();
    while (slideCurrent2 !== index) {
        sliding2();
    }
}

slideInitial2();