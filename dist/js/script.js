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





