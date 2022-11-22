const mainInput= document.querySelector(".main__input")

window.addEventListener('load', (event) => {
    if (document.cookie !== "") {
        mainInput.classList.add("notActive")
        alert(document.cookie + "\nAfter you press: OK - cookies will delete")
        deleteAllCookies()
        alert("cookies were deleted")
        window.location.reload()
    } else {
        mainInput.classList.remove("notActive")
    }
});

function alertInput(input){
    if (event.key === "Enter"){
        if (!isNaN(input.value) && input.value !== ""){
            var min = 0
            for (i =0; i <= input.value.length; i++){
                if (input.value[i] > min){
                    min = input.value[i]
                }
            }
            document.cookie = "(cookie) " + "Max digit = " + min.toString()
            alert("Max digit = " + min.toString())
        }
        else {
            alert("not a number")
        }
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}