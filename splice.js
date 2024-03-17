//Este é o metodo splice()
//É uma função embutida em arrays que permite adicionar, remover e substituir elementos dentro de um array
//sintaxe: array.splice(start, delete, "item1", "item2", ...);
//o start indica o indice onde a alteração deve começar. Se for colocado um valor negativo ele se inicia a partir do ultimo elemento do array
//delete: Caso deseje remover um elemento, basta colocar o número que indique quantos elementos devem ser removidos a patir do indice start
//"item1", "item2", ...: É utilizado para adicionar elementos no lugar dos elementos removidos

//exemplo 1 (Adicionando um elemento):
let estacoes = ["Outono", "Inverno", "Verão"];
//Defini a variavel estações, porém a informação "Primavera" ficou faltando
// Neste caso irei acrescentar a estação "Primavera" antes do elemento "Verão"
// Antes a ordem era 1 = "Inverno" / 2 = "Verão"
//A partir de agora a ordem será:  1 = "Inverno" / 2 = "Primavera" / 3 = "Verão"
estacoes.splice(2, 0, "Primavera");

console.log(estacoes)
//output: [ 'Outono', 'Inverno', 'Primavera', 'Verão' ] 

//Exemplo 2 (Removendo um elemento):
let flores = ["tulipas", "rosas brancas", "margaridas", "orquidea", "girassol"];
//Neste caso, iremos remover os elementos de indice 3 e 4
//Antes o array tinha elementos até o indice 4
//Agora terá elementos somente até o indice 2
flores.splice(3, 2);

console.log(flores)
//output: [ 'tulipas', 'rosas brancas', 'margaridas' ]
