var mensagem_1 = [   
   "Numa vila cercada por montanhas, um sábio ancião compartilhava lições sobre a importância de viver o momento presente. Um jovem angustiado com o futuro buscou orientação com o sábio. Sob uma árvore antiga, o sábio começou sua narrativa.",
   "Ele contou sobre um pássaro sempre em busca de um lugar mais alto para descansar. O pássaro, exausto, finalmente pousou em um galho próximo e percebeu a beleza ao seu redor.",   
   "Assim como o pássaro, o sábio explicou ao jovem sobre apreciar as maravilhas do presente. O jovem aprendeu a encontrar serenidade no aqui e agora, cultivando uma nova perspectiva baseada na gratidão.",
   "<h5 class='text-center text-info'>Encontrando a Serenidade no momento Presente 🌿</h5>",
];


var mensagem_2 = [
   "Numa pequena vila, havia um velho sábio conhecido por sua gratidão inabalável. Todos os dias, ele acordava ao amanhecer e, diante do sol nascente, expressava sua gratidão pelo dia que se iniciava.",
   "As pessoas da vila admiravam sua atitude e perguntavam como ele mantinha tal gratidão, mesmo nos momentos difíceis. O sábio sorria e respondia que, ao focar nas bênçãos ao seu redor, mesmo as menores, ele encontrava a verdadeira felicidade.",   
   "Sua prática diária de gratidão não apenas transformou sua própria vida, mas também inspirou os outros a adotarem uma perspectiva semelhante. Eles aprenderam que a gratidão não dependia das circunstâncias, mas sim da disposição de reconhecer e apreciar as coisas simples da vida.",
   "<h5 class='text-center text-info'>Gratidão Infinita: O Caminho para a Felicidade 🌟</h5>",
];

mensagem_3 = [
   "Em um mundo onde as aparências muitas vezes enganam, Sofia brilha com sua capacidade única de ver além do óbvio. Ela nos lembra que a verdadeira beleza reside no interior de cada ser humano.",   
   "Para Sofia, cada pessoa é uma obra de arte em constante evolução, Um tesouro a ser descoberto, uma história a ser compartilhada. Ela nos motiva a cultivar empatia e compaixão em nossas interações diárias.",   
   "Com sua visão inspiradora, aprendemos que a essência de uma pessoa vai além de sua aparência externa, E que ao olharmos com o coração, descobrimos a verdadeira magia da vida. ",
   "<h5 class='text-center text-info'>Além das Aparências: A Arte de Enxergar com o Coração ❤️</h5>",
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