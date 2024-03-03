// Array com as mensagens
var mensagens = [
   "Num parque ensolarado, Maria viu crianças brincando. Seus risos eram como música para sua alma cansada. Na simplicidade daquela cena, encontrou a lembrança preciosa de que a verdadeira felicidade reside nos momentos simples da vida. 🌞",
   "Na beira de um rio sereno, uma pessoa se senta e observa a correnteza suave que flui diante dela. Enquanto contempla a água que segue seu curso, uma sensação de paz e serenidade a envolve. Nesse momento de quietude, ela deixa de lado as preocupações do dia a dia e se permite simplesmente sentir: a calma do ambiente, a leveza do ar e a harmonia que existe na natureza. E, por um instante, tudo está bem no mundo. 🌿",
   "Num parque tranquilo, sob a sombra de uma árvore frondosa, uma pessoa fecha os olhos e respira profundamente. No ar fresco da manhã, ela sente uma onda de gratidão e contentamento se espalhando por todo o seu ser. Cada inspiração traz consigo uma sensação de paz interior, enquanto cada expiração libera qualquer tensão acumulada. Nesse momento de conexão consigo mesma e com o mundo ao seu redor, ela se sente completa e em harmonia com o universo. 🌳",
];

// Variável para rastrear o índice da mensagem atual
var indiceAtual = 0;

// Função para exibir a próxima mensagem
function proximaMensagem() {
   indiceAtual++; // Incrementa o índice
   if (indiceAtual >= mensagens.length) {
      indiceAtual = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("mensagem").innerHTML = mensagens[indiceAtual]; // Exibe a próxima mensagem
}