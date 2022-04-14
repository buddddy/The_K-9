function include(htmlFile, elemId) {
    let request = new XMLHttpRequest();
    request.open("GET", htmlFile);
    request.addEventListener("load", function () {
        if (request.status === 200) {
            document.getElementById(elemId).innerHTML += request.responseText;
        } else {
            console.error(htmlFile + " does not exist");
        }
    });
    request.send();
}

window.include = include;