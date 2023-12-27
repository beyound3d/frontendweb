const bgAnimation = document.getElementById('bgAnimation');

const numberofColorBoxes= 400;

for(let i=0;i<numberofColorBoxes; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add("colorBox");
    bgAnimation.append(colorBox)
}
