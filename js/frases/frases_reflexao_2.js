var mensagem_1 = [   
   "Numa vila cercada por montanhas, um sábio ancião compartilhava lições sobre a importância de viver o momento presente. Um jovem angustiado com o futuro buscou orientação com o sábio. Sob uma árvore antiga, o sábio começou sua narrativa.",
   "Ele contou sobre um pássaro sempre em busca de um lugar mais alto para descansar. O pássaro, exausto, finalmente pousou em um galho próximo e percebeu a beleza ao seu redor.",   
   "Assim como o pássaro, o sábio explicou ao jovem sobre apreciar as maravilhas do presente. O jovem aprendeu a encontrar serenidade no aqui e agora, cultivando uma nova perspectiva baseada na gratidão.",
   "<h5 class='text-center text-info'>Encontrando a Serenidade no momento Presente 🌿</h5>",
];


var mensagem_2 = [
   "Ao virar a esquina, ela se deparou com um livro esquecido no chão. Um livro que seria sua porta de entrada para um mundo de magia e mistério 📚",
   "A luz da lua iluminou um antigo baú no sótão, revelando segredos guardados por gerações 🌙",
   "No fundo da gaveta, ela encontrou uma carta amarelada, escrita décadas atrás, contendo palavras que ecoavam com sua própria jornada 💌",
   "Ao abrir a janela, ele foi saudado por uma brisa fresca carregada de promessas de aventuras desconhecidas 💨",
   "Um bilhete perdido no bolso de sua jaqueta desencadeou uma jornada que o levaria aos confins da terra e além 🎫",
   "Na velha caixa de recordações, ela descobriu uma fotografia antiga que capturava um momento de pura felicidade, acendendo uma chama de nostalgia e inspiração 📷",
   "Uma trilha escondida na floresta levou-o a um lugar esquecido pelo tempo, onde segredos ancestrais aguardavam para serem revelados 🌳",
   "A descoberta de um diário empoeirado revelou os pensamentos mais íntimos de alguém que uma vez caminhou pelos mesmos caminhos que ele agora trilhava 📔",
   "Um bilhete de trem encontrado em um banco de parque desencadeou uma jornada que o levaria a encontrar não apenas novos destinos, mas também a si mesmo 🚂",
   "No sótão empoeirado, ela descobriu uma caixa de música antiga, cujas melodias desencadearam memórias há muito esquecidas 🎶",
   "Um raio de sol atravessou a cortina, iluminando uma pintura esquecida na parede, revelando uma paisagem de sonhos e aventuras 🌞",
   "Uma simples concha encontrada na praia desencadeou uma jornada para além das ondas, onde segredos marinhos aguardavam para serem revelados 🐚",
   "Um mapa antigo encontrado no sótão desvendou um tesouro enterrado há muito tempo, desencadeando uma busca cheia de perigos e revelações surpreendentes 🗺️",
   "<h5 class='text-center text-info'> Portais da Descoberta: <br>Jornadas Desencadeadas por Relíquias Esquecidas 🌟</h5>",
];

mensagem_3 = [
   "O caminho para a sabedoria começa com a humildade de reconhecer que sempre há mais a aprender. 🌱",
   "Nossas cicatrizes não definem quem somos, mas sim as histórias que escolhemos contar sobre elas. 🌟",
   "Às vezes, o silêncio diz mais do que mil palavras, pois é nele que encontramos a verdadeira essência de nós mesmos. 🌿",
   "A jornada da vida não é medida pelo número de passos que damos, mas sim pelos momentos que nos deixam sem fôlego. 🌄",
   "A beleza está nos olhos de quem vê, mas a verdadeira beleza reside na capacidade de enxergar além das aparências. 💫",
   "Não podemos controlar as ondas que nos atingem, mas podemos aprender a surfar sobre elas e encontrar nosso equilíbrio. 🌊",
   "Às vezes, é preciso se perder para se encontrar verdadeiramente. 🌌",
   "A gratidão é a chave que abre a porta para a felicidade duradoura. 🙏",
   "A força não está em nunca cair, mas sim em levantar-se cada vez que caímos. 💪",
   "O tempo é um presente precioso que devemos gastar com sabedoria, pois é o único recurso que nunca poderemos recuperar. ⏳",
   "<h5 class='text-center text-info'>Sábias Reflexões para a Jornada da Vida 🌟</h5>",
]

var indice_atual_1 = -1;
var indice_atual_2 = -1;
var indice_atual_3 = -1;

function proxima_mensagem_1() {
   mensagens = mensagem_1; 
   indice_atual_1++;
   if (indice_atual_1 >= mensagens.length) {
      indice_atual_1 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("mensagem_1").innerHTML =  mensagens[indice_atual_1];   
}

function proxima_mensagem_2() {
   mensagens = mensagem_2; 
   indice_atual_2++; 
   if (indice_atual_2 >= mensagens.length) {
      indice_atual_2 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("mensagem_2").innerHTML =  mensagens[indice_atual_2];   
}

function proxima_mensagem_3() {
   mensagens = mensagem_3; 
   indice_atual_3++; 
   if (indice_atual_3 >= mensagens.length) {
      indice_atual_3 = 0; 
   }
   document.getElementById("mensagem_3").innerHTML =  mensagens[indice_atual_3];   
}