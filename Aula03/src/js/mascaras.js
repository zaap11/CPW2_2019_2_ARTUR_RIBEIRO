/*utilizaremos a variavel global do jquery ($) para carregar 
a mascara de telefone assim que a página for carregada */
$(document).ready(function() {
    //implementa a máscara de telefone
    // é a mesma coisa de: document.getElementById('telefone')
    $('#telefone').mask('(00) 00000-0000');
});