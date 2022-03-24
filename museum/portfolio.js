function toggleId(element_id) {
    hideAllItems()
    let div = document.getElementById(element_id)
    div.style.display = "block"
}

function hideAllItems() {
    var divsToHide = document.getElementsByClassName("collection-item"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    var all = document.getElementById("all")
    all.style.display = "none"
}
const cLight = "#f1f2da"
const cDark = "#00303b"
function changeColors(bgType) {
    var cFont = "#FFFFFF"
    var cBG = "#000000"
    if (bgType == "current") {
        cFont = cLight
        cBG = cDark
    } else if (bgType == "past") {
        cFont = cDark
        cBG = cLight
    }
    var r = document.querySelector(':root')
    r.style.setProperty("--fontColor", cFont)
    r.style.setProperty("--bgColor", cBG)
}

// MINIMAP FUNCTION

function showMap(location, color = "light") {
    let map = document.getElementById("map")
    map.style.display = "block"
}