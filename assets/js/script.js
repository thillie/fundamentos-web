
/*
Case Sensitive = reconhece letras maiusculas e minusculas
por tag: getElementyByTagName()
por Id: getElementyById ()
por Nome: getElementyByName()
por Classe: getElementyByClassName()
por Seletor: querySelector()
 */

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'orange'
    }else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'blue'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'blue'
    }else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'orange'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#assunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    }else {
        alert ('Preencha o formulário corretamente')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}