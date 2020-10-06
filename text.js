setTimeout(() => {
    item.style.transform = `translateY(-100%)`
    setTimeout(() => {
        item.style.transform = `translateY(0%)`
    }, 100);
}, index * 25);


function startAnimationText() {
    return new Promise(resolve => {
        setTimeout(() => {
            item.style.transform = `translateY(-100%)`
            resolve()
        }, index * 35);
    })
        .then(() => {
            setTimeout(() => {
                item.style.transform = `translateY(0%)`
            }, 100);
        })
}
startAnimationText();




async function startAnimationText() {
    return await new Promise(resolve => {
        setTimeout(() => {
            item.style.transform = `translateY(-100%)`
            resolve()
        }, index * 35);
    })
    setTimeout(() => {
        item.style.transform = `translateY(0%)`
    }, 100);
}
startAnimationText();