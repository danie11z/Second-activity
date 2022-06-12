let age = 19

if(age > 18){
    console.log('Sua idade é maior que dezoito')
}else{
    console.log('Sua idade é menor ou igual a 18')
}

let idade = 18
let human = true

if(age >= 18 && human == true){
    console.log('Você é um humano adulto')
}else{
    console.log('Você não é maior de idade ou não é humano')
}

let birthday = 1

if(birthday==1 || birthday==12){
    console.log('Seu aniversário é em Janeiro ou em Dezembro')
}else{
    console.log('Seu aniversário não é em Janeiro e nem em Dezembro')
}

let nome = 'Daniel'

if(nome.startsWith('R')){
    console.log('Seu nome começa com R')
}else{
    console.log('Seu nome não começa com R')
}

let segundoNome = 'Daniel'
let sobrenomeSegundoNome = 'Lopes'

if(sobrenomeSegundoNome.length > 6 || segundoNome.startsWith('E')){
    console.log('Seu sobrenome tem mais que seis letras e/ou seu nome começa com E')
}else{
    console.log('Seu sobrenome tem mais que seis letras e seu nome não começa com E')
}