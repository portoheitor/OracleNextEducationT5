const areaDeTexto = document.querySelector('#text-area');
areaDeTexto.addEventListener('keypress', function(e) {

  if(!validaChar(e)) {

    e.preventDefault();
    
  }
})

function validaChar(e) {
  
  const char = String.fromCharCode(e.keyCode); //transforma o keyCode em caracteres

  const charPadrao = /[a-z 0-9]/;

  if(char.match(charPadrao)){
    return true;
  }
}



const messageArea = document.querySelector('#message-area');

function criptografar() {

  let texto = areaDeTexto.value;

  let resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

  document.getElementById('message-area').innerHTML = '<textarea readonly id="message-receive" class="texto">' + resultadoCripto + '</textarea>' + '<button class="btn botao1 btn-copia" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {

  let texto = areaDeTexto.value;

  let resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('message-area').innerHTML = '<textarea readonly id="message-receive" class="texto">' + resultadoDescripto + '</textarea>' + '<button class="btn botao1 btn-copia" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  
  let copiarTexto = document.getElementById('message-receive')

  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 99999);

  document.execCommand("copy");

  let copiadoTexto = document.querySelector('#mensagem-copiado');

  if (!copiadoTexto) {
    copiadoTexto = document.createElement('p');
    copiadoTexto.textContent = "Texto copiado!";
    copiadoTexto.setAttribute("id", "mensagem-copiado");
    messageArea.insertBefore(copiadoTexto, document.getElementById('copiar'));
  }
}
