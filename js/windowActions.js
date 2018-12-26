


let dragItem = document.querySelector(".window");
let dragText = document.querySelector(".window-header-title");
let dragTextIcon = document.querySelector(".window-header-icon");
let container = document.querySelector(".window");
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("touchstart", dragStart, true);
container.addEventListener("touchend", dragEnd, true);
container.addEventListener("touchmove", drag, true);

container.addEventListener("mousedown", dragStart, true);
container.addEventListener("mouseup", dragEnd, true);
container.addEventListener("mousemove", drag, true);
if (windowMinMax) {
    console.log('remove')
    container.removeEventListener("touchstart", dragStart, true);
    container.removeEventListener("touchend", dragEnd, true);
    container.removeEventListener("touchmove", drag, true);

    container.removeEventListener("mousedown", dragStart, true);
    container.removeEventListener("mouseup", dragEnd, true);
    container.removeEventListener("mousemove", drag, true);





}

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if ((e.target === dragItem) || (e.target === dragText) || (e.target === dragTextIcon)) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e) {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

