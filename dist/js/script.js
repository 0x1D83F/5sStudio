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
window.addEventListener('load', () => {
    function preloader(){
        const preload = document.querySelector('.preloader');
        setTimeout(() => {
            preload.style.cssText = `
                display: none;
            `
        }, 1500);
    }
    preloader();

    function checkWindowWidth(val){
        const userWindow = window.clientWidth || document.documentElement.clientWidth;
        const elem = document.querySelector('.main-modal ');
        if(userWindow < 1000){
            document.querySelector('.menu-item a').textContent = 'resTORAN'
            elem.classList.remove('transform-top-center');
            elem.classList.add('_mobile-main_modal')
        }
    }
    checkWindowWidth();

    function sevenBlockAnimation(){
        const first = document.querySelectorAll('.seven-item');
        const wrapper = document.querySelectorAll('.seven-wrap');
        const video_svg = document.querySelector('.m-link-svg svg path');
        const mainVideo = document.querySelector('.main-video');
        const header = document.querySelector('.header');
        const logo = document.querySelector('.header-logo-svg');

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

        delay(80, 2900)
        delay(40, 4000)
        delay(0, 5000)

        // delay(80, 1000)
        // delay(40, 1900)
        // delay(0, 2900)

        setTimeout(() => {
            video_svg.style.cssText = `
            stroke-dashoffset: 0px;
            `
            mainVideo.classList.add('m-video-trans-off')

            header.classList.add('h-def')
            logo.style.cssText = `bottom: 15px;`
        }, 5100); // 3000
    }
    sevenBlockAnimation();



});
;
document.addEventListener('scroll', (e) => {
    function infoBlockRotateScroll(){
        if(pageYOffset > 400) {
            document.querySelector('.header-stroke').style.bottom = `0`
        }else{
            document.querySelector('.header-stroke').style.bottom = `100%`
        }

        const lmVideo = document.querySelector('.lm-video');
        const infoBlock = document.querySelector('.learn-more');

        let infoBlockDistance = infoBlock.getBoundingClientRect().top;
        let screenHeight = window.innerHeight || document.documentElement.clientHeight;
        let screenWidth = window.innerWidth || document.documentElement.clientWidth;
        let denominator = 1.1;
        let calcResDist = screenHeight / denominator;

        if(infoBlockDistance <= calcResDist){
            lmVideo.classList.add('m-video-trans-off')
        }
    }
    infoBlockRotateScroll();



    function parallaxVideo(){
        const block1 = document.querySelector('.block__mod-1');
        const block4 = document.querySelector('.block__mod-4');
        const block5 = document.querySelector('.block__mod-5');

        const screenHeight = window.innerHeight || document.documentElement.clientHeight;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;

        let top = block1.getBoundingClientRect().top;
        let top2 = block4.getBoundingClientRect().top;
        let top3 = block5.getBoundingClientRect().top;

        function parallaxDown(element){
            const elem = document.querySelector(element).getBoundingClientRect().top;
            const speed = document.querySelector(element).getAttribute('data-speed');
            const screenHeight = document.documentElement.clientHeight;

            let d = (pageYOffset + elem) - screenHeight;
            let scroll = window.pageYOffset;
            let res = (scroll - d) / speed;

            document.querySelector(element).style.cssText = `transform: translate3d(0px, ${res}px, 0px);`
        }

        function parallaxTop(element){
            const speed = document.querySelector(element).getAttribute('data-speed');
            const a = window.pageYOffset,
                b = document.querySelector(element).getBoundingClientRect().top,
                c = a + b,
                d = c - 100,
                e = ((d - a) / 2) / speed;

            document.querySelector(element).style.cssText = `transform: translate3d(0px, ${e}px, 0px);`
        }
        function noTransform(element){
            document.querySelector(element).classList.add('m-video-trans-off')
        }


        if(top <= screenHeight && top >= 0 && screenWidth >= 1000){
            noTransform('.g-project-elem-1')
            noTransform('.g-project-elem-2')
            parallaxDown('.block__mod-1');
            parallaxTop('.block__mod-2');
        }
        if(top2 <= screenHeight && top2 >= 0 && screenWidth >= 1000){
            parallaxTop('.block__mod-3');
            parallaxDown('.block__mod-4');
        }
        if(top3 <= screenHeight / 1.5){
            noTransform('.g-project-elem-3')
        }
    }
    parallaxVideo();

})

;
function headerLangSwitcher(val){
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

}
headerLangSwitcher();

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
function openCloseModal() {
    const parent = document.querySelector('.main-modal');
    const clickElem = document.querySelectorAll('.st0');
    const body = document.querySelector('.body');


    for (let i = 0; i < clickElem.length; i++) {
        clickElem[i].onclick = function () {
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
        if(counter > 4) counter = 0;
        body.classList.add(`theme-${counter}`);
    });
}
globalColorSwitcher();



;
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
    const playbtnOpacity = document.querySelectorAll('.m-btn-link')
    const infoOpacity = document.querySelectorAll('.lm-info');
    const projectsVideo = document.querySelectorAll('.project_page-tr');
    const projectsBlock = document.querySelectorAll('.g-project-block');
    const projectHeader = document.querySelectorAll('.prj-header h2')
    const footer = document.querySelectorAll('.footer');
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

    reTransform(transitionElements, 'video-change-page', 10000 )
    reTransform(allMainHeaders, 'headers-change-page', 10000 )
    reTransform(projectsVideo, 'video-change-page', 10000 )

    reTransform(playbtnOpacity, 'op-none', 10000 )
    reTransform(infoOpacity, 'op-none', 10000 )
    reTransform(projectsBlock, 'op-none', 10000 )
    reTransform(projectHeader, 'op-none', 10000 )
    reTransform(footer, 'op-none', 10000 )

}
document.addEventListener('click', pageTransitions)

document.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target.className)
});
function runningString(){
    function createRunningString() {
        const boxes = document.querySelectorAll('.g-project__words-moving');

        boxes.forEach(elem => {
            const html = `<span class="th-color font-default">${elem.querySelector('.words-header').innerText}</span>`.repeat(10);
            elem.querySelectorAll('.running-string-wrapp').forEach(block => block.innerHTML = html);
        });


    }
    createRunningString();

    function startVideo() {
        document.querySelectorAll('.g-project-link')
            .forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.children[0].children[0].children[1].play();
                })
                item.addEventListener('mouseleave', () => {
                    item.children[0].children[0].children[1].pause();
                })

            })
    }
    startVideo();

    function createVideoModalsOnClick(){
        const modalGlobal = document.querySelector('.works-modal-video');
        const worksModal = document.querySelector('.works-modal');
        const workLink = document.querySelector('.works-link');

        let elem = document.querySelectorAll('.g-project__hover-effect ')
        elem.forEach((item,index) => {
            item.addEventListener('click', () => {
                let link = item.previousElementSibling.children[1].children[0].getAttribute('src');
                let createVideo = document.createElement('video');
                createVideo.classList.add('video-modal-temp')
                createVideo.setAttribute('loop', '');
                createVideo.setAttribute('src', `${link}`);
                modalGlobal.append(createVideo)

                worksModal.classList.add('md-open')
                body.classList.add('_lock')

                document.querySelector('.video-modal-temp').play();

            });
        })

        workLink.addEventListener('click', () => {
            modalGlobal.children[0].remove();
            worksModal.classList.remove('md-open')
            body.classList.remove('_lock')
        });
    }
    createVideoModalsOnClick();
}
runningString();

;









