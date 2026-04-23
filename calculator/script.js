let display = document.getElementById("display");

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// scientific
function sin() {
    display.value = Math.sin(display.value * Math.PI/180);
}

function cos() {
    display.value = Math.cos(display.value * Math.PI/180);
}

function tan() {
    display.value = Math.tan(display.value * Math.PI/180);
}

function log() {
    display.value = Math.log10(display.value);
}

function ln() {
    display.value = Math.log(display.value);
}

function sqrt() {
    display.value = Math.sqrt(display.value);
}

function power() {
    display.value = Math.pow(display.value, 2);
}

function powerY() {
    display.value += "**";
}

function inverse() {
    display.value = 1 / display.value;
}

function percent() {
    display.value = display.value / 100;
}