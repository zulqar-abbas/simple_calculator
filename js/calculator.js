function add() {
    console.log("in add");
    const val1 = document.getElementById("val1").value;
    const val2 = document.getElementById("val2").value;
    if (isNaN(val1 || val1 == "")) {
        alert("Please Enter valid Number in Value 1...");
    } else if (isNaN(val2) || val2 == "") {
        alert("Please Enter valid Number in Value 2...");
    } else {
        const val3 = document.getElementById("addans");
        console.log(val3);
        val3.value = parseFloat(val1) + parseFloat(val2);
    }
}

function subtract() {
    console.log("in add");
    const val1 = document.getElementById("val1sub").value;
    const val2 = document.getElementById("val2sub").value;
    if (isNaN(val1 || val1 == "")) {
        alert("Please Enter valid Number in Value 1...");
    } else if (isNaN(val2) || val2 == "") {
        alert("Please Enter valid Number in Value 2...");
    } else {
        const val3 = document.getElementById("subans");
        console.log(val3);
        val3.value = parseFloat(val1) - parseFloat(val2);
    }
}

function multiply() {
    console.log("in add");
    const val1 = document.getElementById("val1mul").value;
    const val2 = document.getElementById("val2mul").value;
    if (isNaN(val1 || val1 == "")) {
        alert("Please Enter valid Number in Value 1...");
    } else if (isNaN(val2) || val2 == "") {
        alert("Please Enter valid Number in Value 2...");
    } else {
        const val3 = document.getElementById("mulans");
        console.log(val3);
        val3.value = parseFloat(val1) * parseFloat(val2);
    }
}

function divide() {
    console.log("in add");
    const val1 = document.getElementById("val1div").value;
    const val2 = document.getElementById("val2div").value;
    if (isNaN(val1 || val1 == "")) {
        alert("Please Enter valid Number in Value 1...");
    } else if (isNaN(val2) || val2 == "") {
        alert("Please Enter valid Number in Value 2...");
    } else {
        if (parseFloat(val2) == 0) {
            const val3 = document.getElementById("divans");
            val3.value = "not defined";
        } else {
            const val3 = document.getElementById("divans");
            console.log(val3);
            val3.value = parseFloat(val1) / parseFloat(val2);
        }
    }
}


function loadDoc() {
    console.log("in function");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "values.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            console.log(obj.values.add.first);
            const val1 = document.getElementById("val1");
            const val2 = document.getElementById("val2");
            const val1sub = document.getElementById("val1sub");
            const val2sub = document.getElementById("val2sub");
            const val1mul = document.getElementById("val1mul");
            const val2mul = document.getElementById("val2mul");
            const val1div = document.getElementById("val1div");
            const val2div = document.getElementById("val2div");

            val1.value = obj.values.add.first;
            val2.value = obj.values.add.second;
            add();

            val1sub.value = obj.values.sub.first;
            val2sub.value = obj.values.sub.second;
            subtract();

            val1mul.value = obj.values.multiply.first;
            val2mul.value = obj.values.multiply.second;
            multiply();

            val1div.value = obj.values.divide.first;
            val2div.value = obj.values.divide.second;
            divide();
        }
    }
}