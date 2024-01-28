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
       
      // <br><span class='small'>- xxxxxxxxx</span>",
     
    

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
 
   // Obter o segundo atual
   var segundoAtual = new Date().getSeconds();
   // Calcula o índice de forma cíclica
   var indiceFrase = segundoAtual % frases.length;   
   // Obtém a frase correspondente ao índice calculado
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;

   //var emojis = ["🌟", "📚", "📜", "📖", "🎨", "➡️", "🌹", "🌼", "📄", "✨", "💬", "🌺", "🌸", "📝", "↪️",  "🧑"];
   //var emojiEscolhido = emojis[Math.floor(Math.random() * emojis.length)];
   // fraseCorrespondente = emojiEscolhido + " " + fraseCorrespondente;
   
   return fraseCorrespondente;
}