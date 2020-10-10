function openCloseModal(){
    let parent = document.querySelector('.main-modal');
    let clickElem = document.querySelectorAll('.st0');

    for(let i = 0; i < clickElem.length; i++){
        clickElem[i].onclick = function (){
            parent.classList.toggle('md-open')
        }
    }
}
openCloseModal();



