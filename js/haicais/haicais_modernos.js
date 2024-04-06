/*
10 "Haicai Moderno progressivo" 
tema: Gratidão e apreciação pelas pequenas coisas.
em forma de array separados com <br>, cada um com 1 emoji
*/

mensagem_1 = [
   "<h5 class='text-center text-info'>Suspiros de Paz: <br>10 Haicais <br>para a Paz Interior🌟</h5>",   
   "Vento sopra leve, <br> carregando suspiros suaves, <br> paz se faz presente. 🍃",
   "Estrelas brilham, <br> no céu noturno sereno, <br> tranquilidade reina. 🌟",
   "Silêncio profundo, <br> na floresta adormecida, <br> harmonia se expande. 🤫",
   "Corações unidos, <br> em um elo de compaixão, <br> paz se multiplica. ❤️",
   "No rio sereno, <br> reflexos da lua dançam, <br> serenidade flui. 🌊",
   "Pássaros no céu, <br> asas cortam o silêncio, <br> harmonia reina. 🕊️",
   "Árvores sussurram, <br> brisa acaricia o campo, <br> tranquilidade brota. 🌳",
   "No coração humano, <br> abraços se entrelaçam, <br> paz floresce, completa. 🤝",
   "Na praia deserta, <br> pegadas na areia branca, <br> silêncio ecoa. 🏖️",
   "No jardim tranquilo, <br> flores desabrocham suaves, <br> paz se renova. 🌺",   
      
] 

var mensagem_2 = [
   "<h5 class='text-center text-info'>10 Haicais<br> Motivacionais<br> para Inspirar o Seu Dia</h5>",
    "Desafios no ar,<br>Caminhos por descobrir,<br>Voe, ouse sonhar. ✈️",
    "Luz brilha dentro,<br>Força para seguir em frente,<br>Resplandece, alma. 💡",
    "Passos firmes avançam,<br>Objetivos à vista,<br>Conquistas à mão. 🚶",
    "Nas incertezas,<br>Oportunidades surgem,<br>Coragem nos guia. 🌟",
    "Cada tropeço,<br>Lições para aprender,<br>Fortalece o ser. 📚",
    "Amanhece novo,<br>Renovação no ar,<br>Potencial brota. 🌱",
    "Palavras de amor,<br>Gestos de solidariedade,<br>Mundo se transforma. ❤️",
    "Respire fundo agora,<br>Presente é um presente,<br>Viva cada instante. 🎁",
    "Resiliência é chave,<br>Nas adversidades, cresça,<br>Supere, floresça. 🌸",
    "Na jornada da vida,<br>Acredite em si mesmo,<br>Você é capaz. 🌍"
  ];

mensagem_3 = [
   "<h5 class='text-center text-info'>10 haicais <br> sobre amor<br>  e relacionamentos.💔</h5>",
   "Nos olhos dela,<br>Um universo se abre,<br>Amor em crescimento. 👀",
   "Mãos que se encontram,<br>Corações batem juntos,<br>Laços se fortalecem. ❤️",
   "Palavras doces voam,<br>Promessas de eternidade,<br>Amor se aprofunda. 🕊️",
   "Juntos, caminhamos,<br>Rindo nos altos e baixos,<br>Amor em movimento. 🚶‍♂️🚶‍♀️",
   "Sob o céu estrelado,<br>Abraços que aquecem almas,<br>Amor se expandindo. 🌌",
   "Momentos compartilhados,<br>Segredos e sorrisos,<br>Amor se fortifica. 🤫😊",
   "No silêncio da noite,<br>Sussurros de confiança,<br>Amor se solidifica. 🌙",
   "Erros são perdoados,<br>Compreensão e aceitação,<br>Amor em evolução. 💔➡️❤️",
   "Futuro se desdobra,<br>Planos se entrelaçam,<br>Amor se concretiza. 🎉🏠",
   "Em mãos dadas, dois,<br>Um para o outro, completos,<br>Amor em plenitude. 👫💖"
   
]

var mensagem_4 = [   
   "<h5 class='text-center text-info'>10 haicais<br>Beleza e simplicidade<br> da vida cotidiana💖</h5>",
   "Café quente ao sol,<br>Manhã tranquila desperta,<br>Simplicidade. ☕🌞",
   "Crianças brincando,<br>Risos enchem o ar fresco,<br>Alegria pura. 👧👦😄",
   "Pássaros a voar,<br>Melodias da manhã,<br>Paz no coração. 🐦🎶💕",
   "Flores desabrocham,<br>Cores vivas se destacam,<br>Beleza simples. 🌸🌼🎨",
   "Abraços apertados,<br>Calor humano se espalha,<br>Amor presente. 🤗❤️",
   "Chuva suave cai,<br>Lavando o mundo com frescor,<br>Renovação vem. ☔🌱",
   "Passeios ao parque,<br>Sorrisos e conversas leves,<br>Felicidade. 🌳🚶‍♀️😊",
   "Pôr do sol dourado,<br>Pinturas no céu se fundem,<br>Magia do dia. 🌅🖌️✨",
   "Livros antigos abrem,<br>Palavras sábias emergem,<br>Sabedoria eterna. 📚🌟",
   "Silêncio da noite,<br>Estrelas brilham no céu escuro,<br>Serenidade. 🌌🌠🌙",
   
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
   modo = modo === null ? '1' : modo; // Correção: converta '1' em string
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
             console.error('deu erro:', modo);
   }
} 

