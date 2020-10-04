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

