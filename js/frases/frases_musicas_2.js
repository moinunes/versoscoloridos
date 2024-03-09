mensagem_1 = [
      "Em cada esquina paro em cada olhar, deixo a tristeza e trago a esperança em seu lugar",
      "Que o nosso amor pra sempre viva, minha dádiva. Quero poder jurar que essa paixão jamais será palavras, apenas, palavras pequenas, palavras ao vento",
      " Mas nada vai conseguir mudar o que ficou…. Quando penso em alguém, só penso em você, e aí, então, estamos bem",
      "Mudaram as estações, nada mudou, mas eu sei que alguma coisa aconteceu, está tudo assim, tão diferente…",
      "Eu só peço a Deus um pouco de malandragem, pois sou criança e não conheço a verdade",
      "O que está acontecendo? Eu estava em paz quando você chegou",
      "Diga que você me quer, porque eu te quero também",
      "Eu só queria te contar que eu fui lá fora e vi dois sóis num dia e a vida que ardia sem explicação",
      "<h5 class='text-center text-info'>O que a gente gosta, a gente guarda. Quem ama a gente, a gente cuida.<br> E pro resto a gente mostra a língua.</h5>",
];

mensagem_2 = [
   "Quando não houver caminho <br> Mesmo sem amor, sem direção <br> A sós ninguém está sozinho <br> É caminhando que se faz o caminho",
   "Se o bem e o mal existem  <br>    Você pode escolher  <br>    É preciso saber viver",
   "A gente não quer só dinheiro <br> A gente quer dinheiro e felicidade <br> A gente não quer só dinheiro <br>  A gente quer inteiro e não pela metade",
   "E então um dia uma forte chuva veio <br>    E acabou com o trabalho de um ano inteiro <br> E aos treze anos de idade eu sentia <br> Todo o peso do mundo em minhas costas",
   "Família, família <br> Vovô, vovó, sobrinha <br> Família, família <br>  Janta junto todo dia <br>   Nunca perde essa mania",
   "Descansa meus olhos <br> Sossega minha boca <br>  Me enche de luz <br>  Sonífera Ilha", 
   "É que a televisão me deixou burro <br>   Muito burro demais <br> E agora eu vivo dentro dessa jaula <br> Junto dos animais",
   "Eu sei que é pra sempre <br> Enquanto durar <br>  Eu peço somente <br>  O que eu puder dar",
   "Não sou de São Paulo <br> Não sou japonês <br> Não sou carioca <br> Não sou português <br> Não sou de Brasília <br> Não sou do Brasil <br> Nenhuma pátria me pariu",
   "<h5 class='text-center text-info'>Devia ter amado mais, ter chorado mais, ter visto o sol nascer, devia ter arriscado mais e até errado mais. Ter feito o que eu queria fazer. 🌟</h5>",
]
 
mensagem_3 = [
   "Até parece que foi ontem <br>Minha mocidade <br>Com diploma de sofrer <br> De outra Universidade <br> Minha fala nordestina <br> Quero esquecer o francês",
   "Deixem que eu decido a minha vida<br> Não preciso que me digam <br>  De que lado nasce o sol <br> Porque bate lá meu coração",
   "Já faz tempo, eu vi você na rua <br> Cabelo ao vento, gente jovem reunida <br> Na parede da memória <br>  Esta lembrança é o quadro que dói mais",
   "Você não sente não vê<br> Mas eu não posso deixar de dizer, meu amigo<br> Que uma nova mudança em breve vai acontecer<br> O que há algum tempo era jovem novo<br>   Hoje é antigo<br> E precisamos todos rejuvenescer<br>   E precisamos rejuvenescer",
   "Tenho pressa de viver,<br>   Mas quando você me amar,<br> Me abrace e me beije bem devagar,<br>  Que é para eu ter tempo de me apaixonar.",
   "Amar e mudar as coisas<br>     Me interessa mais",
   "<h5 class='text-center text-info'>Ainda somos os mesmos e vivemos <br>Como os nossos pais </h5>",
]

mensagem_4 = [
   "xxxxxx", 
   "xxxxxx",
   "xxxxxx",
   "<h5 class='text-center text-info'>yyyyy 🌟</h5>",
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