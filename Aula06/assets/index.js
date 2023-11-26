// Mais operadores Aritmeticos

// ( % ) = Modulo
// ( ** ) = Exponenciação
// ( ++ ) = Incremento
// ( -- ) = Decremento

// Modulo: Resto da divisão

console.log(5 % 4); // 1
console.log(2 % 2); // 0
console.log(10 % 9); // 1
console.log(6 % 2); // 0
console.log(8 % 7); // 1

console.log(" "); // espaço console

// Exponenciação

console.log(3 ** 2); // 9
console.log(5 ** 3); // 125
console.log(2 ** 3); // 8

// Incremento e Decremento
console.log(" "); // espaço console

let n1 = 0;

n1++;
n1++;
n1++;
n1++;
n1++;
console.log(n1);

n1--;
n1--;
n1--;
n1--;
n1--;
console.log(n1);

console.log(" "); // espaço console

// Ordem do operador de incremento e decremento
// colocar o nome da let atraz dos operadores pegamos o valor dela e adicionamos uma soma ou adição=
// se nos fizermos ao contrario colocar os operadores primeiro e o valor da let depois
// teramos uma alteração quase instantanea, exemplo:

let n2 = 1;
let n3 = 1;

console.log(n2);
console.log(n3);

n2++;
// n2: pega o numero
// ++: adicionar +1
console.log(n2); // 2

++n3;
// ++: adicionar +1
// n3: pega o numero
console.log(n3); // 2

console.log(" "); // espaço console

// Mesma coisa com o decremento

let n4 = 1;
let n5 = 1;

console.log(n4);
console.log(n5);

n4--;
// n4: pega o numero
// --: diminui -1
console.log(n4); // 2

--n5;
// --: diminui -1
// n5: pega o numero
console.log(n5); // 2
