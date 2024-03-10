  
$(document).ready(function () {
      // Esconde todas as divs de poemas ao CARREGAR A PAGINA
      $(".poema-div").hide(); 
      carrega_adsense();
});

function carrega_adsense() {
   var script = document.createElement('script');
   script.async = true;
   script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2582645504069233";
   script.setAttribute('crossorigin', 'anonymous');
   document.head.appendChild(script);
}
 

/*-------------------------------------------------------------
* Ao Clicar nos botoes <copiar>, "copia  VERSO"
*-------------------------------------------------------------*/ 
$(document).ready(function () {
   $('.btn_copiar_verso').on('click', function () {
       var blocoTexto = $(this).closest('.card-body').find('.card-text');
       var tempContainer = $('<div>').append(blocoTexto.clone());
       tempContainer.find('.btn_copiar_verso').remove();
       var textoFormatado = tempContainer.text().split('\n').map(line => line.trim()).join('\n').trim();
       var urlPagina = window.location.href;
       var tempInput = $('<textarea>');
       tempInput.val(`${textoFormatado}\n\n${urlPagina}`);
       $('body').append(tempInput);
       tempInput.select();
       document.execCommand('copy');
       tempInput.remove();
       $('.mensagem').empty();
       var mensagem = $(this).closest('.card-body').find('.mensagem');
       mensagem.html('<span class="text-success">Conteúdo copiado com sucesso! <br> Agora você pode compartilhar.</span>');
   });
});

function carregar_rodape() {
   $("#div_rodape").load("/rodape.html", function(response, status, xhr) {
      if (status == "error") {
         console.log("Erro ao carregar o rodapé:", xhr.statusText);
      }
   });
}

function carregar_cabecalho() {
   $("#div_cabecalho").load("/header.html", function(response, status, xhr) {
      if (status == "error") {
            console.log("Erro ao carregar o header.html:", xhr.statusText);
      }
   });
}

/*
* Adiciona um ouvinte de eventos de clique aos links, para abrir os poemas 
*
*/
$(".list-group-item a").click(function(e) {
   if (!$(this).hasClass('ignore-click')) {
      // Evita o comportamento padrão de clicar em um link
      e.preventDefault();
      
      // Obtém o ID da div do poema associado ao link
      var poemaDivID = $(this).data("poema-div");
      
      // Esconde todas as divs de poemas
       $(".poema-div").hide();

      $('.mensagem').empty();
      
      // Mostra apenas a div do poema associada ao link clicado
      $("#" + poemaDivID).show();
      
      // Move a tela para o topo da div do poema selecionado, ajustando para 10 pixels acima do topo
      var targetDiv = $("#" + poemaDivID);
      var targetPosition = targetDiv.offset().top - 40;

      $('html, body').animate({
         scrollTop: targetPosition
      }, 700);
   }
});

function compartilharWhatsApp(id) {
   var elemento = document.getElementById(id);

   // Verificar se o elemento com o ID fornecido existe
   if (elemento) {
      var mensagem = encodeURIComponent(elemento.innerText.trim());
      var url = encodeURIComponent(window.location.href);

      // Criar o link de compartilhamento do WhatsApp para texto
      var linkDeCompartilhamento = "https://api.whatsapp.com/send?text=" + mensagem + "%0A" + url;

      // Abrir a janela de compartilhamento do WhatsApp
      window.open(linkDeCompartilhamento, '_blank');
   } else {
      console.error("Elemento não encontrado com o ID: " + id);
   }
}

