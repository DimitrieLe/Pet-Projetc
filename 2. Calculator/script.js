var inputCalc = document.getElementsByClassName('final-result')[0];

function input(i) {
 inputCalc.value = inputCalc.value + i;
}

function result() {
 inputCalc.value = eval(inputCalc.value);
}

function backspace() {
 inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length-1);
}

function reset() {
 inputCalc.value = "";
}