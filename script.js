const dots = window.setInterval(() => {
    const wait = document.getElementById("wait");
    if (wait.innerHTML.length > 2) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
}, 500);