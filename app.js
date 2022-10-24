let title = document.getElementById('title');
let titleOne = document.getElementById('titleOne');
let h1 = document.querySelector("h1");
let h2 = document.querySelectorAll("h2");
let h3 = document.querySelectorAll("h3");

title.style.textAlign = 'center';
titleOne.style.textAlign = 'center';



// Increase text size + rotate H1....
setTimeout(function () {
    h1.style.fontSize = "120px";
    h1.style.padding = "15px";
    h1.style.top = "initial";
    h1.style.left = "initial";
    h1.style.transform = 'rotate(270deg)';
    h1.style.fontSize = "50px";
}, 0);
setTimeout(function () {
    h1.style.position = "relative";
    h1.style.border = "none";
    h1.style.top = "initial";
    h1.style.left = "initial";
    h1.style.padding = "0";
    h1.style.transform = 'rotate(180deg)';
    h1.style.fontSize = "50px";
}, 250);
setTimeout(function () {
    h1.style.position = "relative";
    h1.style.border = "none";
    h1.style.top = "initial";
    h1.style.left = "initial";
    h1.style.padding = "0";
    h1.style.transform = 'rotate(90deg)';
    h1.style.fontSize = "50px";
}, 500);
setTimeout(function () {
    h1.style.position = "relative";
    h1.style.border = "none";
    h1.style.top = "initial";
    h1.style.left = "initial";
    h1.style.padding = "0";
    h1.style.transform = 'rotate(0deg)';
    h1.style.fontSize = "50px";
}, 1000);

//config H2 ...
for (let i = 0; i < h2.length; i++) {
    setInterval(function () {
        h2[i].style.fontWeight = "bold"
        h2[i].style.fontStyle = "italic";
    }, 2000);

    setInterval(function () {
        h2[i].style.fontWeight = "normal"
    }, 6000);
}

//config H3 ...
for (let i = 0; i < h3.length; i++) {
    setInterval(function () {
        h3[i].style.textDecoration = "none"
        h3[i].style.opacity = "0.5";
        h3[i].style.backgroundColor = "bleu";
    }, 2000);

    setInterval(function () {
        h3[i].style.textDecoration = "underline"
        h3[i].style.opacity = "1";
        h3[i].style.backgroundColor = "transparent";
    }, 6000);
}
