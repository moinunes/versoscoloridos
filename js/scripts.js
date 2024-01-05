
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