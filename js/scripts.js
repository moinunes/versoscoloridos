
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

/*
* Ao Clicar nos botoes <copiar>, copia  conteudo das div 
*/ 
 $(document).ready(function () {
   $('.btn_copiar').on('click', function () {
     var poemaDiv = $(this).closest('.poema-div'); 
     if (poemaDiv.length > 0) {
       // Obter o link e o texto associado
       var linkPoema = poemaDiv.prev('.clicavel').text().trim(); 
       // Obter o título do autor
       var autorTitulo = poemaDiv.find('.font_poema_titulo').text().replace('Autor:', '').trim(); 
       // Obter o conteúdo do poema dentro da div usando a classe .font_poema_1
       var poemaConteudo = poemaDiv.find('.font_poema_1').clone(); 
       // Substituir <br> por \n e pular linha onde há uma tag <br> isolada
       var poemaTexto = poemaConteudo.html().replace(/<br>\s*<br>/g, '<br>\n').replace(/<br>$/g, ''); 
       // Remover espaços à esquerda de cada linha
       var linhas = poemaTexto.split('\n');
       for (var i = 0; i < linhas.length; i++) {
         linhas[i] = linhas[i].trim();
       } 
       // Formatar o poema com quebras de linha e adicionar uma quebra de linha no final
       var poemaFormatado = linhas.join('\n') + '\n';
       // Substituir <br> por '' no conteúdo do poema
       poemaFormatado = poemaFormatado.replace(/<br>/g, ''); 
       // Obter a URL da página atual
       var urlPagina = window.location.href; 
       // Combinação do link, título, autor e poema
       var conteudoCompleto = linkPoema + '\nAutor: ' + autorTitulo + '\n' + poemaFormatado + 'Poemas: ' + urlPagina;
        var $tempTextArea = $('<textarea>');
       $tempTextArea.val(conteudoCompleto);
       $('body').append($tempTextArea); 
       $tempTextArea.select(); 
       try {
         document.execCommand('copy');
         alert('Conteúdo copiado com sucesso! \n Agora você pode colar usando Ctrl+V.');
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
 