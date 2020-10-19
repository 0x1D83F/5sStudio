function createRunningStroke() {
    const place = document.querySelectorAll('.running-string-wrapp');
    const parentText = document.querySelectorAll('.words-moving__calm span');
    const placeLength = place.length;
    console.log(parentText[1].innerHTML)

    for(let i = 0; i < placeLength; i++){
        for(let j = 0; j < 2; j++ ){
            createElement(
                'span',
                ['th-color', 'font-default'],
                parentText[j],
                place[i],
                10)
        }
    }

    function createElement(elem, classNames,defaultItemText, defPlace, county){
        let text = defaultItemText.innerHTML;
        console.log(text)

        for (let j = 0; j < county; j++) {
            let span = document.createElement(`${elem}`);
            span.classList.add(...classNames);
            span.innerHTML = `${text}`;
            defPlace.append(span);
        }
    }
}
createRunningStroke();
