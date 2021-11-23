// When change option in select it do convercion
$('#conversorTemperatura').change(function xxx(){
    var x = $(this).val();
    var y = Number(document.getElementById("conversorNumber").value);
    var z = getIdOfOption(x);
    
    if (typeof y == 'number'){
        
        if ( y == 0){
            document.getElementById("conversorNumber").value = "0";
        }
        conversionTemperature(Number(z), y, "True");
    }
})

// when change input text it do conversion
$('#conversorNumber').on('input',function(e){
    var x = $('#conversorTemperatura').val();
    var y = Number(document.getElementById("conversorNumber").value);
    var z = getIdOfOption(x);
    var value = document.getElementById('conversorNumber').value;
    if (typeof y == 'number'){
        if ( value.length > 0){
            conversionTemperature(Number(z), y, "True");
        }else{
            if (!z == ""){
                document.getElementById("conversorNumber").value = "";
                document.getElementById("conversorTempValue").value = "";
            }
        }
        
    }
});

// Get text and grab id of option
function getIdOfOption(x){
    var id = "";
    document.querySelectorAll("option").forEach(function(element){
        if(element.textContent === x){
            var y = element.closest("option");
            id = y.id;
        }
    });
    return id;
}

// Convert temperature
function conversionTemperature(x, number, y){
    var result = "";

    if ( x == 1){
        result = number * (9/5) + 32 + " °F";
    }else if ( x == 2 ){
        result = number + 273.15 + " K";
    }else if ( x == 3 ){
        result = ((number - 32)/1.8000) + " °C";
    }else if ( x == 4 ){
        result = (number + 459.67) * ( 5/9) + " K";
    }else if ( x == 5 ){
        result = number * (9/5) - 459.67 + " °F";
    }else if ( x == 6 ){
        result = number - 273.15 + " °C";
    }


    if ( y == "True" && !result.includes("NaN") && !result == ""){
        document.getElementById("conversorTempValue").value = result;     
    }else{
        document.getElementById("conversorTempValue").value = "";
        return result;
    }
}