document.addEventListener('scroll', (e) => {
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

    const projectHeader = document.querySelector('.prj-header ');

    let distprojectHeader = projectHeader.getBoundingClientRect().bottom;
    let itemHeight = projectHeader.clientHeight / 2;
    let calc = (screenHeight / 2) + itemHeight;
    console.log(pageYOffset)

    if(distprojectHeader <= calc){
        projectHeader.classList.add('_fix-scroll')
    }


})