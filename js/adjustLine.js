const adjustLine = ([from, to], animationDelay = 0) => {

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
    line.setAttribute("class", "bg-blue-200")

    const transforms = ["-webkit-transform", "-moz-transform", "-ms-transform", "-o-transform", "-transform"]
    transforms.forEach(trans =>
        line.style[trans] = "rotate(" + ANG + "deg)"
    )

    line.style.top = top + "px";
    line.style.left = left + "px";
    line.style.height = H + "px";

    if (animationDelay > 0){
        line.style.animation = `fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${animationDelay}s both`

    }

    from.parentElement.prepend(line)
}

