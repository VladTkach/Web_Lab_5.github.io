const mainTitle = document.querySelector(".main__title")
const rightInfoBar = document.querySelector(".right__aside__info")

document.querySelector(".swap__btn").addEventListener("click", () =>{
    swaptext(mainTitle, rightInfoBar)
})

function swaptext(firstBlock, secondBlock) {
    var temp = firstBlock.innerHTML
    firstBlock.innerHTML = secondBlock.innerHTML
    secondBlock.innerHTML = temp
}