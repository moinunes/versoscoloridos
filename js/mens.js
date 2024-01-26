/*-------------------------------------------------------------
* obter a  mensagem. verso, frase  com base no segundo fornecido
*-------------------------------------------------------------*/ 
function obterMens() {
   var frases1 = [  
   ];
   var frases = [
      "Deus, põe teu olho amoroso sobre todos os que já tiveram um amor sem nojo nem medo, e de alguma forma insana esperam a volta dele: que os telefones toquem, que as cartas finalmente cheguem … Sobre todos aqueles que ainda continuam tentando, Deus, derrama teu Sol mais luminoso. \n - Caio Fernando Abreu - ",
      "Não tem poesia nem palavra difícil e nem construção sofisticada. O amor é simples como sorrir numa droga de fila. E não se sentir mais sozinho e nem esperando e nem desesperado e nem morrendo e nem com tanto medo. \n - Tati Bernardi -",
      "Os poetas mentiram pra mim, Roberto Carlos mentiu para a gente. O amor não é manso assim. Ele pega, invade e devora a gente. \n - Caio Fernando Abreu",
      "Lua na lagoa, \n rãs cantam canções noturnas,\n serenata azul.",      
      "Neblina da manhã,\n teias de aranha cintilam, \n sol beija a montanha.",      
      "Cerejeiras choram, \n pétalas dançam no vento, \n primavera sonha.",  
      "Fazer poesia é como fazer amor: nunca se saberá se a própria alegria é compartilhada. - Cesare Pavese - ",
      "Enquanto houver um louco, um poeta e um amante haverá sonho, amor e fantasia. E enquanto houver sonho, amor e fantasia, haverá esperança. - William Shakespeare -",
      "Todos os dias, quando acordo, vou correndo tirar a poeira da palavra amor... - Clarice Lispector -",
      "Ao toque do amor, todo homem se torna um poeta. - Platão - ",
      "Talvez os poetas estejam certos. Talvez o amor seja a única resposta - Woody Allen - ",
      "O amor é a poesia dos sentidos. Ou é sublime, ou não existe. Quando existe, existe para sempre e vai crescendo dia a dia. - Honoré de Balzac -",
      "tudo dito, \n nada feito, \n fito e deito \n  - Paulo Leminski -",
      "Viver é super difícil \n  no mais fundo \n está sempre na superfície \n - Paulo Leminski ",
      "Nas asas do vento, dança a melodia dos sonhos perdidos.",
      "No crepúsculo dourado, o silêncio revela segredos do coração.",
      "Estrelas sussurram versos de amor no céu noturno.",
      "Caminhando pela chuva, lágrimas do céu, a poesia se revela.",
      "No jardim da esperança, as flores desabrocham em rimas silenciosas.",
      "O sol pinta quadros de calor na tela do dia, uma odisseia de luz.",
      "A lua, poeta noturna, borda versos prateados no manto do céu.",
      "No abraço do crepúsculo, o dia e a noite dançam uma serenata cósmica.",
      "Silhuetas se entrelaçam na dança das sombras, contando histórias ao entardecer.",
      "As ondas do mar sussurram segredos antigos, versos que ecoam pela eternidade.",
      "No compasso do coração, dançamos a melodia eterna do amor.",
      "Teus olhos, estrelas que iluminam minha escuridão, guiam-me para a paz.",
      "Cada batida do meu coração sussurra o teu nome, uma canção de amor eterno.",
      "Teu sorriso é a luz do sol, aquecendo minha alma com ternura infinita.",
      "Nossas almas dançam juntas, entrelaçadas na coreografia eterna do amor.",
      "Sereno riacho, \n sob a lua, dança a brisa, \n noite sussurra paz.",
      "Pétalas caem, \n primavera em despedida, \n silêncio floresce.",
      "Sol se põe no mar, \n gaivotas dançam no vento, \n horizonte abraça.",
      "No bosque tranquilo, \n sombras dançam com a luz, \n segredos da floresta.",
      "Gota na folha, \n a natureza respira, \n vida em equilíbrio." ,
      "Não há ninguém, mesmo sem cultura, que não se torne poeta quando o amor toma conta dele. - Platão." 

       // ... adicione mais frases conforme necessário
   ];

   var frase_padrao = "Sua autenticidade é sua beleza.\n Abrace quem você é, pois você é único e especial.";

   // Obter o segundo atual
   var segundoAtual = new Date().getSeconds();

   // Calcula o índice de forma cíclica
   var indiceFrase = segundoAtual % frases.length;
   
   // Obtém a frase correspondente ao índice calculado
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;

   return fraseCorrespondente;
}