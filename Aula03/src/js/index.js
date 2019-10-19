/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
    {
        nome: 'Arthur',
        telefone: '23456873254',
        email: 'arthurwat@gmail.com',
        dataNascimento: '27/03/1991'
    }
];
renderizarTabelaContatos();
function salvarContato(event) {
    // Inibe a recarga da página
    event.preventDefault();

    /**
     * $ -> document.querySelector
     * val() -> value
     */
    // Recupera os valores do formulário
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    // Invoca a renderização da tabela
    renderizarTabelaContatos();
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('listagemContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /*
        areaListagemContatos.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Data Nasc.</th>
                    </tr>
                </thead>
            </table>
        `;
        */

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criaCabecalhoTabela();


        // Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela();
        //adiciona o corpo da tabela na tabela
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }

    function criaCabecalhoTabela(){
        /**
         * Cria o cabeçalho da tabela
         */
        let cabecalho = document.createElement('thead');
        let linhaCabecalho = document.createElement('tr');
        let colunaNome = document.createElement('th');
        colunaNome.innerText = 'Nome';
        let colunaTelefone = document.createElement('th');
        colunaTelefone.innerText = 'Telefone';
        let colunaEmail = document.createElement('th');
        colunaEmail.innerText = 'E-mail';
        let colunaDataNasc = document.createElement('th');
        colunaDataNasc.innerText = 'Data Nasc.';

        // Adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaNome);
        linhaCabecalho.appendChild(colunaTelefone);
        linhaCabecalho.appendChild(colunaEmail);
        linhaCabecalho.appendChild(colunaDataNasc);

        // Adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        //retorna o cabeçalho criado
        return cabecalho;
    }
}

function criarCorpoTabela(){
    //cria o corpo da tabela
    let corpoTabela = document.createElement('tbody');

    //cria as linhas de contatos
    for (let i = 0; i < contatos.length; i++) {
        //cria uma nova linha no corpo tabela
        let linha = document.createElement('tr');
        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        //adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);

    }

    return corpoTabela;
}