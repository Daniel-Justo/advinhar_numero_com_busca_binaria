const pensei = document.getElementById('penseibttn');
const ndeu = document.getElementById('ndeu');
const esse = document.getElementById('esse');
const menor = document.getElementById('menor');
const maior = document.getElementById('maior');
const again = document.getElementById('again');
const numadivinhado = document.getElementById('numeroadivinhado');
const ui = document.getElementById('ui');
const tentativa = document.getElementById('tentativa')
const sla = document.getElementById('textodecim')




let min = 0, max = 100;
let tentativaatual = 0;

let tent = 0


pensei.addEventListener('click',()=>{
    fazerBusca()
    tent = tent + 1
    updateElements()
    isvisible(false, pensei)
    isvisible(true, numadivinhado)
    isvisible(true, menor)
    isvisible(true, esse)
    isvisible(true, maior)
    sla.innerText = 'Esse é o seu número?'
})


esse.addEventListener('click', ()=>{
    acertou(true)
    isvisible(false, sla)
    isvisible(false, menor)
    isvisible(false, esse)
    isvisible(false, maior)
    isvisible(true, again)
    
})

menor.addEventListener('click', ()=>
{   
    (emaior(false))
    tent = tent + 1
    updateElements()
})

maior.addEventListener('click', ()=>{
    emaior(true)
    tent = tent + 1
    updateElements()
})
again.addEventListener('click', ()=>{
    tentativaatual = 0;
    tent = 0;
    min = 0;
    max = 100;
    updateElements()
    isvisible(false, numadivinhado)
    isvisible(false, tentativa)
    isvisible(false, again)
    isvisible(true, sla)
    sla.innerText = 'Pense em um número de 0 a 100'
    isvisible(true, pensei)
    
})

function emaior(higher){

    if(tentativaatual != Math.floor(min, max/2)){
        if(higher){
            min = tentativaatual +1
        }else{
            max = tentativaatual - 1
        }
        fazerBusca()
    }else{
        tentativaatual = 'ta maluco porra >:('
    }
}

function fazerBusca(){
    if( min <= max){
        tentativaatual = Math.floor((min+max)/2)
        console.log(min, max)
    }
}

function acertou(acertou){
    if(acertou){
        if (tent > 1){
        tentativa.innerText = 'Acertei seu número em '+tent+' tentativas'
        }else{
            tentativa.innerText = 'Acertei seu número em '+tent+' tentativa'
        }
    }
}

function isvisible(visible, elemento){
    if(visible){
        elemento.style.display = 'inline-block';
    }else{
        elemento.style.display = 'none';
    }
}

function updateElements(){
    numadivinhado.innerText = tentativaatual;
}