var a = document.getElementById("id_caro");
var data = "";
var board = [];

function hienThiBanCo() {
    for (let i = 0; i < 5; i++) {
        board[i] = new Array(0, 0, 0, 0, 0);
    }
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br><br><input type='button' value='Change value' onclick='changeValue()'/>"
    a.innerHTML = data;

}

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br><br><input type='button' value='Change value' onclick='changeValue()'/>"
    a.innerHTML = "<hr>"+data;
}