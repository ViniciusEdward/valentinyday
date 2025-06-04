// DOM
const imgtrocar = document.querySelector("#imgtrocar")
const btvingadores = document.querySelector("#btvingadores")
const btbatman = document.querySelector("#btbatman")
const btcorra = document.querySelector("#btcorra")
const btsuperman = document.querySelector("#btsuperman")
const texto = document.querySelector("#txt p")
const musica = document.querySelector("audio")
const video = document.querySelector("video")


// Evento
btvingadores.addEventListener('click',vingadores)
btbatman.addEventListener('click',batman)
btcorra.addEventListener('click',corra)
btsuperman.addEventListener('click',superman)

// Funções
function vingadores(){
    imgtrocar.src= "images/1.jpg"
    texto.textContent = 'Clara Vitória, meu amor, você é muito mais do que poderia sonhar. Sua presença transforma meus dias comuns em momentos extraordinários, me inspira a ser alguém melhor e me faz enxergar a beleza até nas pequenas coisas. Não sei como seria minha vida sem você — aliás, nem quero descobrir. Clarinha, você é meu alicerce, a dona do meu coração e a razão pela qual sigo em frente todos os dias. Quando penso em futuro, só consigo imaginar nós dois, construindo sonhos, compartilhando vitórias e superando qualquer obstáculo, sempre juntos.'
    musica.play();
    video.style.display = "block";
    video.play(); 
}

function batman(){
    imgtrocar.src= "images/2.jpg"
    texto.textContent = 'Nem, meu amor, desde que você chegou, tudo ganhou sentido. Sua risada ilumina meus dias, seu abraço é o meu refúgio e sua voz acalma qualquer inquietação da minha alma. Não sei como vivi tanto tempo sem a doçura do seu carinho ou a leveza da sua companhia. Eu te amo profundamente, de um jeito que nem as palavras conseguem traduzir com exatidão. Você me completa, me dá forças e torna cada instante muito mais feliz. Não existe cenário em que eu queira estar, se não for ao seu lado, segurando sua mão e cuidando de você.'
    musica.play();
    video.style.display = "block";
    video.play(); 
}

function corra(){
    imgtrocar.src= "images/3.jpg"
    texto.textContent = 'Macaquinha, meu coração é inteiramente seu. Nunca imaginei que alguém pudesse mexer tanto comigo, mas você chegou e bagunçou tudo — para melhor. Sua alegria contagia, sua bondade inspira e sua coragem me impressiona todos os dias. A vida ao seu lado é uma aventura deliciosa, repleta de amor, cumplicidade e afeto. Não sei viver sem sua presença, seus conselhos, sua loucura e até seu jeito teimoso que me encanta. Você é minha parceira, minha cúmplice e a melhor pessoa que já conheci. E sempre será.'
    musica.play();
    video.style.display = "block";
    video.play(); 
}

function superman(){
    imgtrocar.src= "images/4.jpg"
    texto.textContent = 'Clarinha, minha vida se transformou desde que te conheci. Você me mostrou um amor tão verdadeiro, tão intenso, que às vezes me pergunto como tive tanta sorte de cruzar seu caminho. Quando te abraço, sinto que o mundo para; quando olho nos seus olhos, percebo que encontrei minha paz. Eu te amo com todas as minhas forças e sei, com a maior certeza do mundo, que não existe vida plena sem você ao meu lado. Quero dividir alegrias, superar desafios e envelhecer contigo, sempre cultivando esse amor que só cresce a cada dia.'
    musica.play();
    video.style.display = "block";
    video.play();    
}


