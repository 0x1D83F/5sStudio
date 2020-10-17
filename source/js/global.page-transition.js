function pageTransitions(event){
    event.preventDefault();
    const transitionElements = document.querySelectorAll('.page-retransnform');
    const allMainHeaders = document.querySelectorAll('.seven-item');
    const playbtnOpacity = document.querySelectorAll('.m-btn-link')
    const infoOpacity = document.querySelectorAll('.lm-info');
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
    reTransform(playbtnOpacity, 'op-none', 10000 )
    reTransform(infoOpacity, 'op-none', 10000 )
}
document.addEventListener('click', pageTransitions)