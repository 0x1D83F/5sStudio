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
                item.children[0].children[0].children[0].play();
            })
            item.addEventListener('mouseleave', () => {
                item.children[0].children[0].children[0].pause();
            })

        })
}
startVideo();

function createVideoModals(){
    const modalGlobal = document.querySelector('.works-modal-video');
    const worksModal = document.querySelector('.works-modal');
    const workLink = document.querySelector('.works-link');

    let elem = document.querySelectorAll('.g-project__hover-effect ')
    elem.forEach(item => {
        item.addEventListener('click', () => {
            let link = item.previousElementSibling.children[0].getAttribute('src');
            let createVideo = document.createElement('video');
            createVideo.setAttribute('loop', '');
            createVideo.setAttribute('muted', '');
            createVideo.setAttribute('src', `${link}`);
            modalGlobal.append(createVideo)

            worksModal.classList.add('md-open')
            body.classList.add('_lock')

        });
    })

    workLink.addEventListener('click', () => {
        modalGlobal.children[0].remove();
        worksModal.classList.remove('md-open')
        body.classList.remove('_lock')
    });
}
createVideoModals()











