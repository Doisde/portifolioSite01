const form = document.getElementById('cadastro-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;

    // Verificar se os campos estão preenchidos
    if (nome && email && senha && telefone) {
        // Enviar dados para o servidor (ou fazer algo com os dados)
        console.log('Dados enviados com sucesso!');
        console.log(`Nome: ${nome}`);
        console.log(`E-mail: ${email}`);
        console.log(`Senha: ${senha}`);
        console.log(`Telefone: ${telefone}`);
    } else {
        alert('Preencha todos os campos!');
    }
});