//Este é o metodo slice
//O slice seleciona valores determinados por um parâmetro em um novo array
//Exemplo 1:
let frutas = ["Banana", "Limão", "Abacaxi", "Morango", "Melancia"];
let citricas = frutas.slice(1, 4);

console.log(citricas);
//output: [ 'Limão', 'Abacaxi', 'Morango' ]

//exemplo 2:
let comidas = ["Hamburger", "Pizza", "HotDog", "Arroz", "Salada"];
let FastFood = comidas.slice(0, 3);

console.log(FastFood);