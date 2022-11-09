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
        console.log("click" + btn.id.toString())
        var ul = document.getElementById(btn.id.replace("_btn", "_list"));
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(document.getSelection().toString()));
        ul.appendChild(li);
    })
})