const repeat = false;
const noArrows = false;
const noBullets = false;

class carousel{
    constructor(id){
        this.id = id;
        this.container = document.querySelector(id)
        this.slide = this.container.querySelectorAll('.slider-single')
        this.total = this.slide.length -1
        this.current = -1
    }

}

const desktopPoligraph = new carousel('#slider-container__poligraph')
const desktopIllustrator = new carousel('#slider-container__illustrator')
const mobilePoligraph = new carousel('#slider-container-mobile__poligraph');
const mobileIllustrator = new carousel('#slider-container-mobile__illustrator');


function initBullets(carousel) {
    if (noBullets) {
        return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container')
    carousel.slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet')
        bullet.id = `bullet-index-${i}`
        bullet.addEventListener('click', () => {
            goToIndexSlide(i, carousel);
        })
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede');
    })
    carousel.container.appendChild(bulletContainer);
}

function initArrows(carousel) {
    if (noArrows) {
        return;
    }
    const leftArrow = document.createElement('a')
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa')
    iLeft.classList.add('fa-arrow-left')
    leftArrow.classList.add('slider-left')
    leftArrow.textContent = "<"
    leftArrow.appendChild(iLeft)
    leftArrow.addEventListener('click', () => {
        slideLeft(carousel);
    })
    const rightArrow = document.createElement('a')
    const iRight = document.createElement('i');
    iRight.classList.add('fa')
    iRight.classList.add('fa-arrow-right')
    rightArrow.classList.add('slider-right')
    rightArrow.textContent = ">"
    rightArrow.appendChild(iRight)
    rightArrow.addEventListener('click', () => {
        slideRight(carousel);
    })
    carousel.container.appendChild(leftArrow);
    carousel.container.appendChild(rightArrow);
}

function slideInitial(carousel) {
    initBullets(carousel);
    initArrows(carousel);
    setTimeout(function () {
        slideRight(carousel);
    }, 500);
}

function updateBullet(carousel) {
    if (!noBullets) {
        carousel.container.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === carousel.current) {
                elem.classList.add('active');
            }
        })
    }
    checkRepeat(carousel);
}

function checkRepeat(carousel) {
    if (!repeat) {
        if (carousel.current === carousel.slide.length - 1) {
            carousel.slide[0].classList.add('not-visible');
            carousel.slide[carousel.slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                // document.querySelector('.slider-right').classList.add('not-visible')
                document.querySelector('.slider-left').classList.remove('not-visible')
            }
        }
        else if (carousel.current === 0) {
            carousel.slide[carousel.slide.length - 1].classList.add('not-visible');
            carousel.slide[0].classList.remove('not-visible');
            if (!noArrows) {
                // document.querySelector('.slider-left').classList.add('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        } else {
            carousel.slide[carousel.slide.length - 1].classList.remove('not-visible');
            carousel.slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible')
                document.querySelector('.slider-right').classList.remove('not-visible')
            }
        }
    }
}

function slideRight(carousel) {
    if (carousel.current < carousel.total) {
        carousel.current++;
    } else {
        carousel.current = 0;
    }

    if (carousel.current > 0) {
        var preactiveSlide = carousel.slide[carousel.current - 1];
    } else {
        var preactiveSlide = carousel.slide[carousel.total];
    }
    var activeSlide = carousel.slide[carousel.current];
    if (carousel.current < carousel.total) {
        var proactiveSlide = carousel.slide[carousel.current + 1];
    } else {
        var proactiveSlide = carousel.slide[0];

    }

    carousel.slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet(carousel);
}

function slideLeft(carousel) {
    if (carousel.current > 0) {
        carousel.current--;
    } else {
        carousel.current = carousel.total;
    }

    if (carousel.current < carousel.total) {
        var proactiveSlide = carousel.slide[carousel.current + 1];
    } else {
        var proactiveSlide = carousel.slide[0];
    }
    var activeSlide = carousel.slide[carousel.current];
    if (carousel.current > 0) {
        var preactiveSlide = carousel.slide[carousel.current - 1];
    } else {
        var preactiveSlide = carousel.slide[carousel.total];
    }
    carousel.slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
            thisSlide.classList.remove('preactivede');
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
            thisSlide.classList.remove('preactive');
            thisSlide.classList.remove('active');
            thisSlide.classList.remove('proactive');
            thisSlide.classList.remove('proactivede');
            thisSlide.classList.add('preactivede');
        }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    updateBullet(carousel);
}

function goToIndexSlide(index, carousel) {
    const sliding = (carousel.current > index) ? () => slideRight(carousel) : () => slideLeft(carousel);
    while (carousel.current != index) {
        sliding(carousel);
    }
}

slideInitial(desktopPoligraph);
slideInitial(desktopIllustrator);
slideInitial(mobilePoligraph);
slideInitial(mobileIllustrator);

