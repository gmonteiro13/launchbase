//Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "Silvana";
const sexo = "F";
const idade = 58;
const contribuicao = 27;

if (sexo == "M"){
    if ((idade + contribuicao) >= 95 ){
        console.log(`${nome}, voce pode se aposentar.`)
    } else {
        console.log(`${nome}, voce nao pode se aposentar.`)
    }
} else if (sexo == "F") {
    if ((idade + contribuicao) >= 85 ){
        console.log(`${nome}, voce pode se aposentar.`)
    } else {
        console.log(`${nome}, voce nao pode se aposentar.`)
    }
}
