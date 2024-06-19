function center () {
    const viewportWidth = viewport.clientWidth;
    const viewportHeight = viewport.clientHeight;
    const cubeWidth = cube.offsetWidth;
    const cubeHeight = cube.offsetHeight;
    const centerX = (viewportWidth - cubeWidth) / 2;
    const centerY = (viewportHeight - cubeHeight) / 2;
    cube.style.left = `${centerX}px`;
    cube.style.top = `${centerY}px`;
}
center ()




//Dragging
let active = false
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener('mousedown', dragStart, false);
document.addEventListener('mouseup', dragEnd, false);
document.addEventListener('mousemove', drag, false);

function dragStart(e) {
    if (e.button !== 0) return;  // Only respond to left-click
    // Set initial positions based on the current mouse position
    initialX = e.clientX;
    initialY = e.clientY;
    if (e.target === dragItem) {
        active = true;
    }
    console.log(`Drag started - Initial mouse positions: X: ${initialX}, Y: ${initialY}`);
}

function dragEnd(e) {
    // When drag ends, reset active flag and log final position
    active = false;
    console.log(`Drag ended - Final element position: X: ${xOffset}, Y: ${yOffset}`);
}

function drag(e) {
    if (active) {
        e.preventDefault();

        // Calculate the current positions as offsets from the initial positions
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        // Update the global offsets based on current positions
        xOffset += currentX;
        yOffset += currentY;

        // Apply translation based on the offsets
        setTranslate(xOffset, yOffset, dragItem);

        // Reset initial positions for continuous dragging
        initialX = e.clientX;
        initialY = e.clientY;

        console.log(`Dragging - Element being moved to: X: ${xOffset}, Y: ${yOffset}`);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}



const dragItem = document.getElementById('audio-wrapper');


 // get viewport element

 document.addEventListener('DOMContentLoaded', function() {
        const viewport = document.getElementById("viewport");
        const cube = document.getElementById("cube");
        // const context = canvas.getContext("2d");

        // disable right clicking
        document.oncontextmenu = function () {
            return false;
        }

        // list of all strokes drawn
        const drawings = [];

        // coordinates of our cursor
        let cursorX;
        let cursorY;
        let prevCursorX;
        let prevCursorY;

        // distance from origin
        let offsetX = 0;
        let offsetY = 0;

        // zoom amount
        let scale = 1;

        // convert coordinates
        function toScreenX(xTrue) {
            return (xTrue + offsetX) * scale;
        }
        function toScreenY(yTrue) {
            return (yTrue + offsetY) * scale;
        }
        function toTrueX(xScreen) {
            return (xScreen / scale) - offsetX;
        }
        function toTrueY(yScreen) {
            return (yScreen / scale) - offsetY;
        }
        function trueHeight() {
            return viewport.clientHeight / scale;
        }
        function trueWidth() {
            return viewport.clientWidth / scale;
        }

        function redrawCanvas() {
            // set the canvas to the size of the window
            const transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
            cube.style.transform = transform;
            

            viewport.style.backgroundColor = 'blue'; // Set background color properly


            // for (let i = 0; i < drawings.length; i++) {
            //     const line = drawings[i];
            //     drawLine(toScreenX(line.x0), toScreenY(line.y0), toScreenX(line.x1), toScreenY(line.y1));
            // }
        }
        redrawCanvas();

        // if the window changes size, redraw the canvas
        window.addEventListener("resize", (event) => {
            redrawCanvas();
        });

        // Mouse Event Handlers
        viewport.addEventListener('mousedown', onMouseDown);
        viewport.addEventListener('mouseup', onMouseUp, false);
        viewport.addEventListener('mouseout', onMouseUp, false);
        viewport.addEventListener('mousemove', onMouseMove, false);
        viewport.addEventListener('wheel', onMouseWheel, false);

        // mouse functions
        let leftMouseDown = false;
        let rightMouseDown = false;
        function onMouseDown(event) {

            // detect left clicks
            if (event.button == 0) {
                if (window.getComputedStyle(event.target).cursor === 'grab' 
                || window.getComputedStyle(event.target).cursor === 'grabbing') { 
                console.log('Element grabbed!');
                // Set leftMouseDown or similar flag here
                leftMouseDown = true;
                rightMouseDown = false;
                
            }
              
            }
            // detect right clicks
            if (event.button == 2 || event.button == 1) {
                rightMouseDown = true;
                leftMouseDown = false;
            }

            // update the cursor coordinates
            cursorX = event.pageX;
            cursorY = event.pageY;
            prevCursorX = event.pageX;
            prevCursorY = event.pageY;
        }
        function onMouseMove(event) {
            if (event.target) {
                globalCursorStyle = window.getComputedStyle(event.target).cursor;
            }

            // get mouse position
            cursorX = event.pageX;
            cursorY = event.pageY;
            const scaledX = toTrueX(cursorX);
            const scaledY = toTrueY(cursorY);
            const prevScaledX = toTrueX(prevCursorX);
            const prevScaledY = toTrueY(prevCursorY);

            if (leftMouseDown) {
                // add the line to our drawing history
               

            }
            if (rightMouseDown) {
                // move the screen
                offsetX += (cursorX - prevCursorX) / Math.pow(scale, 0);
                offsetY += (cursorY - prevCursorY) / Math.pow(scale, 0);
                redrawCanvas();
            }
            prevCursorX = cursorX;
            prevCursorY = cursorY;
            // console.log(cursorX)
            // console.log(cursorY)
        }
        function onMouseUp() {
            leftMouseDown = false;
            rightMouseDown = false;
        }


        function onMouseWheel(event) {
            event.preventDefault(); // Prevents the whole page from scrolling

            const rect = viewport.getBoundingClientRect(); // Get the bounding rectangle of the viewport
            const cursorX = event.clientX - rect.left; // Relative X position of the cursor within the viewport
            const cursorY = event.clientY - rect.top; // Relative Y position of the cursor within the viewport

            const oldScale = scale; // Store the old scale
            const scaleAmount = -event.deltaY / 500;
            scale *= (1 + scaleAmount); // Update the scale based on wheel movement

            redrawCanvas();
        }
})