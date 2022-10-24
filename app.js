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
        h3[i].style.color = "red";
    }, 1000);

    setInterval(function () {
        h3[i].style.textDecoration = "underline"
        h3[i].style.opacity = "1";
        h3[i].style.color = "blue";
    }, 2000);
}

if (document.getElementById("details1") && document.getElementById("details2")) {
    nbClick("details1", "section1");
    nbClick("details2", "section2");
}

// Retrieve a json file and display its content in HTML
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "first.json");
xhr2.responseType = "json";

xhr2.onload = function () {
    let response = xhr2.response;

    let createUl = document.createElement("ul");
    let first =  document.getElementById("first");
    first.prepend(createUl);

    for (let i = 0; i < response.length; i++) {
        let createLi = document.createElement("li");
        createLi.innerHTML = response[i];
        createUl.append(createLi);
    }
}
xhr2.send();

let xhr = new XMLHttpRequest();
xhr.open("GET", "second.json");
xhr.responseType = "json";

xhr.onload = function () {
    let response = xhr.response;

    let createDl = document.createElement("dl");
    let second =  document.getElementById("second");
    second.prepend(createDl);

    for (let i = 0; i < response.length; i++) {
        let createDt = document.createElement("dt");
        createDt.innerHTML = response[i][0];
        createDl.append(createDt);
        let createDd = document.createElement("dd");
        createDd.innerHTML = response[i][1];
        createDl.append(createDd);
        if (createDd.innerHTML === response[3][1]) {
            let createA = document.createElement("a");
            createA.href = "https://github.com/ChloeArd";
            createA.innerHTML = response[3][1];
            let dd = document.querySelectorAll("dd");
            dd[3].innerHTML = "";
            dd[3].append(createA);
        }
    }
}
xhr.send();

function nbClick(id1, id2) {
    let click = 0;
    document.getElementById(id1).addEventListener("click", function () {
        if (click === 0) {
            document.getElementById(id2).style.display = "none";
            click++;
        }
        else {
            document.getElementById(id2).style.display = "flex";
            click = 0;
        }
    });
}
