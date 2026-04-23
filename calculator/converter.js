function convert() {
    let value = document.getElementById("value").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if (from === to) {
        result.innerText = value;
        return;
    }

    if (from === "kg" && to === "lb") {
        result.innerText = value * 2.20462 + " lb";
    } else if (from === "lb" && to === "kg") {
        result.innerText = value * 0.453592 + " kg";
    }
}