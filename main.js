const red = '#D20528';
const green = '#4ff418';
const yellow = "#efca08";
const orange = "#f49f0a";
const grey = "#b5c9c2";

function validaCampos() {
    if (validaNome() &&
        validaEmail() &&
        validaTelefone() &&
        validaMsg()
    ) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("mensagem").value = "";
    } else {
        alert("Preencha as informações corretamente!");
    }
};

function validaNome() {
    var campoNome = document.getElementById('nome').value
    if (campoNome == "") {
        document.getElementById("avisoNome").innerHTML = 'Insira seu nome, por favor!'
        document.getElementById("avisoNome").style.color = red;
        return false;
    } else {
        document.getElementById("avisoNome").innerHTML = ""
        return true;
    }
};

function validaEmail() {
    var campoEmail = document.getElementById('email').value
    if (campoEmail == "") {
        document.getElementById("avisoEmail").innerHTML = 'Insira seu email, por favor!'
        document.getElementById("avisoEmail").style.color = red;
        return false;
    } else {
        document.getElementById("avisoEmail").innerHTML = ""
        return true;
    }
};

function validaTelefone() {
    var campoTelefone = document.getElementById('telefone').value
    if (campoTelefone == "") {
        document.getElementById("avisoTelefone").innerHTML = 'Insira seu telefone, por favor!'
        document.getElementById("avisoTelefone").style.color = red;
        return false;
    } else {
        document.getElementById("avisoTelefone").innerHTML = ""
        return true;
    }
};

function validaMsg() {
    var campoMsg = document.getElementById('mensagem').value
    if (campoMsg == "") {
        document.getElementById("avisoMsg").innerHTML = 'Escreva sua mensagem, por favor!'
        document.getElementById("avisoMsg").style.color = red;
        return false;
    } else {
        document.getElementById("avisoMsg").innerHTML =  ""
        return true;
    }
};

//======================================================== IMC

function limpaCampos() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("aviso").innerHTML = "";
    document.getElementById("resultado").style.borderColor = null;;
};

function calculaImc() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    altura = altura / 100;
    var imc = peso / (altura * altura);
    imc = parseFloat(imc.toFixed(1));
    document.getElementById("resultado").value = imc;
    if (imc < 18.5) {
        document.getElementById("resultado").style.borderColor = red; //magreza
        document.getElementById("aviso").innerHTML = 'Você está muito magro!'
        document.getElementById("aviso").style.color = red;
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado").style.borderColor = green;
        document.getElementById("aviso").innerHTML = 'Tudo certo com você!' //normal
        document.getElementById("aviso").style.color = green;
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById("resultado").style.borderColor = yellow; //sobrepeso I
        document.getElementById("aviso").innerHTML = 'Você está acima do peso!'
        document.getElementById("aviso").style.color = yellow;
    } else if (imc >= 30.0 && imc <= 39.0) {
        document.getElementById("resultado").style.borderColor = orange; //obesidade II
        document.getElementById("aviso").innerHTML = 'Feche a boca! Coma menos!'
        document.getElementById("aviso").style.color = orange;
    } else if (imc >= 40.0) {
        document.getElementById("resultado").style.borderColor = red; //obesidade grave III
        document.getElementById("aviso").innerHTML = 'Já encomenda o caixão de aço!'
        document.getElementById("aviso").style.color = red;
    }
}

var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        } 