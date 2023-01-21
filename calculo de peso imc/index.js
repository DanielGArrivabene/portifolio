
let abaixo = document.getElementById('iabai')
let normal = document.getElementById('inorm')
let sobre = document.getElementById('isobr')
let obeso = document.getElementById('iobes')
let alt = document.querySelector('input#ialt')
let peso = document.querySelector('input#ipeso')

function calcular() {
    var imc = peso.value / (alt.value * alt.value)

    if (imc < 8.5) {
        abaixo.style.background = 'red'
        abaixo.style.color = 'white'
    } else if (imc >= 8.5 && imc < 25) {
        normal.style.background = 'red'
        normal.style.color = 'white'
    } else if (imc >= 25 && imc < 30) {
        sobre.style.background = 'red'
        sobre.style.color = 'white'
    } else if (imc >= 30) {
        obeso.style.background = 'red'
        obeso.style.color = 'white'
    }
}