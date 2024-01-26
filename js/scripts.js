

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
       var poemaConteudo = poemaDiv.find('.font_poema_1').clone(); 
       var poemaTexto = poemaConteudo.html().replace(/<br>\s*<br>/g, '<br>\n').replace(/<br>$/g, '');
       var linhas = poemaTexto.split('\n');
       for (var i = 0; i < linhas.length; i++) {
         linhas[i] = linhas[i].trim();
       }
       var poemaFormatado = linhas.join('\n') + '\n';
       var mensagemSpan = poemaDiv.find('.mensagem');
       poemaFormatado = poemaFormatado.replace(/<br>/g, '');
       var urlPagina = window.location.href;
       var conteudoCompleto = linkPoema + '\nAutor: ' + autorTitulo + poemaFormatado + 'Poemas: ' + urlPagina;
       var $tempTextArea = $('<textarea>');
       $tempTextArea.val(conteudoCompleto);
       $('body').append($tempTextArea); 
       $tempTextArea.select(); 
       try {
         $('.mensagem').empty();
         document.execCommand('copy');
         mensagemSpan.html('Conteúdo copiado com sucesso! <br> Agora você pode colar usando Ctrl+V.')
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
* Ao Clicar nos botoes <copiar>, "copia  VERSO"
*-------------------------------------------------------------*/ 
$(document).ready(function () {
   $('.btn_copiar_verso').on('click', function () {
       var blocoTexto = $(this).closest('.card-body').find('.card-text');
       var linhas = blocoTexto.text().trim().split('\n');
       var urlPagina = window.location.href;
       for (var i = 0; i < linhas.length; i++) {
           linhas[i] = linhas[i].trimLeft(); // Use trimLeft para remover espaços à esquerda
       }
       var textoFormatado = linhas.join('\n');
       var tempInput = $('<textarea>');
       tempInput.val(textoFormatado+ '\n\n' + urlPagina);
       $('body').append(tempInput);
       tempInput.select();
       document.execCommand('copy');
       tempInput.remove();
       $('.mensagem').empty();
       var mensagem = $(this).closest('.card-body').find('.mensagem');
       mensagem.html('<span class="text-success">Conteúdo copiado com sucesso! <br> Agora você pode colar usando Ctrl+V.</span>');
   });
});

 
/*-------------------------------------------------------------
* obter a frase com base no segundo fornecido
*-------------------------------------------------------------*/ 
function obterFrase() {
   // Obter o segundo atual
   var segundoAtual = new Date().getSeconds();

   // Formatando o segundo para duas casas decimais
   var segundoFormatado = ("0" + segundoAtual).slice(-2);
 
   // Definindo o array de frases
   var frases = [
      "Acredite em você mesmo e tudo será possível.",
      "O que você faz hoje pode melhorar todos os amanhãs.",
      "Nunca é tarde demais para ser quem você poderia ter sido.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "Seja a mudança que você deseja ver no mundo.",  
      "A vida é feita de escolhas, faça escolhas que te façam feliz.",
      "O sucesso não é a chave para a felicidade.\n A felicidade é a chave para o sucesso.",
      "Nunca desista do que você realmente quer fazer.\n A pessoa com grandes sonhos é mais poderosa do que aquela com todos os fatos.",
      "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
      "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
      "O melhor momento para plantar uma árvore foi há 20 anos.\n O segundo melhor momento é agora.",
      "A mente é tudo.\n Você se torna aquilo que você pensa.",
      "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
      "A gratidão transforma o que temos em suficiente.",
      "Seja o arco-íris na nuvem de alguém.",
      "A paciência é amarga, mas seu fruto é doce.",
      "Não espere por circunstâncias ideais, tome decisões e torne-as ideais.",
      "A persistência é o caminho do êxito.",
      "O otimismo é a fé em ação.",
      "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
      "A verdadeira medida do sucesso não reside nas vitórias fáceis, \n mas sim em quantas vezes você consegue se recuperar do fracasso. \n Cada revés é uma oportunidade de crescimento e superação.",
      "A verdadeira sorte consiste em ter algo pelo que lutar.",
      "Não há substituto para o trabalho árduo.",
      "A vida é 10% do que acontece conosco e 90% como reagimos a isso.",
      "O único modo de fazer um excelente trabalho é amar o que você faz.",
      "Sua vida só melhora quando você faz.\n Trabalhe em si mesmo e o resto seguirá.",
      "A felicidade é uma jornada, não um destino.", 
      "Seja você mesmo; todos os outros já estão ocupados.",
      "Não importa o quão devagar você vá, desde que você não pare.",
      "A mente é um antídoto para a dor.",
      "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
      "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      "A única maneira de fazer um excelente trabalho é amar o que você faz.",
      "Se você está indo pela estrada certa e está disposto a continuar andando, eventualmente você chegará lá.",
      "A única limitação que você possui é aquela que você escolhe impor a si mesmo.\n Liberte-se das barreiras autoimpostas e abra caminho para suas verdadeiras capacidades.",
      "Não há atalhos para qualquer lugar que valha a pena.",
      "Quanto mais você se elogia e celebra sua vida, mais há na vida para celebrar.",
      "A chave para o sucesso é começar antes de estar pronto.",
      "A única coisa no caminho do seu sucesso é a sua mente.",
      "Você nunca falhará até parar de tentar.",
      "O sucesso é encontrar satisfação no próprio trabalho.",
      "A vida é 10% do que acontece conosco e 90% como reagimos a isso.",
      "A única maneira de alcançar o impossível é acreditar que é possível.", 
      "Sua vida não melhora apenas por esperar.", 
      "A felicidade não é algo pronto. \n Ela vem de suas próprias ações.",
      "Você não pode atravessar o mar simplesmente parando e olhando para a água.",
      "O fracasso é o condimento que dá sabor ao sucesso.",
      "A diferença entre uma pessoa bem-sucedida e outras não é falta de força,\n não é falta de conhecimento, mas sim falta de vontade.",
      "Não seja uma versão mais fraca de você mesmo. \n Seja uma versão mais forte de você mesmo.",
      "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "O que você faz hoje pode melhorar todos os amanhãs.", 
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "A persistência, aliada à determinação, é a fórmula mágica que transforma o impossível em realizações extraordinárias.", 
      "A vida é feita de escolhas, faça escolhas que te façam feliz.",
      "O sucesso não é a chave para a felicidade.\n A felicidade é a chave para o sucesso.",
      "Nunca desista do que você realmente quer fazer.\n A pessoa com grandes sonhos é mais poderosa do que aquela com todos os fatos.",
      "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
      "Acreditar que você pode é o primeiro passo para alcançar seus objetivos. \n A confiança em si mesmo é metade do caminho para o sucesso.",
   ];

   // Obtendo a frase correspondente ao segundo
   var frase_padrao ="Sua autenticidade é sua beleza.\n Abrace quem você é, pois você é único e especial."; 
   var fraseCorrespondente = frases[Number(segundoFormatado) - 1] || frase_padrao ;
   

   return fraseCorrespondente;
}