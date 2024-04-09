mensagem_1 = [
   "<h5 class='text-center text-info'>Caminhos da Reflexão:<br> Inspirações para uma Vida Significativa🌟</h5>",    
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
   "<h5 class='text-center text-info'> 17 Reflexões Inspiradoras: 🌟</h5>",
   "A verdadeira liberdade está em ser você mesmo, sem medo ou hesitação. 🦋",
   "Não espere por uma crise para descobrir o que é importante em sua vida. ⏳",
   "Nas dificuldades da vida, descobrimos a nossa verdadeira força interior. 💪",
   "A verdadeira riqueza está nas experiências que acumulamos e não nos bens materiais que possuímos. ✨",
   "Colecione memórias e acumule sorrisos. Todo o resto é passageiro. 📸",
   "Não espere por circunstâncias ideais para agir, faça o seu melhor com o que você tem. 🌟",
   "A vida é curta demais para gastar tempo se preocupando com coisas que estão além do nosso controle. 🌿",
   "A maior prisão que as pessoas vivem é o medo do que os outros pensam. 🗝️",
   "A vida é uma balança entre aceitar o que não podemos mudar e ter coragem para mudar o que podemos. ⚖️",
   "Amar alguém é aceitá-lo com todas as suas imperfeições e ainda assim vê-lo como perfeito. ❤️",
   "O amor não é medido pelo tempo que passamos juntos, mas pela qualidade dos momentos compartilhados. ⏱️",
   "Deus obrigado pelo amanhecer, por ter cuidado da minha noite, que esse dia seja recheado de amor e benção. 🙏",
   "Se estivermos atentos, a presença de Deus se revela nas pequenas coisas. 🙏",
   "Os obstáculos são apenas oportunidades disfarçadas para deixar você mais forte. Não desista. 🏔️",
   "As melhores oportunidades aparecem quando você menos espera. 🌈",
   "A fé não é sobre entender tudo, mas sobre confiar mesmo quando não entendemos. 🌟",
   "A família é onde a vida começa e onde o amor nunca termina. 👨‍👩‍👧‍👦",
   
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

function proxima_mensagem_1(_indice) {   
   mensagens = mensagem_1; 
   indice_atual_1 = (_indice === undefined) ? indice_atual_1 + 1 : 0;
   if (indice_atual_1 >= mensagens.length) {
      indice_atual_1 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_1];   
}


function proxima_mensagem_2(_indice) {
   mensagens = mensagem_2; 
   indice_atual_2 = (_indice === undefined) ? indice_atual_2 + 1 : 0;
   if (indice_atual_2 >= mensagens.length) {
      indice_atual_2 = 0; // Volta para o início do array se atingir o final
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_2];   
}

function proxima_mensagem_3(_indice) {
   mensagens = mensagem_3;
   indice_atual_3 = (_indice === undefined) ? indice_atual_3 + 1 : 0;
   if (indice_atual_3 >= mensagens.length) {
      indice_atual_3 = 0; 
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_3];   
}

function proxima_mensagem_4(_indice) {
   mensagens = mensagem_4; 
   indice_atual_4 = (_indice === undefined) ? indice_atual_4 + 1 : 0;
   if (indice_atual_4 >= mensagens.length) {
      indice_atual_4 = 0; 
   }
   document.getElementById("div_mensagem").innerHTML =  mensagens[indice_atual_4];   
}

var modo = new URLSearchParams(window.location.search).get('modo');

function avancarParaProximaMensagem(_indice) { 
   switch (modo) {
       case '1':
             proxima_mensagem_1(_indice);
             break;
       case '2': 
             proxima_mensagem_2(_indice);
             break;
       case '3':
             proxima_mensagem_3(_indice);
             break;
       case '4':
             proxima_mensagem_4(_indice);
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


/*-------------------------------------------------------------
* obter a frase de forma cíclica
*-------------------------------------------------------------*/ 
var frases_1 = [
   "🚀 O segredo da felicidade está em fazer o que se gosta como se fosse um dever. ",
   "💧 A felicidade é a única coisa que podemos dar sem possuir. <br> <span class='small'>- Voltaire</span>",
   "🌟 O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. <br> <span class='small'>- Winston Churchill</span>",
   "Nossas escolhas moldam nosso destino, mas é nossa atitude que define nossa jornada. 🌟",
   "Às vezes, o silêncio diz mais do que mil palavras. 🤫",
   "A verdadeira felicidade não está em ter tudo, mas em apreciar tudo o que se tem. ❤️",
   "Nunca é tarde demais para começar de novo e criar o futuro que desejamos. 🌈",
   "O maior tesouro que podemos acumular não está em nossos bolsos, mas sim em nossos corações. 💖",
   "O que você pensa, você se torna. O que você sente, você atrai. O que você imagina, você cria.🌟",
   "Lembre-se sempre de que cada dia é uma nova oportunidade para crescer, aprender e se inspirar. 🌿",
   "Nunca subestime o poder de um simples ato de bondade. Pode mudar vidas e até o mundo. 💖",
   "O tempo gasto com as pessoas que amamos é o verdadeiro tesouro da vida. ⏳",
   "O perdão não é apenas para aqueles que erram, mas também para aqueles que sabem perdoar. 🙏",
   "A gratidão transforma o que temos em suficiente e mais. 🙌",
   "Às vezes, é preciso perder-se para se encontrar. 🛤️",
];

var frases_2 = [
   "🍃 A vida é o que acontece enquanto você está ocupado fazendo outros planos. <br> <span class='small'>- John Lennon</span>",
   "🌸 A beleza está nos olhos de quem vê.",
   "🌈 A vida é curta demais para ser pequena.",
   "A adversidade revela o verdadeiro caráter de uma pessoa. 💪",
   "O perdão liberta tanto o perdoado quanto o que perdoa. 🕊️",
   "A gratidão transforma o que temos em suficiente e mais. 🙏",
   "Às vezes, o maior crescimento vem das experiências mais difíceis. 🌱",
   "A jornada da vida é uma combinação de altos e baixos; é como dançar na chuva enquanto esperamos pelo arco-íris. 🌧️",
   "A vida é como uma câmera. Foque no que é importante, capture bons momentos e, se as coisas não saírem como você queria, tire outra foto. 📸",
   "A felicidade não é algo pronto. Ela vem de suas próprias ações. 😊",
   "Ame profundamente e ria alto. Você pode se machucar, mas é a única maneira de viver a vida completamente. ❤️",
   "Às vezes, a jornada para encontrar a paz interior é mais importante do que o destino. 🌿",
   "A verdadeira força não está em nunca cair, mas em levantar-se sempre após cada queda. 💪",
   "A mente é como um pássaro, sempre voando entre o passado e o futuro. A verdadeira paz está no momento presente.🕊️",
   "O sucesso é medido não apenas pelo que alcançamos, mas também pelo impacto que temos sobre os outros. 🌟",
   "A verdadeira liberdade está em ser quem você realmente é, sem se preocupar com o julgamento dos outros. 🦋",
]; 


function obterFrase_1() {
   let frases = frases_1.concat(frases_2);   
   let frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   let segundoAtual = new Date().getSeconds();
   let indiceFrase = segundoAtual % frases.length;
   let fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}
function obterFrase_2() {
   let frases = frases_2.concat(frases_1);
   let frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   let segundoAtual = new Date().getSeconds();
   let indiceFrase = segundoAtual % frases.length;
   let fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}