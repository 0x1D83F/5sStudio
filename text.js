async function delay() {
    await setTimeout(() => {
        wrapper.style.cssText = `
            transform: translateY(80px);
         `
    }, 1000);
    await setTimeout(() => {
        wrapper.style.cssText = `
            transform: translateY(40px);
         `
    }, 1900);
    setTimeout(() => {
        wrapper.style.cssText = `
            transform: translateY(0px);
         `
    }, 2900);
}
delay()

















function delay(value,ms) {
    return new Promise(resolve => resolve(setTimeout(() => {
        wrapper.style.cssText = `
            transform: translateY(${value}px);
         `
    }, ms)))
}

delay(80, 1000)
delay(40, 1900)
delay(0, 2900)