const getElement = id => document.getElementById(id);
const getElements = (...id) => id.map(e => getElement(e))


const adjustLine = ([from, to]) => {

    const fT = from.offsetTop + from.offsetHeight / 2;
    const tT = to.offsetTop + to.offsetHeight / 2;
    const fL = from.offsetLeft + from.offsetWidth / 2;
    const tL = to.offsetLeft + to.offsetWidth / 2;

    const CA = Math.abs(tT - fT);
    const CO = Math.abs(tL - fL);
    const H = Math.sqrt(CA * CA + CO * CO);
    let ANG = 180 / Math.PI * Math.acos(CA / H);

    let top = fT > fT ?
        (tT - fT) / 2 + fT :
        (fT - tT) / 2 + tT

    const left = tL > fL ?
        (tL - fL) / 2 + fL :
        (fL - tL) / 2 + tL

    if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
        ANG *= -1;
    }
    top -= H / 2;

    const line = document.createElement("LINE")
    line.setAttribute("class", "line")

    const transforms = ["-webkit-transform", "-moz-transform", "-ms-transform", "-o-transform", "-transform"]
    transforms.forEach(trans =>
        line.style[trans] = 'rotate(' + ANG + 'deg)'
    )
    line.style.top = top + 'px';
    line.style.left = left + 'px';
    line.style.height = H + 'px';

    from.parentElement.prepend(line)
}

window.addEventListener("resize", () => {
    if(boxes){
        const allLines = document.querySelectorAll("LINE")
        allLines.forEach(l => l.remove())
        for (let i = 0; i < boxes.length-1; i++){
            adjustLine(getElements(boxes[i], boxes[i+1]))
        }
    }
})