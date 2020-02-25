let result = "";
for (let i = 0; i < 13; i++) {
    if ((i + 1) % 2 === 0) {
        result += "<br>";
        continue;
    }
    for (let j = 0; j < 20; j++) {
        if ((i == 0) || (i == 12)) {
            result += "*";
        }else if (j == 0){
            result += "*";
        }else if (j > 0 && j < 19){
            result += "&nbsp; "
        }else if (j == 19){
            result += "*";
        }
    }
}
document.getElementById("result").innerHTML = result;