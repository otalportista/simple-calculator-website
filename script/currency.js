// Quando escreve faz a conversão automaticamente
$('#CurrencYconversorNumber').on('input',function(e){
    currencyConvertor();
});

// Quando muda a opção faz a conversão
$('#from_money').change(function xxx(){
    currencyConvertor();
})
// Quando muda a opção faz a conversão
$('#to_money').change(function xxx(){
    currencyConvertor();
})

// Get Current Value
function currencyConvertor(){
    // Valor do valor inserido
    var value = document.getElementById("CurrencYconversorNumber").value;
    // Moeda Inicial
    var value1 = document.getElementById("from_money").value;
    // Moeda de conversão
    var value2 = document.getElementById("to_money").value;
    
    // Se tiver inserido um valor
    if ( !value == ''){
        // Pair
        let pair = `${value1}_${value2}`
        // url para a api
        const url = `https://free.currconv.com/api/v7/convert?q=${pair}&compact=y&compact=ultra&apiKey=3c155723a522586d483b`
        var req = new XMLHttpRequest();
        // mete o responde como json
        req.responseType = 'json';
        // obtem o conteudo
        req.open('GET', url, true);
        // assim que der load do request
        req.onload  = function() {
            console.log(req.response);
            var value_convert = req.response["results"][pair].val;
            var final_result = eval(value_convert * value);
            
            //console.log(jsonResponse)
            document.getElementById("CurrencYconversorTempValue").value = final_result.toFixed(2);

            if ( (document.getElementById("CurrencYconversorTempValue").value) == 'NaN'){
                document.getElementById("CurrencYconversorTempValue").value = ""
            }
        };
        req.send(null);
    }else{
        document.getElementById("CurrencYconversorTempValue").value = ""
    }
}