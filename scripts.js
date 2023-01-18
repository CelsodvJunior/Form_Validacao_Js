const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('job')
const messageTextarea = document.querySelector('message')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if(nameInput.value === "") {
        alert('Por favor, preencha o campo nome!')
        return;
    }

    // Verificar se o email está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha o compo e-mail, com um e-mail válido')
        return;
    }

    // Verificar se á senha está preencida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa de no mínimo 8 dígitos...")
    }


    // Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert('Por favor, selecione a sua situação...');
        return;
    }



    // Se todos os campos estiverem preenchidos, envie o form
    form.submit();
});

function isEmailValid(email) {
    //Criar umna regex para validar email

    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        // Senha válida
        return true;
    } else {
        return false;
    }
}