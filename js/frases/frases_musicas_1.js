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
   "Controlando A minha maluquez <br> Misturada Com minha lucidez <br> Vou ficar Ficar com certeza <br> Maluco beleza<br> Eu vou ficar <br> Ficar com certeza <br>   Maluco beleza",
   "Aprendi o segredo da vida, vendo as pedras que sonham sozinhas no mesmo lugar.",
   "Eu que já andei pelos quatro cantos do mundo procurando, foi justamente num sonho que ele me falou...",
   "Eu não posso entender tanta gente aceitando a mentira, de que os sonhos desfazem aquilo que o padre falou. Porque quando eu jurei meu amor eu traí a mim mesmo, hoje eu sei! Que ninguém nesse mundo é feliz tendo amado uma vez, uma vez...",
   "Tenha fé em Deus, tenha fé na vida. Tente outra vez! ",  
   "Basta ser sincero e desejar profundo, você será capaz de sacudir o mundo",  
   "Se é de batalhas que se vive a vida… Tente outra vez",   
   "Enquanto você se esforça pra ser um sujeito normal e fazer tudo igual. Eu do meu lado aprendendo a ser louco, um maluco total",   
   " Eu devia estar sorrindo e orgulhoso por ter finalmente vencido na vida, mas eu acho isso uma grande piada e um tanto quanto perigosa ",    
   "<h5 class='text-center text-info'>Eu prefiro ser essa metamorfose ambulante. Do que ter aquela velha opinião formada sobre tudo</h5>",
]
 
mensagem_3 = [
   "As flores são bonitas em qualquer lugar do mundo  <br>   muita gente tem forma, mas não tem conteúdo",
   "A gente passa a entender melhor a vida <br>    Quando encontra o verdadeiro amor",
   "Buscando um novo rumo que faça sentido nesse mundo louco com o coração partido...",
   "O melhor presente Deus me deu, a vida me ensinou a lutar pelo que é meu...",
   "Meu estilo de vida <br> Liberta minha mente <br> Completamente louco, <br> Mas um louco consciente...",
   "O seu sorriso vale mais que um diamante. Se você vier comigo, aí nós vamos adiante.",  
   "Toda positividade eu desejo a você, pois precisamos disso nos dias de luta",    
   "Você vai encontrar várias pessoas na sua vida, mas uma delas vai mudar sua vida pra muito melhor, acredite.",    
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