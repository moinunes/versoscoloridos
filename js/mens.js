/*-------------------------------------------------------------
* obter a  mensagem de forma cíclica
*-------------------------------------------------------------*/ 
function obter_frase_deus() {
   
   var frases = [
      "Suba o primeiro degrau com fé. <br> Não é necessário que você veja toda a escada. " +
      "Apenas dê o primeiro passo.  <br> <span class='small'>- Martin Luther King</span>",

      "Quem tem fé em Deus, não teme o futuro.  <br>" +
      "<span class='small'>- Marianna Moreno </span>",

      "🌟 Com fé em Deus e alegria, eu trilho minha jornada, vivendo intensamente e alcançando os meus sonhos.  <br>" +
      "<span class='small'> </span>",

      "Quando Deus quer, nada impede. ✨<br>  Em Sua vontade, encontramos força para superar qualquer obstáculo e alcançar o inalcançável.  <br>" +
      "<span class='small'> </span>",

      "Comece agradecendo pelo que tem, pois a gratidão é a porta para mais bênçãos.  Deus nos presenteia diariamente, e reconhecer Suas dádivas nos conecta à abundância da vida 💖 <br>" +
      "<span class='small'> </span>",

      "Nada do que existe é por acaso. ✨ Cada detalhe é tecido com propósito por Deus, guiando-nos em um intricado plano de amor e significado. 💖 <br>" +
      "<span class='small'> </span>",

      "Transforme a tristeza em alegria, como uma arte divina. 😊 Com a graça de Deus, descubra a força interior que nos permite florescer mesmo nos jardins mais desafiadores da vida.  🎨 <br>" +
      "<span class='small'> </span>",

      " Ame a natureza como uma manifestação divina. 🌿 Em cada folha, em cada brisa, sinta a presença de Deus, lembrando-nos da beleza e harmonia que Ele nos presenteia.  <br>" +
      "<span class='small'> </span>",

      " Siga a voz silenciosa do coração, onde Deus sussurra seus planos. 💖 Em cada momento de quietude, descubra a orientação divina que conduz os passos da sua jornada.  <br>" +
      "<span class='small'> </span>",

      " Obedecer à voz da consciência é agradecer a Deus. 🌟 Cada escolha alinhada com a verdade interior é uma expressão de gratidão pela sabedoria divina que nos guia.  <br>" +
      "<span class='small'> </span>",

      "Cultive a esperança como um jardim da alma. 🌷  Nas sementes da fé, Deus nos presenteia com a promessa de um amanhã iluminado. A esperança é a luz que guia nossos passos. <br>" +
      "<span class='small'> </span>",

      " Os que amam, irradiam a luz divina. 💖  Nesse ato sagrado, Deus se manifesta, guiando-nos para um caminho de compaixão, gratidão e alegria. <br>" +
      "<span class='small'> </span>",

      "A vontade de Deus é o farol que ilumina o caminho da nossa existência.  🙏 Aceitar, compreender e seguir Sua vontade nos conduz a uma vida plena de propósito e harmonia. <br>" +
      "<span class='small'> </span>",

   ];  

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
 
}


