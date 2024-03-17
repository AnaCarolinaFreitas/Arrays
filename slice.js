//Este é o metodo slice
//O slice seleciona valores determinados por um parâmetro em um novo array
//Exemplo 1:
let frutas = ["Banana", "Limão", "Abacaxi", "Morango", "Melancia"];
//Determinei a variavel frutas
let citricas = frutas.slice(1, 4);
//utilizei o metodo slice para vizualizar somente as frutas citricas

console.log(citricas);
//utilizei este comando para exibir as frutas citricas
//output: [ 'Limão', 'Abacaxi', 'Morango' ]

//o mesmo processo irá ocorrer no exemplo abaixo
//exemplo 2:
let comidas = ["Hamburger", "Pizza", "HotDog", "Arroz", "Salada"];
let FastFood = comidas.slice(0, 3);
//o slice foi utilizado para separa os alimentos considerados FastFood dos demais alimentos

console.log(FastFood);