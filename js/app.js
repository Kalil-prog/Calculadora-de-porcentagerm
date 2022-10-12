let valor = document.querySelector('#valor');
let porcentagem = document.querySelector('#porcentagem');

let calcular = document.querySelector('#calcular');
var resultado = document.querySelector('#span');
var cliente = document.querySelector('#cliente');

    
calcular.addEventListener('click', () => {
        var calculo = Number(valor.value) * Number(porcentagem.value) / 100;
        var conta = Number(valor.value) - Number(calculo);

        if(valor.value === '' || porcentagem.value === ''){
            alert('Digite um número válido');
        }else

        resultado.innerHTML = calculo;
        cliente.innerHTML = conta;
       
    });









/* const porcentagem = document.querySelector("quantidade").value
const valor = document.querySelector("porcentagem)").value
const calcular = document.querySelector("div.container div button")
var resultado = document.querySelector("div.container div span")


calcular.addEventListener("click", function(){

    var calculo = Number(porcentagem) * Number(valor) / 100
    resultado.innerHTML = calculo
    
}) */