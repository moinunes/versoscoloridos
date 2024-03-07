mensagem_1 = [
      "Ao acordar, ele encontrou uma chave em sua mão. Uma chave para um novo começo. 🔑",
      "A porta se abriu, revelando um mundo de possibilidades além da imaginação. 🚪",
      "O espelho refletiu não apenas sua aparência, mas também suas esperanças e sonhos. 🪞",
      "No último minuto, ele tomou uma decisão que mudaria sua vida para sempre. ⏱️",
      "Ao olhar para trás, ele percebeu que as maiores aventuras começaram nos momentos mais inesperados. ↩️",
      "<h5 class='text-center text-info'>A chave em sua mão. Uma porta se abre. Reflexões no espelho. Uma decisão final. Olhar para trás, aventuras começam. 🌟</h5>",
];


mensagem_2 = [
   "Cada passo que ele dava era uma dança com o destino, moldando o curso de sua própria jornada pela vida. 🌟",
   "Nas águas agitadas do rio da vida, ele aprendeu a fluir com as correntes, encontrando força na adaptação e no movimento constante. 🌊",
   "Sob o brilho do sol da manhã, ele se lançou na estrada da vida, sabendo que cada passo o levaria mais perto de seu destino. 🌞",
   "Em meio ao caos da cidade, ele encontrou beleza no movimento constante das pessoas, cada uma com sua própria história a contar. 🏙️",
   "<h5 class='text-center text-info'> Ao olhar para o céu noturno, ele viu as estrelas em constante movimento, lembrando-se de que a vida é uma jornada em evolução, sempre cheia de possibilidades e mudanças. ✨</h5>",
]
 
mensagem_3 = [
   "A vida é de dentro para fora. 🌱💡",
   "Cada pensamento é uma semente plantada no jardim da alma, cultivando o crescimento interior que floresce na jornada da vida. 🌻",
   "Na quietude do coração, ele encontrou o verdadeiro significado da vida, descobrindo que a paz interior é a chave para a felicidade. 🧘‍♂️",
   "Ao abrir as portas da percepção, ele viu o mundo exterior refletido em seu mundo interior, reconhecendo que a verdadeira mudança começa de dentro para fora. 🔄",
   "<h5 class='text-center text-info'>Na dança da vida, ele aprendeu que cada movimento externo é uma expressão do fluxo interno de energia e consciência, revelando a essência de sua existência. 🌟</h5>",
]

mensagem_4 = [
   "A vida é maravilhosa. ✨",
   "Cada dia é um presente. 🎁",
   "A beleza está em toda parte. 🌺",
   "O sol brilha em nossos corações. ☀️",
   "A gratidão transforma tudo. 🙏"
]
 

var indice_atual_1 = -1;
var indice_atual_2 = -1;
var indice_atual_3 = -1;
var indice_atual_4 = -1;

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

function proxima_mensagem_4() {
   mensagens = mensagem_4; 
   indice_atual_4++; 
   if (indice_atual_4 >= mensagens.length) {
      indice_atual_4 = 0; 
   }
   document.getElementById("mensagem_4").innerHTML =  mensagens[indice_atual_4];   
}