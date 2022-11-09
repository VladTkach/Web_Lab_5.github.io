const block2 = document.querySelector(".left__aside")
const block4 = document.querySelector(".right__aside")
const block5 = document.querySelector(".content")

const rstBTN = document.querySelector(".restart__btn")

window.addEventListener('load', (event) => {
    if (localStorage.getItem("box_2") === "true"){
        block2.classList.add("rightAlign")
        document.querySelector(".checkbox_2").checked = true
    }

    if (localStorage.getItem("box_4") === "true"){
        block4.classList.add("rightAlign")
        document.querySelector(".checkbox_4").checked = true
    }

    if (localStorage.getItem("box_5") === "true"){
        document.querySelector(".main__text").classList.add("rightAlign")
        document.querySelector(".checkbox_5").checked = true
    }

});

rstBTN.addEventListener("click", () => {
    block2.classList.remove("rightAlign")
    block4.classList.remove("rightAlign")
    document.querySelector(".main__text").classList.remove("rightAlign")

    localStorage.setItem("box_2", "false")
    localStorage.setItem("box_4", "false")
    localStorage.setItem("box_5", "false")
})

block2.addEventListener("mouseout", () => {
    console.log("out")
    if (document.querySelector(".checkbox_2").checked){
        block2.classList.add("rightAlign")
        localStorage.setItem("box_2", "true")
    }

})

block4.addEventListener("mouseout", () => {
    console.log("out")
    if (document.querySelector(".checkbox_4").checked) {
        block4.classList.add("rightAlign")
        localStorage.setItem("box_4", "true")
    }
})

block5.addEventListener("mouseout", () => {
    console.log("out")
    if (document.querySelector(".checkbox_5").checked) {
        document.querySelector(".main__text").classList.add("rightAlign")
        localStorage.setItem("box_5", "true")
    }
})