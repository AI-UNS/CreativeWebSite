let bars = document.querySelectorAll('.statis__content-bar');

for(let i = 0; i < bars.length; i++){
    bars[i].style = `width: ${90 + i * 5}%;`;
    // console.log(bars[i].style = `width: ${100 - i * 5}%;`)
}