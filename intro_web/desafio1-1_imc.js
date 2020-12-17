// Crie um programa para calcular o IMC e nivel de obesidade de uma pessoa.

const nome = "Carlos";
const peso = 112;
const altura = 1.88;
const IMC = peso / (altura * altura);

if (IMC >= 30){
    console.log(`${nome}, voce esta acima do peso`)
} else {
    console.log(`${nome}, voce nao esta acima do peso`)
}
