let inputAdultos= document.getElementById("adultos")

let inputCriancas= document.getElementById("criancas")

let inputDuracao= document.getElementById("duracao")

let res = document.getElementById("resultado")

function calcular(call){
    
    if(inputAdultos.value.length == 0 || inputCriancas.value.length == 0 || inputDuracao.value.length == 0){
        resetarResultado()
        alert("Preencha todos os dados antes de continuar")
        res.innerHTML += ''
        qdtToltalCarne+= ''
        qdtToltalCerveja+= ''
        qdtTotalBebidad+=''
    } else{
    setTimeout(()=>{
    let adultos= inputAdultos.value
    let criancas= inputCriancas.value
    let duracao= inputDuracao.value
    

    let qdtToltalCarne= carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

    let qdtToltalCerveja= cervejaPP(duracao) * adultos

    let qdtTotalBebidad= bebidasPP(duracao) *  adultos + (bebidasPP(duracao) / 2 * criancas);

   res.innerHTML+= `<p> ${qdtToltalCarne/1000}kg de carne`
   res.innerHTML+= `<p> ${Math.ceil(qdtToltalCerveja/355)} latas de cerveja`
   res.innerHTML+= `<p> ${Math.ceil(qdtTotalBebidad/2000)} Garrafas de bebida`
   
   resetarInputs()
   },100 )
}
 
}

function resetarInputs(){
    inputAdultos.value=""
    inputCriancas.value=""
    inputDuracao.value=""
}
function resetarResultado(){
    let res = document.getElementById("resultado")
    res.innerHTML=""
}
function carnePP(duracao){
    let carne = 400
    if(duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}

function cervejaPP(duracao){
    
    if(duracao >= 6){
        return 2000
    }
    else{
        return 1200
    }
}

function bebidasPP(duracao){
    if(duracao >=6 ){
        return 1500
    }
    else{
        return 1000
    }
}

