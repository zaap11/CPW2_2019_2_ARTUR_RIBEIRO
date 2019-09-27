function concatenar(){
    let palavra1 = document.getElementById('palavra1').value;
    let palavra2 = document.getElementById('palavra2').value;
    let mensagem = palavra1 && palavra2 ? `Palavras Contatenadas: ${palavra1}${palavra2}`: '';
    document.getElementById('mensagem').innerHTML = mensagem;

}
