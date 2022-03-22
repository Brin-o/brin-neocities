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
    hideAllItems()
    let map = document.getElementById("map")
    map.style.display = "block"
    selectMapLocation(location)

    //map img hiding/showing
    var mapDark = document.getElementById("map-img-dark")
    mapDark.style.display = "none"
    var mapLight = document.getElementById("map-img-light")
    mapLight.style.display = "none"
    var visibleMap = document.getElementById("map-img-" + color)
    visibleMap.style.display = "inline-block"


}
function selectMapLocation(location) {
    var mapItems = document.getElementsByClassName("map-location"); //divsToHide is an array
    for (var i = 0; i < mapItems.length; i++) {
        if (mapItems[i].id == location) {
            mapItems[i].classList.add("selected");
        }
        else {
            mapItems[i].classList.remove("selected");
        }
    }
}