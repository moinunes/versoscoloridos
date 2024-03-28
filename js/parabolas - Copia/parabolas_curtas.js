mensagem_1 = [ 
      'Num campo fértil, uma semente foi plantada com cuidado. O semeador, esperançoso, disse: "Nasceste para crescer e florescer.',
      'Do solo, um broto emergiu, enfrentando ventos e tempestades. A semente, agora um broto tenaz, ensinou: "A força está em persistir, pois é assim que nos tornamos resilientes."',
      'Com o tempo, o broto cresceu em uma árvore frondosa. Sua mensagem final: "Da semente à árvore, a jornada é longa, mas a recompensa é a plenitude. Assim como eu, tua jornada trará frutos abundantes."',
      "<h5 class='text-center text-info'>Trilogia da Jornada Interior: Crescendo, Persistindo, Florescendo</h5>",
];


mensagem_2 = [
   'Num jardim encantado, uma lagarta sonhava em voar pelos céus. Uma fada, ao ouvir seu desejo, sussurrou: "A jornada da transformação começa com a fé nos próprios sonhos."',
   'Envolvida em seu casulo, a lagarta enfrentou mudanças. Ao emergir como uma pupa alada, ela proclamou: "Cada desafio é uma oportunidade de crescimento, e a metamorfose revela as asas que carregamos dentro de nós."',
   'Com asas coloridas, a borboleta alada dançou nos céus. Seu último sussurro: "Assim como as borboletas, ao abraçarmos a transformação, descobrimos que nossos sonhos podem nos levar a alturas inimagináveis."',
   "<h5 class='text-center text-info'>Jornada Alada: Transformando Sonhos em Voo Radiante</h5>",
]
 
mensagem_3 = [
   "O carro de uma senhora estragou em meio a um movimentado cruzamento. <br>Isso é um pesadelo para qualquer um, mas ela manteve a cabeça no lugar e estava fazendo o melhor que podia para ligar seu carro novamente. Depois de várias tentativas, o motorista logo atrás dela começou a buzinar impiedosamente.", 
    "Depois de alguns momentos da incessante buzina, a mulher saiu do carro, caminhou até o homem no carro atrás dela e educadamente disse: ",
    "– Senhor, parece que estou tendo dificuldades para ligar meu carro. <br>Se você puder fazer o favor de ajudar e conseguir ligar meu carro, eu ficarei muito feliz em me sentar aqui no seu lugar e buzinar para você.",
   "<h5 class='text-center text-info'>RECLAMAR OU AJUDAR?</h5>",

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