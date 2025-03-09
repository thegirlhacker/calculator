function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;

        // Using Function constructor to evaluate the expression
        let result = new Function("return " + expression)();
        
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Invalid calculation");
    }
}
