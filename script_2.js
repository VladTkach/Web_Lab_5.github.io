var side = 15
var height = 10
const mainText = document.querySelector(".main__text")

addAreaParallelogram(side, height, mainText)

function addAreaParallelogram(side, height, block){
    var area = side * height
    block.appendChild(document.createTextNode("Area of the parallelogram = " + area.toString()))
}