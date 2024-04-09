/*-------------------------------------------------------------
* Obter frase de forma cíclica
*-------------------------------------------------------------*/ 
function obter_frase() {   
   var frases = [
       "🌟 Acredite em você mesmo e tudo será possível.",
       "🚀 O que você faz hoje pode semear um futuro melhor amanhã.",
       "🕰️ Nunca é tarde demais para ser quem você poderia ter sido.",
       "🔍 O sucesso é a soma de pequenos esforços repetidos dia após dia.",
   ]; 
   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var indiceFrase = Math.floor(Math.random() * frases.length); // Obter um índice aleatório
   return frases[indiceFrase] || frase_padrao;
}

// Função para atualizar a frase a cada intervalo de tempo
function atualizarFraseAutomaticamente() {
   // Atualizar a frase
   document.getElementById('div_frase').innerHTML = obter_frase();
}

// Atualizar a frase inicialmente
atualizarFraseAutomaticamente();

// Definir intervalo para atualizar a frase automaticamente a cada 5 segundos (5000 milissegundos)
setInterval(atualizarFraseAutomaticamente, 5000);
