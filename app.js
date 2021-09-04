const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log (window.getComputedStyle(red).backgroundColor)

const getBGColor = function(selectedElement) {
    return window.getComputedStyle(selectedElement).backgroundColor
}

// var color = getBGColor(pink);

// pink.addEventListener("mouseenter", function name(params) {
//     center.style.background = color;
// })

const magicColor = function (element,color) {
    element.addEventListener("mouseenter", function () {
        center.style.background = color;
    })
}

magicColor(red, getBGColor(red));
magicColor(cyan, getBGColor(cyan));
magicColor(violet, getBGColor(violet));
magicColor(orange, getBGColor(orange));
magicColor(pink, getBGColor(pink));


