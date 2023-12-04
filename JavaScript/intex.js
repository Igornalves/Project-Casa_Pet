const formulario = document.getElementById("formulario-voluntario");
const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");
const email = document.getElementById("email");
const formacao = document.getElementById("formacao");
const disponibilidade = document.getElementById("disponibilidade");
const mensagem = document.getElementById("msg");
const telefone = document.getElementById("telefone")

//console.log(formulario,  nascimento, nome, email, disponibilidade, telefone, mensagem, formacao);

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputFormulario();
})

formacao.addEventListener("blur", ()=>{
    checkInputformacao();
})

telefone.addEventListener("blur", ()=>{
    checkInputTelefone();
})

nascimento.addEventListener("blur", ()=>{
    checkInputNascimento();
})

email.addEventListener("blur", () =>{
    checkInputEmail();
})

nome.addEventListener("blur", () => {
    checkInputNome();
})

function checkInputformacao(){
    const formacaoInput = formacao.value;

    if (formacaoInput === "") {
        alert("POR FAVOR DIGITE SUA FORMAÇÃO PARA QUE POSSAMOS PROSSEGUI COM O FORMULARIO")
        return;
    }
}

function checkInputTelefone(){
    const telefoneInput = telefone.value;

    if (telefoneInput === "" || !validacaoTelefone(telefoneInput)) {
        alert("POR FAVOR DIGITE SEU TELEFONE PARA QUE POSSAMOS PROSSEGUI COM O FORMULARIO")
        return;
    }
}

function validacaoTelefone(){
    const telefoneRegex = new RegExp(
        /^((1[1-9])|([2-9][0-9]))((3[0-9]{4}[0-9]{4})|(9[0-9]{5}[0-9]{4}))$$/
    );

    if (telefoneRegex.test(telefone)) {
        console.log("este numero é valido pode prossegui com formulario");
        return true;
    }

    console.log("este numero não é valido");
    return false;
}

function checkInputNascimento(){
    const nascimentoInput = nascimento.value;

    if (nascimentoInput === "") {
        alert("POR FAVOR DIGITE SUA DATA DE NASCIMENTO PARA QUE POSSAMOS PROSSEGUI COM O FORMULARIO")
        return;
    }
}

function checkInputNome() {
    const nomeInput = nome.value;

    if (nomeInput === "") {
        alert("POR FAVOR DIGITE O EU NOME PARA QUE POSSAMOS PROSSEGUI COM O FORMULARIO")
        return;
    } 

}

function checkInputEmail() {
    const emailInput = email.value;

    if (emailInput === "" || !isEmailValid(emailInput)) {
        alert("POR FAVOR DIGITE SEU EMAIL PARA QUE POSSAMOS PROSSEGUI COM O FORMULARIO")
        return;
    } 
}

function isEmailValid(email){
    const emailRegex=new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        // alert("EMAIL VALIDO COM SUCESSO");
        console.log("valido com sucesso !!!")
        return true;
    }

    // alert("VOCÊ NÃO DIGITOU O SEU EMAIL CORRETAMENTE POR FAVOR INSIRA PARA QUE POSSAMOS PROSSEGUIR");
    console.log("não é valido este email !!! rescrever o email para que funcine e possa prosseguir")
    return false;
}

function checkInputFormulario() {
    checkInputNome();
    checkInputEmail();
    isEmailValid();
    checkInputNascimento();
    checkInputTelefone();

    const formularioItems = formulario.querySelectorAll("#formulario-voluntario")

    const isValid = [...formularioItems].every((item) => {
        return item.className === "#formulario-voluntario"
    });

    if (isValid == true) {
        alert("CADASTRADO ENVIADO COM SUCESSO!!!")
        // window.location.href= "/Casa-pet/thanks.html";
        // window.location.href= "https://jallsbr.github.io/Casa-pet/thanks.html";
        return;
    }

    else if (isValid == false) {
        alert("CADASTRO NÃO ENVIADO CONCLUIDO COM SUCESSO")
    }
}
