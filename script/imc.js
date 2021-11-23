// Quando muda a opção faz os calculos
$('#altura').on('input',function(e){
    calculateImc();
})
// Quando muda a opção faz os calculos
$('#peso').on('input',function(e){
    calculateImc();
})


// Calcula o imc
function calculateImc(){
    
    var height = document.getElementById("altura").value;
    var weight = document.getElementById("peso").value;
    var result = ""

    if ( ( !height == '') && ( !weight == '')){
        if ( height.includes(",")){
            height = height.replace(",",".")
        }
        if ( weight.includes(",")){
            weight = weight.replace(",",".")
        }
        result = Number(weight) / ( Number(height) * Number(height))
        
        
        if (isNaN(result)){
            document.getElementById("imcresult").value = "";
            document.getElementById("alertImc").style.display = "none";
        }else{

            var classificacao = ""
            if ( result.toFixed(2) < 19 ){
                classificacao = "Abaixo do peso";
            }else if ( result.toFixed(2) >= 19 && result.toFixed(2) < 25 ){
                classificacao = "Peso Normal";
            }else if ( result.toFixed(2) >=25 && result.toFixed(2) < 30){
                classificacao = "Sobrepeso";
            }else if ( result.toFixed(2) >= 30 && result.toFixed(2) < 40){
                classificacao = "Obesidade tipo I";
            }else{
                classificacao = "Obesidade mórbida";
            }

            document.getElementById("imcresult").value = result.toFixed(2) + " kg/m2";


            document.getElementById("alertImc").style.display = "flex";
            document.getElementById("alertImc").innerText = classificacao;

        }
    }else{
        document.getElementById("imcresult").value = "";
        document.getElementById("alertImc").style.display = "none";
    }



}