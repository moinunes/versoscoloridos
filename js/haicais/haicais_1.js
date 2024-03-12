mensagem_1 = [
   "Nuvens escuras vêm, <br> mas o sol sempre retorna,<br>força para seguir.",   
   "Montanhas desafiam, <br> mas cada passo nos leva,<br> ao topo almejado.",   
   "Sementes plantadas,<br> crescem fortes com cuidado,<br> colheita é certa.",   
   "No oceano vasto,<br> cada onda é uma chance,<br> de recomeçar.",   
   "No céu noturno,<br> estrelas guiam o caminho,<br> rumo aos sonhos seus.",   
   "A jornada longa,<br> mas o destino é certo,<br> persista e vencerá.",        
   "<h5 class='text-center text-info'>Desperte a chama,<br>   Caminhe com firmeza,<br> O mundo espera.</h5>  </h5>",
];


mensagem_2 = [
   "<b>Amor</b><br> Dois corações entrelaçados, <br> Batendo em sintonia perfeita, <br>Um amor puro e eterno.",
   "<b>Paz</b><br> Silêncio interior,<br> A mente serena e tranquila,<br> Paz que a alma conquista.",
    "<b>Alegria</b><br> Sorriso contagiante,<br> Riso que ecoa no coração,<br> Felicidade genuína.",
   "<b>Prosperidade</b><br> Abundância em todos os aspectos,<br> Vida plena e florescente,<br>Sucesso em cada passo.",
   "<b>Gratidão</b><br>Coração transborda de gratidão,<br> Pelas bençãos da vida,<br> Agradecimento sincero. ",
   "<h5 class='text-center text-info'><b>Agradecimento:</b><br>Coração transborda,<br>Gratidão por tudo que existe,<br>Obrigado, universo!</h5>",
]
 


mensagem_3 = [
   "As flores são bonitas em qualquer lugar do mundo  <br>   muita gente tem forma, mas não tem conteúdo",
    "Eu vi o tempo passar, vi pouca coisa mudar, então tomei um caminho diferente.",
   "<h5 class='text-center text-info'>Viver, viver e ser livre. Saber dar valor para as coisas mais simples. Só o amor constrói pontes indestrutíveis.</h5>",

]

mensagem_4 = [
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",    
   "<h5 class='text-center text-info'>xxxxxxxxxx 🌟</h5>",
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