// Selecione o link correspondente ao modo atual e adicione a classe btn-primary
if (modo === '1') {
    document.querySelector('a[href="/haicais/haicais_modernos.html?modo=1"]').classList.add('btn-primary');
} else if (modo === '2') {
    document.querySelector('a[href="/haicais/haicais_modernos.html?modo=2"]').classList.add('btn-primary');
} else if (modo === '3') {
    document.querySelector('a[href="/haicais/haicais_modernos.html?modo=3"]').classList.add('btn-primary');
} else if (modo === '4') {
    document.querySelector('a[href="/haicais/haicais_modernos.html?modo=4"]').classList.add('btn-primary');
}


/*-------------------------------------------------------------
* obter a frase de forma cíclica
*-------------------------------------------------------------*/ 
var frases_1 = [
   "Agradecer sempre,<br> coração se abre,<br> bênçãos se multiplicam. 🙏",
   "Sol que aquece,<br> luz que ilumina,<br> gratidão se faz. ☀️",
   "Sorriso sincero,<br> gesto de ternura,<br> amor se expressa. 😊",
   "Chuva que cai,<br> terra que nutre,<br> vida em movimento. 🌧️",
   "Vento que sopra,<br> acaricia a pele,<br> suspiro de alívio. 💨",
   "Canção dos pássaros,<br> melodias da manhã,<br> harmonia celeste. 🐦🎶",
   "Cheiro de café,<br> aroma que envolve,<br> felicidade simples. ☕",
   "Abraço apertado,<br> laços que unem,<br> amor verdadeiro. 🤗",
   "Estrelas no céu,<br> beleza infinita,<br> admiração sem fim. 🌟",
   "Momento presente,<br> dádiva da vida,<br> gratidão eterna. 🎁",
   "Caminho de luz,<br> guiado pela fé divina,<br> bênçãos no horizonte. 🙏",
   "Prece silenciosa,<br> coração aberto ao divino,<br> paz interior. 🕊️",
   "Deus no comando,<br> confiança inabalável,<br> fortaleza na alma. 🌟",
   "Sussurros celestiais,<br> ecoam na serenidade,<br> presença divina. 😇",
   "Mão de Deus,<br> que guia e protege,<br> segurança eterna. 🤝",
   "Amar é viver,<br> em cada gesto, em cada olhar,<br> amor que transforma. 💞",
   "Alegria sem fim,<br> no simples ato de ser,<br> vida em movimento. 🌟",
   "Sonhos tecidos,<br> com fios de esperança,<br> tapeçaria da alma. 🧶",
   "Viver é amar,<br> nas pequenas coisas, alegrias,<br> sorrisos que aquecem. 😄",
   "Alegria na alma,<br> sonhos que se realizam,<br> amor que transborda. 🌻",
];

var frases_2 = [
   "Mente tranquila,<br> pensamentos serenos,<br> paz interior. 🧘‍♂️",
   "Semente do bem,<br> plantada no coração,<br> colheita de alegria. 🌱",
   "Palavras de luz,<br> inspiram o espírito,<br> brilho da alma. 💡",
   "Caminho da fé,<br> passos firmes na jornada,<br> confiança infinita. 🙏",
   "Raios de esperança,<br> iluminam o caminho,<br> futuro radiante. 🌈",
   "Sorriso que contagia,<br> positividade em ação,<br> felicidade crescente. 😊",
   "Abraço sincero,<br> laço de amor e apoio,<br> fortaleza interior. 🤗",
   "Otimismo no ar,<br> visão de possibilidades,<br> horizontes abertos. 🌟",
   "Resiliência no peito,<br> força para superar desafios,<br> vitória certa. 💪",
   "Alma radiante,<br> luz que irradia amor,<br> mundo mais belo. ✨",
   "Promessas divinas,<br> cumpridas no tempo certo,<br> fé inabalável. ⏳",
   "Gratidão no coração,<br> por cada dádiva divina,<br> amor infinito. ❤️",
   "Anjos ao redor,<br> mensageiros do céu,<br> luz da esperança. 👼",
   "Oração que eleva,<br> conexão com o divino,<br> paz profunda. 🌌",
   "Estrela guia,<br> no firmamento da fé,<br> rumo à eternidade. 🌠",   
   "Viver é sorrir,<br> alegria no coração,<br> felicidade plena. 😊",
   "Sonhos que voam,<br> além das nuvens, alcançam,<br> estrelas brilhantes. ✨",
   "Amar é viver,<br> coração em chamas, arde,<br> paixão que inflama. ❤️",
   "Alegria contagia,<br> risos ecoam no ar,<br> dança da vida. 🎉",
   "Caminhos da vida,<br> sonhos como bússola,<br> rumo à felicidade. 🌈",
  
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