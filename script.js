let string = "Hi, wir sind OctoPi";
let str = string.split("");
let el = document.getElementById('header-animation');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
let running = setTimeout(animate, 90);
})();