/*-------------------------------------------------------------
* obter a  mensagem de forma cíclica
*-------------------------------------------------------------*/ 
function obterMens() {
   
   var frases = [
      "Nas asas do vento, dança a folha 🍃, leve e livre, ecoando o suspiro da natureza",
      "E as águas dançam, refletindo o céu em seus movimentos serenos.",
      "Nas curvas da jornada, encontre a força para seguir adiante, pois cada desafio é um convite para crescer e florescer. 🌱",
      "💗 O poeta é um fingidor. Finge tão completamente que chega a fingir que é dor a dor que deveras sente. <br><span class='small'>- Fernando Pessoa</span>", 
      "💗 O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e cabe na cama e no colchão de amar. <br><span class='small'>- Carlos Drummond de Andrade </span>", 
      "💗 Todo o homem saudável consegue ficar dois dias sem comer - sem a poesia, jamais. <br><span class='small'>- Charles Baudelaire</span>", 
      "💗 Porque eu sou do tamanho do que vejo, e não do tamanho da minha altura. <br><span class='small'>- Alberto Caeiro  </span>", 
      "💗 A pintura é poesia sem palavras. <br><span class='small'>- Voltaire</span>", 
      "💗 A arte existe porque a vida não basta. <br><span class='small'>- Ferreira Gullar </span>", 
      "💗 A poesia não se entrega a quem a define. <br><span class='small'>-  Mario Quintana </span>", 
      "💗 A vida é trem-bala, parceiro, e a gente é só passageiro prestes a partir. <br><span class='small'>- Ana Vilela </span>",
      "💗 Uma pitada de poesia é suficiente para perfumar um século inteiro. <br><span class='small'>- José Martí </span>",
      "💗 Fazer poesia é como fazer amor: nunca se saberá se a própria alegria é compartilhada. <br><span class='small'>- Cesare Pavese </span>",
      "💗 A poesia não está nem nos pensamentos, nem nas coisas, nem nas palavras; ela não é nem filosofia, nem descrição, nem eloquência: ela é inflexão. <br><span class='small'>- Charles Ramuz </span>",
      "😊 Não tem poesia nem palavra difícil e nem construção sofisticada. O amor é simples como sorrir numa droga de fila. E não se sentir mais sozinho e nem esperando e nem desesperado e nem morrendo e nem com tanto medo. <br><span class='small'>- Tati Bernardi</span>",
       "🌙 Lua na lagoa, <br> rãs cantam canções noturnas,<br> serenata azul.",
      "🌄 Neblina da manhã,<br> teias de aranha cintilam, <br> sol beija a montanha.",
      "🌸 Cerejeiras choram, <br> pétalas dançam no vento, <br> primavera sonha.",
      "✍️ Fazer poesia é como fazer amor: nunca se saberá se a própria alegria é compartilhada. <br><span class='small'>- Cesare Pavese</span>",
      "🤔 Enquanto houver um louco, um poeta e um amante haverá sonho, amor e fantasia. E enquanto houver sonho, amor e fantasia, haverá esperança. <br><span class='small'>- William Shakespeare</span>",
      "💗 Todos os dias, quando acordo, vou correndo tirar a poeira da palavra amor... <br><span class='small'>- Clarice Lispector</span>", 
      "💑 Ao toque do amor, todo homem se torna um poeta. <br><span class='small'>- Platão</span>",
      "🤔 Talvez os poetas estejam certos. Talvez o amor seja a única resposta <br><span class='small'>- Woody Allen</span>",
      "📜 O amor é a poesia dos sentidos. Ou é sublime, ou não existe. Quando existe, existe para sempre e vai crescendo dia a dia. <br><span class='small'>- Honoré de Balzac</span>",
      "📜 tudo dito, <br> nada feito, <br> fito e deito <br><span class='small'>- Paulo Leminski</span>",
      "📜 Viver é super difícil <br>  no mais fundo <br> está sempre na superfície <br><span class='small'>- Paulo Leminski</span>",
      "🌬️ Nas asas do vento, dança a melodia dos sonhos perdidos.",
      "💗 No crepúsculo dourado, o silêncio revela segredos do coração.",
      "✨ Estrelas sussurram versos de amor no céu noturno.",
      "☔ Caminhando pela chuva, lágrimas do céu, a poesia se revela.",
      "🌼 No jardim da esperança, as flores desabrocham em rimas silenciosas.",
      "☀️ O sol pinta quadros de calor na tela do dia, uma odisseia de luz.",
      "🌙 A lua, poeta noturna, borda versos prateados no manto do céu.",
      "☀️ No abraço do crepúsculo, o dia e a noite dançam uma serenata cósmica.",
      "💗 Silhuetas se entrelaçam na dança das sombras, contando histórias ao entardecer.",
      "🌊 As ondas do mar sussurram segredos antigos, versos que ecoam pela eternidade.",
      "💓 No compasso do coração, dançamos a melodia eterna do amor.",
      "✨ Teus olhos, estrelas que iluminam minha escuridão, guiam-me para a paz.",
      "🎶 Cada batida do meu coração sussurra o teu nome, uma canção de amor eterno.",
      "😊 Teu sorriso é a luz do sol, aquecendo minha alma com ternura infinita.",
      "💞 Nossas almas dançam juntas, entrelaçadas na coreografia eterna do amor.",
      "🌌 Sereno riacho, <br> sob a lua, dança a brisa, <br> noite sussurra paz.",
      "🍂 Pétalas caem, <br> primavera em despedida, <br> silêncio floresce.",
      "☀️ Sol se põe no mar, <br> gaivotas dançam no vento, <br> horizonte abraça.",
      "🌲 No bosque tranquilo, <br> sombras dançam com a luz, <br> segredos da floresta.",
      "💧 Gota na folha, <br> a natureza respira, <br> vida em equilíbrio.",
      "📜 Não há ninguém, mesmo sem cultura, que não se torne poeta quando o amor toma conta dele. <br><span class='small'>- Platão</span>",
   ];
     
       frases1 = [
         "🤔 Enquanto houver um louco, um poeta e um amante haverá sonho, amor e fantasia. E enquanto houver sonho, amor e fantasia, haverá esperança. <br><span class='small'>- William Shakespeare</span>",
   
      ];     

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
    var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}


