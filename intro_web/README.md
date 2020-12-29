# LAUNCHBASE - ROCKETSEAT - INTRODUCAO A WEB

Este README ira ajudar a entender o que sera abordado nesse capitulo, sem misturar codigo com anotacoes.

## Links para os desafios
[Desafio 1-1](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md)
[Desafio 1-2](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md)
[Desafio 1-3](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md)

## Criacao de variavel tipo string
```javascript
const nome = 'Teste'
const nome2 = "Silva"
const nome3 = `${nome} da ${nome2}`
```
Posso criar uma string com aspas simples, duplas ou acento grave
O acento grave cria uma *template string*, que permite colocar variaveis dentro dela.

## Criacao de variavel tipo number
```javascript
const numero = 7.2
const numero2 = 3.5
const media = (numero + numero2) / 2
```

## Mostrar variavel
```javascript
const nome = 'Teste'
console.log(nome)
```

## Mostrar tipo de variavel
```javascript
const variavel = 10
console.log(typeof variavel)
```

## Comentarios no codigo
```javascript
// Isto eh um comentario
```

## Condicionais
```javascript
const media = 5

if (media > 5) {
    console.log(`A nota foi maior que 5. Parabens!`)
} else {
    console.log(`A nota foi manor que 5. Estude mais!`)
}
```

## Operadores comparativos
| Operador | Significado
| -------- | -----------
| >        | Maior que 
| <        | Menor que 
| >=       | Maior ou igual a
| <=       | Menor ou igual a
| ==       | Igual a
| ===      | Igual e do mesmo tipo
| !=       | Diferente de
| !==      | Diferente de, inclusive do tipo

## Operadores logicos
| Operador | Significado
| -------- | -----------
| &&       | "E"
| \|\|     | "OU"
| !        | "NAO"

## Operadores aritmeticos
| Operador | Significado
| -------- | -----------
| *        | Multiplicacao
| /        | Divisao
| %        | Resto da divisao (modulo)
| +        | Adicao
| -        | Subtracao

## Objetos (Hashes)
```javascript
const aluno01 = {
    nome: "Teste",
    nota: 10
}
```

## Vetores (Arrays)
```javascript
const alunos = [
    {
        nome: "Teste",
        nota: 10
    },
    {
        nome: "Teste2",
        nota: 9.8
    }
]
```

## Funcoes
```javascript
function dobro(numero) {
    resultado = (numero * 2)
    console.log(resultado)
}

dobro(3)
```

FUNCOES TAMBEM PODEM APENAS GUARDAR O RESULTADO PARA SER USADO DEPOIS, EX
```javascript
function dobro(numero) {
    return (numero * 2)
}

resultado = dobro(4)
console.log(resultado)
```

## Estruturas de Repeticao
```javascript
console.log("Estou contando...")

for (let i = 0; i < 3; i++) {
    console.log(i)
}

console.log("Terminei!")

// Usei o "let" dentro do "for" pois o valor da minha variavel "i" vai mudar
// Com "const" isso nao eh possivel
```