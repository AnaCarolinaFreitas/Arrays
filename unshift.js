//Este é o metodo unshift
//Ele permite adicionar novos elementos ao inicio de um array, fazendo que os outros elementos existentes avancem para o lado direito
//exemplo 1:
let numeros = ["1", "22", "333", "4444"];
numeros.unshift(0);

console.log(numeros);
//output: [ 0, '1', '22', '333', '4444' ]

//exemplo 2:
let moradias = ["Apartamento", "Casa"];
moradias.unshift("Condominio");

console.log(moradias);
//output: [ 'Condominio', 'Apartamento', 'Casa' ]
