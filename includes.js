//Este é o metodo includes
//Ao utiliza-lo é possivel verificar se um elemento existe no Array
//Exemplo 1:
let letras = ["X", "Y", "Z"];
//Utilizei o let para definir a variavel letras
let correto = letras.includes("Y");
//Defini uma variavel, e utilizei o metodo .includes para descobrir se o elemento Y existe no array

console.log(correto);
//Utilizei o comando para exibir o boleano
//Se o elemento existir, na saida será exibido um boleano true
//output: true

//Exemplo 2:
let letters = ["I", "J", "K"];
//defini a variavel letters
let falso = letters.includes("L");
//Neste utilizei o includes para encontrar o elemento "L", que não existe no array

console.log(falso);
//Utilizei o comando para exibir o boleano
//Se o elemento não existir, na saida será exibido um boleano false
//output: false


