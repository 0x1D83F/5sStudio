/* @member Object */
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
});;
const link = document.querySelector('.lang-value-items');
const franceBlock = document.querySelector('.lang-item-fr');
const englishHiddenElem = document.querySelector('.lang-text-full-eng');
const englishShort = document.querySelector('.lang-text-abbr');
const headerLangElem = document.querySelector('.header-lang');
const franceEndElem = document.querySelector('.lang-text-full-fr ');
const userWindow = window.innerWidth || document.documentElement.offsetWidth;

if(userWindow <= 1000 && franceEndElem.classList.contains('lang-active')) headerLangElem.classList.add('lang-translate-active')
else headerLangElem.classList.remove('lang-translate-active')



link.addEventListener('mouseover',() => {
        franceBlock.classList.add('lang-item-fr-null')
        englishHiddenElem.classList.add('eng-visible')
        englishShort.classList.add('eng-no-margin')
})

link.addEventListener('mouseout', () => {
    franceBlock.classList.remove('lang-item-fr-null')
    englishHiddenElem.classList.remove('eng-visible')
    englishShort.classList.remove('eng-no-margin')
})


;
const divWave = () => {
    const parentElement = document.querySelector('.bounce-move');

    const divBounce = () => {
        let element = document.querySelector('.span-bounce');
        const elementText = document.querySelector('.span-bounce').innerHTML;

        for (let i = 0; i < elementText.length; i++) {
            let container = document.querySelector('.bounce-move');
            let div = document.createElement('div');
            container.append(div)
            div.classList.add(`move-elem_${i}`, 'div-bounce-item');
            div.append(elementText[i]);
        }
        element.remove()

        const divList = document.querySelectorAll('.div-bounce-item');
        divList.forEach(item => {
            if (item.innerHTML === ' ') {
                item.style.cssText = `
                    margin-right: 5px;
                `
            }
        })
    }
    divBounce();

    const moveLetters = () => {
        const divList = document.querySelectorAll('.div-bounce-item');
        divList.forEach((item, index) => {
            async function startAnimationText() {
                 await new Promise(resolve => {
                    setTimeout(() => {
                        item.style.transform = `translateY(-100%)`
                        resolve();
                    }, index * 35);
                })
                setTimeout(() => {
                    item.style.transform = `translateY(0%)`
                }, 100);
            }
            startAnimationText();
        })
    }
    parentElement.addEventListener('mouseenter', moveLetters);
}

divWave();


;
window.addEventListener('load', () => {
    const first = document.querySelectorAll('.seven-item');
    const wrapper = document.querySelectorAll('.seven-wrap');
    const video_svg = document.querySelector('.m-link-svg svg path');
    const mainVideo = document.querySelector('.main-video');
    const header = document.querySelector('.header');



    first.forEach(i => i.classList.add('trans-off'))

    function delay(value, ms) {
        return new Promise(resolve => resolve(
            setTimeout(() => {
                wrapper.forEach(item => {
                    item.style.cssText = `
                        transform: translateY(${value}px);
                    `
                })
            }, ms))
        )
    }

    delay(80, 1000)
    delay(40, 1900)
    delay(0, 2900)

    setTimeout(() => {
        video_svg.style.cssText = `
            stroke-dashoffset: 0px;
        `
        mainVideo.classList.add('m-video-trans-off')

        header.classList.add('h-def')
    }, 3000);

});
;
function openCloseModal(){
    const parent = document.querySelector('.main-modal');
    const clickElem = document.querySelectorAll('.st0');
    const body = document.querySelector('.body');

    for(let i = 0; i < clickElem.length; i++){
        clickElem[i].onclick = function (){
            parent.classList.toggle('md-open')
            body.classList.toggle('_lock')
        }
    }


}
openCloseModal();



;
function globalColorSwitcher(){
    let body = document.querySelector('.body');
    let counter = 0;
    body.addEventListener('click', (e) => {
        let wrapper = document.querySelector('.page-main')
        let target = e.target;

        if(target.classList.contains('sw-ignore')) return

        body.classList.remove(`theme-${counter}`)
        counter++;
        if(counter > 4) counter = 0
        body.classList.add(`theme-${counter}`)
    });
}
globalColorSwitcher();



;
window.addEventListener('scroll', () => {
    if(pageYOffset > 400) {
        document.querySelector('.header-stroke').style.bottom = `0`
    }else{
        document.querySelector('.header-stroke').style.bottom = `100%`
    }

    const lmVideo = document.querySelector('.lm-video');
    const infoBlock = document.querySelector('.learn-more');

    let infoBlockDistance = infoBlock.getBoundingClientRect().top;
    let screenHeight = window.innerHeight || document.documentElement.clientHeight;
    let denominator = 1.1;
    let calcResDist = screenHeight / denominator;

    if(infoBlockDistance <= calcResDist){
        lmVideo.classList.add('m-video-trans-off')
    }

});
function mouseMove(e){
    const pulse = document.querySelector('.c-pulse');
    const child_first = document.querySelector('.pulse-f');
    const child_sec = document.querySelector('.pulse-s');
    let posX = e.pageX;
    let posY = e.pageY;
    pulse.style.cssText = `
        left: ${posX}px;
        top: ${posY}px;
    `

    child_first.classList.add('is-pulsed');
    child_sec.classList.add('is-pulsed-2')
    setTimeout(() => {
        child_first.classList.remove('is-pulsed');
        }, 400);
    setTimeout(() => {
        child_sec.classList.remove('is-pulsed-2');
    }, 500);

}

document.addEventListener('click', mouseMove);


;
function pageTransitions(event){
    event.preventDefault();
    const transitionElements = document.querySelectorAll('.page-retransnform');
    const allMainHeaders = document.querySelectorAll('.seven-item');
    let target = event.target;

    if(!target.classList.contains('page-tra')) return

    function reTransform(item,addClass,ms){
        item.forEach(i => {
            i.classList.add(addClass)
        })
        setTimeout(() => {
            let removeElems = document.querySelectorAll(`.${addClass}`);
            removeElems.forEach( item => {
                item.classList.remove(addClass)
            })
        }, ms);

    }

    reTransform(transitionElements, 'video-change-page', 3000 )
    reTransform(allMainHeaders, 'headers-change-page', 3000 )
}
document.addEventListener('click', pageTransitions);










