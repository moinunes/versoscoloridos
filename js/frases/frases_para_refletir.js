mensagem_1 = [
   "<h5 class='text-center text-info'>Caminhos da Reflexão: Inspirações para uma Vida Significativa🌟</h5>",    
   "A vida é uma jornada, não um destino. 🌟",
   "Às vezes, é preciso olhar para trás para entender o caminho à frente. 🔄",
   "As dificuldades são oportunidades para crescer e aprender. 🌱",
   "Não há atalhos para qualquer lugar que valha a pena ir. 🛣️",
   "A verdadeira sabedoria está em reconhecer a própria ignorância. 🧠",
   "A gratidão transforma o que temos em suficiente. 🙏",
   "O sucesso não é medido pelo que você conquista, mas pelo que você supera. 🏆",
   "A jornada de mil milhas começa com um único passo. 👣",
   "Às vezes, a maior bênção é não conseguir o que você quer. 🎁",
   "O maior poder está em ser paciente enquanto tudo se desenrola. ⏳",
]



var mensagem_2 = [
   "<h5 class='text-center text-info'> Portais da Descoberta: <br>Jornadas Desencadeadas por Relíquias Esquecidas 🌟</h5>",
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
   
];

mensagem_3 = [
   "<h5 class='text-center text-info'>Sábias Reflexões para a Jornada da Vida 🌟</h5>",
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
   
]

var mensagem_4 = [   
   "<h5 class='text-center text-info'>Semeando Amor e Paz: <br>Reflexões para o Coração 💖</h5>",
   "No jardim da vida, plante as flores do amor e colha a paz como recompensa. 🌺",
   "O amor é a essência da paz, transformando cada encontro em uma celebração da vida. ❤️",
   "Seja a luz que guia os outros através do labirinto da escuridão, irradiando amor, paz e positividade. 💡",
   "A compreensão é a linguagem universal que transcende diferenças, fortalecendo os laços de amor em uma rede de paz. 🤝",
   "No silêncio, descobrimos a paz que reside em nossa essência, alimentando o amor que nos transborda. 🤫",
   "Espalhe sementes de positividade, e verá como o jardim da sua vida se transforma em um paraíso de amor e paz. 🌱",
   "A serenidade é a respiração da alma, preenchendo cada espaço vazio com a essência do amor.  💕",
   "Ao ser um farol de positividade, você guia os outros para o porto seguro da paz e do amor pleno.  ✨",
   "É apenas por falta de amor que, muitas vezes, julgamos ter encontrado a paz. 💔🕊️",
   "Onde há amor… há paz. Onde há paz… há fé. Onde há fé, há Deus… E onde há Deus, nada faltará!🕊️ ",
   
];



var indice_atual_1 = -1;
var indice_atual_2 = -1;
var indice_atual_3 = -1;
var indice_atual_4 = -1;

$('html, body').animate({
   scrollTop: 0
}, 700);

function proxima_mensagem_1() {
   mensagens = mensagem_1; 
   indice_atual_1++;
   if (indice_atual_1 >= mensagens.length) {
      indice_atual_1 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_1];   
}


function proxima_mensagem_2() {
   mensagens = mensagem_2; 
   indice_atual_2++; 
   if (indice_atual_2 >= mensagens.length) {
      indice_atual_2 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_2];   
}

function proxima_mensagem_3() {
   mensagens = mensagem_3; 
   indice_atual_3++; 
   if (indice_atual_3 >= mensagens.length) {
      indice_atual_3 = 0; 
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_3];   
}

function proxima_mensagem_4() {
   mensagens = mensagem_4; 
   indice_atual_4++; 
   if (indice_atual_4 >= mensagens.length) {
      indice_atual_4 = 0; 
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_4];   
}

var modo = new URLSearchParams(window.location.search).get('modo');

function avancarParaProximaMensagem() {
   switch (modo) {
       case '1':
             proxima_mensagem_1();
             break;
       case '2': 
             proxima_mensagem_2();
             break;
       case '3':
             proxima_mensagem_3();
             break;
       case '4':
             proxima_mensagem_4();
             break;
       default:
             console.error('Número de mensagem inválido:', numeroMensagem);
   }
} 

// Selecione o link correspondente ao modo atual e adicione a classe btn-primary
if (modo === '1') {
    document.querySelector('a[href="/refletir/frases_para_refletir.html?modo=1"]').classList.add('btn-primary');
} else if (modo === '2') {
    document.querySelector('a[href="/refletir/frases_para_refletir.html?modo=2"]').classList.add('btn-primary');
} else if (modo === '3') {
    document.querySelector('a[href="/refletir/frases_para_refletir.html?modo=3"]').classList.add('btn-primary');
} else if (modo === '4') {
    document.querySelector('a[href="/refletir/frases_para_refletir.html?modo=4"]').classList.add('btn-primary');
}