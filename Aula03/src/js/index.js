/**
 * nossso bando de daos fake !
 * (in memoru DB)
 */

var contatos = [];
var $ = document.querySelector;

function salvarContato(event){
    //evita a recarga da pagina
    event.preventDefault();

    //recupera os valores do formulario
    let nome = $('#nome').value;
    let telefone = $('telefone').value;
    let email = $('email').value;
    let dataNascimento = $('#dataNascimento').value;
}

//criar um objeto de contato
let contato = {
    nome,
    telefone,
    email,
    dataNascimento
};

//Adiciona o conta no noddo BF (no Final do vetor)
contatos.push(contato);

//invoca a renderização da tabela
renderizarTabelaContatos();

function renderizarTabelaContatos(){
    if(contatos.length > 0) {
        let areaListagemContatos =  document.getElementById('listagemContatos');
        //limpa a área de listagem
        
        areaListagemContatos.innerHTML='';

        //cria a tabela
        let tabela = document.createElement('table');
        //cria o cabeçalho ta tabela
        let cabecalho = document.createElement('thead');
        let linhaCabecalho = document.createElement('tr');
        let colunaNome = document.createElement('th');
        colunaNome.innerText = 'Nome';
        let colunaTel = document.createElement('th');
        colunaTel.innerText = 'Tel';
        let colunaEmail = document.createElement('th');
        colunaEmail.innerText = 'E-mail';
        let colunaDataNasc = document.createElement('th');
        colunaDataNasc.innerText = 'Data Nasc.';

        //adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaNome);
        linhaCabecalho.appendChild(colunaTel);
        linhaCabecalho.appendChild(colunaEmail);
        linhaCabecalho.appendChild(colunaDataNasc);

        //adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        //adiciona dentro da table
        tabela.appendChild(cabecalho);

        //adiciona tabela na área de listagem
        areaListagemContatos.appendChild(tabela)
    }
}