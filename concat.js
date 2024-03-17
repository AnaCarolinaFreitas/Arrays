//Este é o metodo concat
//Utilizando-o podemos juntar dois ou mais arrays
//Exemplo 1:
let planetas = ["Mercúrio", "Vênus", "Terra"];
let outros = planetas.concat(["Júpiter", "Saturno" ]);

console.log(planetas)
//Quando exibimos a variavel original, ela não sofre alterações
//output: [ 'Mercúrio', 'Vênus', 'Terra' ]
console.log(outros)
//Porem quando utilizamos a outra variavel que contem o metodo concat, os elementos são adicionados diretamente na exibição
//output: [ 'Mercúrio', 'Vênus', 'Terra', 'Júpiter', 'Saturno' ]

