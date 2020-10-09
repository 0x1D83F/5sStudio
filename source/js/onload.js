window.addEventListener('load', () => {
    const first = document.querySelectorAll('.seven-item');
    const wrapper = document.querySelectorAll('.seven-wrap');
    const video_svg = document.querySelector('.m-link-svg svg path');
    const mainVideo = document.querySelector('.main-video');

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
    }, 3000);

});
