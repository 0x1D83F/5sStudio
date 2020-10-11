window.addEventListener('scroll', () => {
    if(pageYOffset > 400) {
        document.querySelector('.header-stroke').style.bottom = `0`
    }else{
        document.querySelector('.header-stroke').style.bottom = `100%`
    }
})