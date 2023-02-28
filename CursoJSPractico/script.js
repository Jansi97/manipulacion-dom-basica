const h1= document.querySelector('h1');/* querySelector nos pide q seleccionemos cuales son las etiquetas,ID,clases para seleccionar lago en html*/
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaINputs = input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaINputs;
}