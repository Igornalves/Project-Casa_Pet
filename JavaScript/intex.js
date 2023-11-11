const formulario = document.getElementById("#formulario-voluntario");
const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");
const email = document.getElementById("email");
const formacao = document.getElementById("formacao");
const disponibilidade = document.getElementById("disponibilidade");
const mensagem = document.getElementById("msg");
const telefone = document.getElementById("telefone")

// console.log(formulario,  nascimento, nome, email, disponibilidade, telefone, mensagem, formacao);

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    checkFomulario();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

nome.addEventListener("blur", () => {
    checkInputNome();
})

function checkInputNome() {
    const nomeValue = nome.value;

    if (nomeValue === "") {
        errorInput(nome, "Preencha o seu nome !!!")
    } else {
        const formItem = nome.parentElement;
        formItem.className = "input-div"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "input-div"
    }
}

function checkForm(){
    checkInputNome();
    checkInputEmail();
  
    const formularioItems = formulario.querySelectorAll("#formulario-voluntario")
  
    const isValid = [...formularioItems].every( (item) => {
      return item.className === "formulario-voluntario"
    });
  
    if(isValid){
      alert("CADASTRADO COM SUCESSO!")
    }
  
  }
  