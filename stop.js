// Função para sortear uma letra aleatória
function sortearLetra() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
    return letraSorteada;
}

// Event listener para o botão de sorteio
document.getElementById('sortearBtn').addEventListener('click', function() {
    const letra = sortearLetra();
    document.getElementById('letraSorteada').textContent = `Letra Sorteada: ${letra}`;
});
// Função para sortear uma letra aleatória
function sortearLetra() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
    return letraSorteada;
}

// Event listener para o botão de sorteio
document.getElementById('sortearBtn').addEventListener('click', function() {
    const letra = sortearLetra();
    document.getElementById('letraSorteada').textContent = `Letra Sorteada: ${letra}`;
    document.getElementById('mostrarRegrasBtn').style.display = 'block';
    document.getElementById('iniciarBtn').style.display = 'block';
});

// Event listener para o botão "Mostrar Regras"
document.getElementById('mostrarRegrasBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.regras-container').style.display = 'block';
});

document.getElementById('bt-yellow').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    
});

document.getElementById('esconderRegrasBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.regras-container').style.display = 'none';
});

document.getElementById('bt-yellow').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    
});

function regras() {
    window.location.href = 'tela1.html';


 // Agendar o clique automático no botão após 3 segundos (3000 milissegundos)
 setTimeout(function() {
     document.getElementById('redirecionarBtn').click();
 }, 3000);
 }
 function entrar() {
    window.location.href = 'tela_de_jogo.html';


 // Agendar o clique automático no botão após 3 segundos (3000 milissegundos)
 setTimeout(function() {
     document.getElementById('redirecionarBtn').click();
 }, 3000);
 }