/*-------------------------------------------------------------
* obter a  mensans Motivacionais de forma cíclica
*-------------------------------------------------------------*/ 
function obterMens_motivacional() {
   
   var frases = [
      "Ame o que faz, faça o que ama. ✨<br>" +
      "Paixão no trabalho, sucesso na jornada.<br>" +
      "Encontre alegria no labor diário.<br>" +
      "O amor pelo trabalho é a chama do êxito.<br>" +
      "Cada tarefa é uma expressão de amor.<br>" +
      "<span class='small'>- Desconhecido</span>",
  
      "Agradeça por cada momento 💖<br>" +
      "Celebre as pequenas vitórias <br>" +
      "Cultive a gratidão e nutra o seu coração de alegria. Na apreciação, descobrimos a riqueza da vida. <br>" +
      "A Gratidão transforma o comum em extraordinário.  🙏<br>", 
      
      "Coloque seu coração,  mente e alma até mesmo nas menores   coisas que você fizer.<br>" +
      "Esse é o segredo para o sucesso. <br> <span class='small'>- Guilherme Ávila</span>",
  
      "O homem não teria alcançado o <b>possível</b> se, repetidas vezes,  não tivesse tentado <br>" +
      "o <b>impossível.</b>  <br> <span class='small'>- Max Weber</span>",

      "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. " +
      " <br> <span class='small'>- Winston Churchill</span>",

      "Persista, conquiste, brilhe! ✨ <br> Recomece, alcance, inspire! <br> Cresça, vença, sorria!<br> " +
      "Acredite, evolua, transforme! <br> Supere, realize, celebre! ",

      "Ação gera mudança. Inspire-se. ✨<br> Caminhe, sonhe, conquiste. <br> Foco, força, gratidão. <br>" +
      "Desafie-se, supere, realize. <br> Persistência, crescimento, vitória. ",

      "Todos os dias, sob todos os pontos de vista, eu vou cada vez melhor 🌟" +
      " <br> <span class='small'>- Émile Coué</span>",

      "Segue o teu destino, <br> Rega as tuas plantas, <br> Ama as tuas rosas. <br> " +
      "O resto é a sombra <br> " +       
      "De árvores alheias. <br> <span class='small'>- Fernando Pessoa ✨</span>",

      "Vamos inventar o amanhã e parar de nos preocupar com o passado. <br> " + 
      "<span class='small'>- Steve Jobs ✨</span>",
   ];   
   
   var frases1  = [       
        
  ];    

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}





/*-------------------------------------------------------------
* obter frase de musica de forma cíclica
*-------------------------------------------------------------*/ 
function obter_frase_musica() {   
   var frases = [
      "Quer saber o sentido da vida? <br> Pra frente. <br> " +
      "<span class='small'>- Emicida (A Cada Vento) ✨</span>",

      "Não há pedra em teu caminho<br> Não há ondas no teu mar <br>Não há vento ou tempestade<br>Que te impeçam de voar <br> " +
      "<span class='small'>- Dona - Roupa Nova 🕊️</span>",

      "Vamos descobrir o mundo juntos, baby <br> Quero aprender <br> Com o teu pequeno grande coração <br> Meu amor <br> " +
      "<span class='small'>- 1º de Julho - Cássia Eller 💖</span>",
  
      "Não saiu jamais <br> Muito longe de sua cidade <br> Não cursou nenhuma faculdade  <br> Mas na vida Ele foi doutor  <br> " +
      "<span class='small'>- O Homem de Nazareth - Antônio Marcos 🙏</span>",
   
      "Caminhando contra o vento <br> Sem lenço, sem documento <br> No Sol de quase dezembro <br> Eu vou  <br> " +
      "<span class='small'> - Alegria, Alegria - Caetano Veloso 🙏</span>",
   
      "Quero ver sempre no teu rosto essa felicidade... O teu sorriso iluminado que me faz tão bem. <br> " +
      "<span class='small'>- Ser Humano -Zeca Pagodinho 💖</span>",
   
      "Negro, branco, rico, pobre <br> O sangue é da mesma cor <br> Somos todos iguais <br> Sentimos calor, alegria e dor  <br> " +
      "<span class='small'>- Bate a Poeira - Karol Conká 💙</span>",

      "Um branco e um preto unido, respostas que cala o ridículo <br> " +
      "<span class='small'>- Mun-rá - Sabotage 🤝</span>",

      " Brindo à casa <br> Brindo à vida <br> Meus amores <br>  Minha família <br> " +
      "<span class='small'>- Mar de Gente - O Rappa 👨‍👩‍👧‍👦</span>",

      " Na vida a gente tem que entender que um nasce pra sofrer enquanto o outro ri. <br> " +
      "<span class='small'>- Azul da Cor do Mar - Tim Maia 🔄</span>",

      " Eu insisto, persisto, não mando recado. Eu tenho algo a dizer, não vou ficar calado <br> " +
      "<span class='small'>- Na Zona Sul - Sabotage 💬</span>",

      " Das lembranças que eu trago na vida <br>  Você é a saudade que eu gosto de ter <br>  Só assim sinto você bem perto de mim. Roberto Carlos  <br> " +
      "<span class='small'>- Outra Vez - Roberto Carlos 💭</span>",

      " E tenho comigo pensado: Deus é brasileiro e anda do meu lado <br> " +
      "<span class='small'>- Sujeito de Sorte - Belchior 🙏</span>",
   
   ]; 

   var frases1  = [   

     

   ];  
   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}