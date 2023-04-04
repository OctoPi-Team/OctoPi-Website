const dark_mode_button = document.getElementById("dark_mode_button");
dark_mode_button.addEventListener("click", () => {
    if(!document.body.classList.contains("dark_mode")) {
        document.body.classList.add("dark_mode");
        localStorage.setItem("mode", "dark");
    } else {
        document.body.classList.remove("dark_mode");
        localStorage.removeItem("mode", "dark");
    }
})

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark_mode");
}

const alert = document.getElementById("button-file");
alert.addEventListener("click", () => {
    window.alert("Not yet implemented");
})