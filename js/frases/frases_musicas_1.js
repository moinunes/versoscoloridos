mensagem_1 = [
      "Ah! Se o mundo inteiro me pudesse ouvir <br> Tenho muito pra contar <br> Dizer que aprendi",
       "Ver na vida algum motivo pra sonhar <br> ter um sonho azul <br> azul da cor do mar ",
       "Na vida a gente tem que entender que um nasce pra sofrer enquanto o outro ri.",
       "Você mudou a minha vida, viveu e morreu na minha história, chego a ter medo do futuro e a solidão que em minha porta bate. ",
       "Acontece que na vida a gente tem<br>Que ser feliz por ser amado por alguém ",
       "Você é mais do que sei <br>É mais que pensei<br>É mais que esperava, baby ",
       "Não quero dinheiro<br>  Eu quero amor sincero<br>Isto é que eu espero<br> Grito ao mundo inteiro<br>Não quero dinheiro<br> Eu só quero amar ",
       "Eu preciso descobrir  <br> a emoção de estar contigo, <br> Ver o sol amanhecer,  <br> E ver a vida acontecer <br>  Como um dia de domingo.",
       "<h5 class='text-center text-info'>A semana inteira fiquei esperando <br>Pra te ver sorrindo <br> Pra te ver cantando  </h5>",
];


mensagem_2 = [
   "Sou o que sou  <br>   porque vivo da minha maneira... <br>   Você procurando respostas olhando pro espaço,  <br>   e eu tão ocupado vivendo...  </br>   Eu não me pergunto, </br>   Eu faço!",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",    
   "<h5 class='text-center text-info'>Eu prefiro ser essa metamorfose ambulante. Do que ter aquela velha opinião formada sobre tudo</h5>",
]
 
mensagem_3 = [
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",    
   "<h5 class='text-center text-info'>xxxxxxxxxx 🌟</h5>",
]

mensagem_4 = [
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
   "xxxxxxxxxxxxx",
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