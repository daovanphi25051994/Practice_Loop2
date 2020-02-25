let textResult = "";
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 21; j++) {
        if ((j == (5 - i)) || (j == (5 + i)) || (j == (15 - i)) || (j == (15 + i))) {
            textResult += "*";
        } else {
            textResult += "&nbsp; "
        }
    }
    textResult += "<br>"
}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
        if ((j == (0 + i)) || (j == (19 - i))) {
            textResult += "* ";
        } else {
            textResult += "&nbsp; "
        }
    }
    textResult += "<br>";
}
document.getElementById("outputResult").innerHTML = textResult;