const btn = document.getElementById("btn-add");
const text = document.getElementById("text");
const erro = document.getElementById("erro");
const dados = [];
let mensagemErro = null;

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Pega os inputs
    const inputNome = document.getElementById("name");
    const inputSobrenome = document.getElementById("sobrenome");
    const inputIdade = document.getElementById("idade");
    const inputEndereco = document.getElementById("endereco");

    // Pega o valor dos inputs
    const nome = inputNome.value;
    const sobrenome = inputSobrenome.value;
    const idade = inputIdade.value;
    const endereco = inputEndereco.value;

    // Validação de preenchimento
    if (nome === "" || sobrenome === "" || idade === "" || endereco === "") {
        exibirMensagemErro("Preencha todos os campos");
        return;
    }

    // Remove a mensagem de erro, se existir
    if (mensagemErro) {
        mensagemErro.remove();
        mensagemErro = null;
    }

    // Armazena os valores dos inputs
    dados.push({ nome, sobrenome, idade, endereco });

    // Adiciona as ações da função mediante o clique
    renderLista();

    // Limpa os inputs
    inputNome.value = "";
    inputSobrenome.value = "";
    inputIdade.value = "";
    inputEndereco.value = "";
});

function exibirMensagemErro(mensagem) {
    if (!mensagemErro) {
        mensagemErro = document.createElement("p");
        mensagemErro.textContent = mensagem;
        mensagemErro.style.color = "red";
        erro.appendChild(mensagemErro);
    }
}

function renderLista() {
    text.innerHTML = "";

    dados.forEach((item, index) => {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = `Nome: ${item.nome}, Sobrenome: ${item.sobrenome}`;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener('click', () => {
            removeItem(index);
        });

        novoParagrafo.appendChild(btnRemover);
        text.appendChild(novoParagrafo);
    });
}

function removeItem(index) {
    dados.splice(index, 1);
    renderLista();
}
