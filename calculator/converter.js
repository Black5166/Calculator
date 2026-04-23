function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if (isNaN(value)) {
        result.innerText = "Enter a number";
        return;
    }

    
    if (from === to) {
        result.innerText = value;
        return;
    }

    // weight
    if (from === "kg" && to === "lb") {
        result.innerText = (value * 2.20462).toFixed(4) + " lb";
    }
    else if (from === "lb" && to === "kg") {
        result.innerText = (value * 0.453592).toFixed(4) + " kg";
    }

    // area
    else if (from === "sqft" && to === "sqm") {
        result.innerText = (value * 0.092903).toFixed(6) + " m²";
    }
    else if (from === "sqm" && to === "sqft") {
        result.innerText = (value * 10.7639).toFixed(6) + " ft²";
    }
}
