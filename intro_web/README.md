# LAUNCHBASE - ROCKETSEAT - INTRODUCAO A WEB

Este README ira ajudar a entender o que sera abordado nesse capitulo, sem misturar codigo com anotacoes.

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
console.log(nome)
```

## Mostrar tipo de variavel
```javascript
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
| ||       | "OU"
| !        | "NAO"

## Operadores aritmeticos
| Operador | Significado
| -------- | -----------
| *        | Multiplicacao
| /        | Divisao
| %        | Resto da divisao (modulo)
| +        | Adicao
| -        | Subtracao