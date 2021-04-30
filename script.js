const out = document.querySelector("#out")
const ins = document.querySelector("#ost")
function konwertuj() {
    var kwad = document.querySelectorAll("[class='in']");
    out.textContent = (+kwad[0].value).toString(2)+'.'+(+kwad[1].value).toString(2)+'.'+(+kwad[2].value).toString(2)+'.'+(+kwad[3].value).toString(2);
}
ins.addEventListener('focusout',konwertuj,false);