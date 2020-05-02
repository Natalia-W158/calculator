let screen = document.getElementById("screen");

function insert(x) {
    screen.value = screen.value + x;
}

function calculate(){
    screen.value = eval(screen.value);


}

function clear() {
    screen.value = "";
}