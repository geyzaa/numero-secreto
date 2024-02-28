const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//variavel + evento (pegar result, função)
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results [0][0].transcript
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}