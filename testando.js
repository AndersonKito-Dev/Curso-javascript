const ficha = {
    nome: 'Ezio',
    nivel: 5
}

console.log('Ficha do Personagem:');
console.log('Nome: ', ficha.nome);
console.log('Nível ', ficha.nivel);

ficha.nivel++;

console.log('Novo nível', ficha.nivel);

// Estudo de Operadores e comparações
// Como posso fazer pra saber se um indivíduo pode ou não dirigir, com base na sua ideda? Assim:
const idade1 = 18
console.log(idade1 >= 18) // Vai retornar um valor boolean
if (idade1 >= 18) {
    console.log("Ele é maior de idade, portanto pode dirigir")
} else {
    console.log("Ele é menor de idade, portanto não pode dirigir")
}

// ESTUDO DE CONDICIONAIS E OPERADORES LÓGICOS
// Um paciente pode ser atendido se tiver mais de 18 anos ou sintomas urgentes, mas não pode ser atendido se tiver cadastro incompleto.
// Como essa lógica poderia ser implementada com if, &&, || e !?
let idade2 = 18
let urgencia = true
let cadastroCompleto = false
if ((idade2 >= 18 || urgencia) && cadastroCompleto) {
    console.log("Pode ser atendido")
} else {
    console.log("Não pode ser atendido")
}

// ESTUDO DE Loops (for, while e do while) Estruturas de repetição

for (let i = 0; i < 5; i++) { console.log("Olá, Mundo!"); }


// Não sei o que é isso aí
var listFruits = ['Apple', 'Watermelon', 'Blueberry', 'Pineapple']

listFruits.forEach(fruit => {
    console.log(`${fruit} is very good`);
});