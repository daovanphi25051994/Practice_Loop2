let textTriangle1 = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        textTriangle1 += "*";
    }
    textTriangle1 += "<br>"
}
document.getElementById("part1").innerHTML = textTriangle1;

let textTriangle2 = "";
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        textTriangle2 += "*";
    }
    textTriangle2 += "<br>"
}
document.getElementById("part2").innerHTML = textTriangle2;

let textTriangle3 = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > 0; j--) {
        if (j - i > 0){
            textTriangle3 += "&nbsp; ";
        }else {
            textTriangle3 += "*";
        }
    }
    textTriangle3 += "<br>"
}
document.getElementById("part3").innerHTML = textTriangle3;

let textTriangle4 = "";
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > 0; j--) {
        if (j - i > 0){
            textTriangle4 += "*";
        }else {
            textTriangle4 += "&nbsp; ";
        }
    }
    textTriangle4 += "<br>"
}
document.getElementById("part4").innerHTML = textTriangle4;



