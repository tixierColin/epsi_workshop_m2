function scrollAnim(element, per) {
    element.innerText = Math.round(per)+"%"

    let w = 0
    let t = setInterval(() => {
        w++;
        if (w >= per) clearInterval(t)
        element.style.width = `calc(${w}% - 10px)`
    }, 7)
}

function normalize(val, min, max){
    // Shift to positive to avoid issues when crossing the 0 line
    if(min < 0){
      max += 0 - min;
      val += 0 - min;
      min = 0;
    }
    // Shift values from 0 - max
    val = val - min;
    max = max - min;
    return Math.max(0, Math.min(1, val / max));
}