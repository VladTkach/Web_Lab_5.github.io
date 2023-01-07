window.addEventListener('load', (event) => {
    document.querySelectorAll(".list__selection").forEach((ol) =>{
        ol.innerHTML = localStorage.getItem(ol.id.replace("_list", ""));
        if (ol.innerHTML.toString().length > 0){
            document.getElementById(ol.id.replace("_list", "_rbtn")).classList.add("active__btn");
        }
    })
});

document.querySelectorAll(".script_5").forEach((block) =>{
    block.addEventListener("mouseup", () =>{
        console.log(block.id)
        console.log(document.getSelection().toString())
        closeSelectionBtn(block.id.toString() + "_btn")
        console.log()
        if (document.getSelection().toString() !== ""){
            document.getElementById(block.id.toString() + "_btn").classList.add("active__btn")
        }
    })
})

function closeSelectionBtn(){
    document.querySelectorAll(".select__btn").forEach((btn) => {
        btn.classList.remove("active__btn")
    })
}

document.querySelectorAll(".select__btn").forEach((btn) => {
    btn.addEventListener("click", () =>{
        console.log("click" + btn.id.toString());
        document.getElementById(btn.id.toString().replace("_btn", "_rbtn")).classList.add("active__btn");
        var ul = document.getElementById(btn.id.replace("_btn", "_list"));
        var li = document.createElement("li");
        var text = document.createTextNode(document.getSelection().toString());
        li.appendChild(text);
        ul.appendChild(li);
        console.log(btn.id.replace("_btn", ""));
        localStorage.setItem(btn.id.replace("_btn", ""), ul.innerHTML);
    })
})

document.querySelectorAll(".clear__btn").forEach((btn) => {
    btn.addEventListener("click", () =>{
        console.log("click" + btn.id.toString());
        var ol = document.getElementById(btn.id.replace("_rbtn", "_list"));
        while (ol.firstChild)
            ol.removeChild(ol.firstChild);
        btn.classList.remove("active__btn")
        localStorage.setItem(btn.id.replace("_rbtn", ""), ol.innerHTML);
    })
})