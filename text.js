transitionElements.forEach(item => {
    item.classList.add('video-change-page')
    setTimeout(() => {
        document.querySelectorAll('.video-change-page').forEach(i => {
            i.classList.remove('video-change-page')
        })
    }, 3000);
})

allMainHeaders.forEach(item => {
    item.classList.add('headers-change-page');
    setTimeout(() => {
        document.querySelectorAll('.headers-change-page').forEach(i => {
            i.classList.remove('headers-change-page')
        })
    }, 3000);
})

