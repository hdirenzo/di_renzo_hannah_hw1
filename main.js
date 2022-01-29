console.log("Hey")
let icons = document.querySelectorAll(".svgicons")

icons = Array.from(icons)

// for (let i = 0; i < icons.length; i++) {
//     console.log(icons[i])
// }

for (let icon of icons) {

    icon.addEventListener("click", function () {
        icon.classList.toggle("selected")
    }, true)

}
