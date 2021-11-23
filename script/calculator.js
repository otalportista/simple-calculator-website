
var screen = document.querySelector('#screen');
var first = true;
var finished = false;    // Operadores
const operators = ['*', '/', '-', '+'];
var verify_2 = "false";
var value_2 = "";

// Seleciona o objeto com um determinado id e atribui uma função após o click
document.querySelector('#cleaner')
    .addEventListener('click', function(){
        screen.innerHTML = '0';
        first = true;
})

// Seleciona o objeto com um determinado id e atribui uma função após o click
document.querySelector('#delete')
    .addEventListener('click', function(){
      deletenumber();
})

// Função que apaga numeros da calculadora
function deletenumber(){

    screen.innerHTML = (screen.innerHTML).substring(0, ((screen.innerHTML).length -1));

    if (screen.innerHTML == ''){
      screen.innerHTML = "0";
      first = true;
      finished = false;
    }
}

// Função que adiciona um valor ao ecrã
function addToScreen(value){
    
    var last_char = (screen.innerHTML).slice((screen.innerHTML).length - 1);

    // Verifica first true
    if ( first == true && !operators.includes(value) && value != '.'){
      
      if ((screen.innerHTML).includes(operators) || (screen.innerHTML).includes(".")){
        first = false;
      }else{
        first = false;
        screen.innerHTML = '';
      } 
    }

    // Verifica se é operador
    if ((operators.includes(value)) & finished == true){
      finished = false;
    }else{
      if (finished == true){
        screen.innerHTML = '';
      }
    }

    // Adiciona ao ecrã
    if ((operators.includes(value))){       
        if (!last_char.includes(value) && !last_char.includes(".")){
          screen.innerHTML += value;
          value_2 = "";
        }
    }else{
      
      if (value == '.'){
        if ( (screen.innerHTML).includes(".")){
          if (last_char != '.' && !(screen.innerHTML).includes(".")){
            if ( !last_char.includes(operators) ){
              screen.innerHTML += value;
            }
          }else{
            if ( !last_char.includes(operators) && last_char != '.'){
              var verify = verifyOperator();
              if ( verify == true){
                if ( !last_char != '.' && !operators.includes(last_char) && verify_2 == false){
                  if ( !value_2.includes(".") ){
                    value_2 += value;
                    screen.innerHTML += value;
                  }
                }
              }
            }
          }
        }else{
          screen.innerHTML += value;
          value_2 += value;
        }
      }else{
        verify_2 = false;
        screen.innerHTML += value;
        value_2 += value;
      }
    }
    
}

// Verifica se existe operador no screen
function verifyOperator(){
  for ( i = 0; i < operators.length; i++ ){
    for ( j = 0; j < (screen.innerHTML).length; j++ ){
      if (operators[i] == (screen.innerHTML)[j]){
        return true;
      }
    }
  }
  return false;
}

// Apresenta o resultado
function result(){
    screen.innerHTML = eval(screen.innerHTML);
    finished = true;
    first = true;
}

// Apresenta o resultado da %
function result2(){

    screen.innerHTML += "/100";
    screen.innerHTML = eval(screen.innerHTML);

    
    finished = true;
    first = true;
}

// Numero ao quadrado
function pownumber(){
    
    var verify = verifyOperator();
    

    if ( verify == false ){
      if ( !(screen.innerHTML).includes(operators)){
        screen.innerHTML = eval(Math.pow(screen.innerHTML, 2));
        finished = true;
      }
    }
}

// Keypress
const x = ['*','+','-','/','.','1','2','3','4','5','6','7','8','9','0'];
let textBox = document.getElementById('main');
textBox.addEventListener('keydown', (event) => {

  if (x.includes(event.key)){
    addToScreen(event.key);
  }else{
    if (event.key == 'Enter'){
      result();
    }else if (event.key == 'Backspace'){
      deletenumber();
    }else if (event.key == 'Delete'){
      screen.value = '0';
      deletenumber();
    }else if (event.key == 'Escape'){
      screen.innerHTML = "0";
      first = true;
    }
  }
});
