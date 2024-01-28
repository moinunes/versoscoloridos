/*-------------------------------------------------------------
* obter a  mensagem de forma cíclica
*-------------------------------------------------------------*/ 
function obterMens() {
   
   var frases = [
      "🌟 Deus, põe teu olho amoroso sobre todos os que já tiveram um amor sem nojo nem medo, e de alguma forma insana esperam a volta dele: que os telefones toquem, que as cartas finalmente cheguem … Sobre todos aqueles que ainda continuam tentando, Deus, derrama teu Sol mais luminoso. <br><span class='small'>- Caio Fernando Abreu</span>",
      "😊 Não tem poesia nem palavra difícil e nem construção sofisticada. O amor é simples como sorrir numa droga de fila. E não se sentir mais sozinho e nem esperando e nem desesperado e nem morrendo e nem com tanto medo. <br><span class='small'>- Tati Bernardi</span>",
      "📜 Os poetas mentiram pra mim, Roberto Carlos mentiu para a gente. O amor não é manso assim. Ele pega, invade e devora a gente. <br><span class='small'>- Caio Fernando Abreu</span>",
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

      "Suba o primeiro degrau com fé. <br> Não é necessário que você veja toda a escada. " +
      "Apenas dê o primeiro passo.  <br> <span class='small'>- Martin Luther King</span>",

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