/*-------------------------------------------------------------
* Ao Clicar nos botoes <copiar>, copia  conteudo das div - "copia  POEMA"
*-------------------------------------------------------------*/ 
$(document).ready(function () {   
      $('.btn_copiar').on('click', function () {
        var poemaDiv = $(this).closest('.poema-div'); 
        if (poemaDiv.length > 0) {       
          var linkPoema = poemaDiv.prev('.clicavel').text().trim();
          var autorTitulo = poemaDiv.find('.font_poema_titulo').text().replace('Autor:', '').trim();         
          if (!autorTitulo) {
             // Se estiver vazia, atribui 'desconhecido' a ela
             autorTitulo = 'desconhecido';
          }
          var poemaConteudo = poemaDiv.find('.font_poema_1').clone();           
          var poemaFormatado = poemaConteudo.text().replace(/^\s+/mg, '');          
          var mensagemSpan = poemaDiv.find('.mensagem');
          var urlPagina = window.location.href;
          var conteudoCompleto = linkPoema + '\n' +'Autor: ' + autorTitulo + '\n\n' + poemaFormatado.trim() + '\n\n' + urlPagina;
          var $tempTextArea = $('<textarea>');
          $tempTextArea.val(conteudoCompleto);
          $('body').append($tempTextArea); 
          $tempTextArea.select(); 
          try {
            $('.mensagem').empty();
            document.execCommand('copy');
            mensagemSpan.html('Conteúdo copiado com sucesso! <br> Agora você pode compartilhar.')
                          .addClass('text-success');
          } catch (err) {
            alert('Erro ao copiar o conteúdo. Utilize Ctrl+C para copiar manualmente.');
          } finally {
            $tempTextArea.remove();
          }
        } else {
          console.error('Div .poema-div não encontrada.');
        }
      });     
}); 
 
 
/*-------------------------------------------------------------
* obter a frase de forma cíclica
*-------------------------------------------------------------*/ 
function obterFrase() {
   var frases = [
      "🦸‍♂️ Um herói é alguém que caminha voluntariamente para o desconhecido. <br><span class='small'>- Tom Hanks</span>",
      "🌟 Nunca deixe que lhe digam que não vale a pena  acreditar no sonho que se tem ou que seus planos nunca vão dar certo <br> ou que você nunca vai ser alguém... <br><span class='small'>- Renato Russo</span>", 
      "🌌 Ninguém além de nós mesmos pode libertar nossa mente. <br> <span class='small'>- Bob Marley</span>",
      "❤️ O sucesso de cada mulher deveria ser uma inspiração para outra mulher. <br> Somos mais fortes quando nos apoiamos.   <br> <span class='small'>- Serena Williams</span>",
      "🌅 Quem olha para fora sonha, quem olha para dentro desperta. <br> <span class='small'>- Carl Jung</span>",
      "🌟 Acredite em você mesmo e tudo será possível.",
      "🚀 O que você faz hoje pode semear um futuro melhor amanhã.",
      "🕰️ Nunca é tarde demais para ser quem você poderia ter sido.",
      "🔍 O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "🌍 Seja a mudança que você deseja ver no mundo.",
      "🎉 A vida é feita de escolhas, faça escolhas que te façam feliz.",
      "🗝️ O sucesso não é a chave para a felicidade.<br> A felicidade é a chave para o sucesso.",
      "🌠 Nunca desista do que você realmente quer fazer.<br> A pessoa com grandes sonhos é mais poderosa do que aquela com todos os fatos.",
      "❤️ A única maneira de fazer um ótimo trabalho é amar o que você faz.",
      "🌈 A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
      "🌳 O melhor momento para plantar uma árvore foi há 20 anos.<br> O segundo melhor momento é agora.",
      "🧠 A mente é tudo.<br> Você se torna aquilo que você pensa.",
      "📚 O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
      "🙏 A gratidão transforma o que temos em suficiente.",
      "🌈 Seja o arco-íris na nuvem de alguém.",
      "⏳ A paciência é amarga, mas seu fruto é doce.",
      "🚀 Não espere por circunstâncias ideais, tome decisões e torne-as ideais.",
      "🚶 A persistência é o caminho do êxito.",
      "🌞 O otimismo é a fé em ação.",
      "🌌 Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
      "🌟 A verdadeira medida do sucesso não reside nas vitórias fáceis, <br> mas sim em quantas vezes você consegue se recuperar do fracasso. <br> Cada revés é uma oportunidade de crescimento e superação.",
      "🍀 A verdadeira sorte consiste em ter algo pelo que lutar.",
      "🛠️ Não há substituto para o trabalho árduo.",
      "🌎 A vida é 10% do que acontece conosco e 90% como reagimos a isso.",
      "❤️ O único modo de fazer um excelente trabalho é amar o que você faz.",
      "🌅 Sua vida só melhora quando você faz.<br> Trabalhe em si mesmo e o resto seguirá.",
      "🚀 A felicidade é uma jornada, não um destino.", 
      "😊 Seja você mesmo; todos os outros já estão ocupados.",
      "🏃 Não importa o quão devagar você vá, desde que você não pare.",
      "🧘 A mente é um antídoto para a dor.",
      "🌟 O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
      "🚶‍♂️ O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      "❤️ A única maneira de fazer um excelente trabalho é amar o que você faz.",
      "👣 Se você está indo pela estrada certa e está disposto a continuar andando, eventualmente você chegará lá.",
      "🔓 A única limitação que você possui é aquela que você escolhe impor a si mesmo.<br> Liberte-se das barreiras autoimpostas e abra caminho para suas verdadeiras capacidades.",
      "🚫 Não há atalhos para qualquer lugar que valha a pena.",
      "🎉 Quanto mais você se elogia e celebra sua vida, mais há na vida para celebrar.",
      "🚀 A chave para o sucesso é começar antes de estar pronto.",
      "🧠 A única coisa no caminho do seu sucesso é a sua mente.",
      "🚫 Você nunca falhará até parar de tentar.",
      "🌅 O sucesso é encontrar satisfação no próprio trabalho.",
      "🌎 A vida é 10% do que acontece conosco e 90% como reagimos a isso.",
      "🌠 A única maneira de alcançar o impossível é acreditar que é possível.", 
      "🔄 Sua vida não melhora apenas por esperar.", 
      "🌱 A felicidade não é algo pronto. <br> Ela vem de suas próprias ações.",
      "🚤 Você não pode atravessar o mar simplesmente parando e olhando para a água.",
      "🧂 O fracasso é o condimento que dá sabor ao sucesso.",
      "💪 A diferença entre uma pessoa bem-sucedida e outras não é falta de força,<br> não é falta de conhecimento, mas sim falta de vontade.",
      "🚀 Não seja uma versão mais fraca de você mesmo. <br> Seja uma versão mais forte de você mesmo.",
      "🌟 Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
      "🚀 O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "🌅 O que você faz hoje pode melhorar todos os amanhãs.", 
      "🚀 O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "🚀 A persistência, aliada à determinação, é a fórmula mágica que transforma o impossível em realizações extraordinárias.", 
      "🎉 A vida é feita de escolhas, faça escolhas que te façam feliz.",
      "🚀 O sucesso não é a chave para a felicidade.<br> A felicidade é a chave para o sucesso.",
      "🚀 Nunca desista do que você realmente quer fazer.<br> A pessoa com grandes sonhos é mais poderosa do que aquela com todos os fatos.",
      "❤️ A única maneira de fazer um ótimo trabalho é amar o que você faz.",
      "➡️ Acreditar que você pode é o primeiro passo para alcançar seus objetivos. <br> A confiança em si mesmo é metade do caminho para o sucesso.",
      "➡️ Não deixe que o ruído da opinião alheia impeça que você escute a sua voz interior. <br><span class='small'>- Steve Jobs</span>",
      "➡️ Explore livremente, copie os versos que ressoarem em seu coração e compartilhe. <br> Vamos espalhar a poesia juntos!",
      "➡️ É necessário saber ficar sozinho, em silêncio, mergulhado em si. <br> É fundamental estar satisfeito com a própria companhia. <br><span class='small'>- Filipe Ret (cantor e compositor brasileiro)</span>",
      "🚀 Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos. <br> <span class='small'>- Friedrich Nietzsche</span>",
      "💧 Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar.<br> Mas o mar seria menor se lhe faltasse uma gota. <br> <span class='small'>- Madre Teresa de Calcutá</span>",
      "🌟 Jamais desista das pessoas que ama. Jamais desista de ser feliz. Lute sempre pelos seus sonhos. <br>Seja profundamente apaixonado pela vida. Pois a vida é um espetáculo imperdível. <br> <span class='small'>- Augusto Cury</span>",


   ];

   var frases1 = [
     
   ];

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";

   // Obter o segundo atual
   var segundoAtual = new Date().getSeconds();

   // Calcula o índice de forma cíclica
   var indiceFrase = segundoAtual % frases.length;
   
   // Obtém a frase correspondente ao índice calculado
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;

   
   return fraseCorrespondente;
}