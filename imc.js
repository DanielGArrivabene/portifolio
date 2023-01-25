
let abaixo = document.getElementById('iabai')
let normal = document.getElementById('inorm')
let sobre = document.getElementById('isobr')
let obeso = document.getElementById('iobes')
let alt = document.querySelector('input#ialt')
let peso = document.querySelector('input#ipeso')
let pimc = document.querySelector('p#ipimc')




function calcular() {

    var imc = peso.value / (alt.value * alt.value)

    function conta() {
    
        pimc.innerHTML = pimc.innerHTML + ' ' + imc.toFixed(2)
    }

    if (alt.value.length == 0 && peso.value.length == 0 || alt.value.length == 0 || peso.value.length == 0) {

        window.alert('Digite valores válidos.')

    } else if (imc < 18.5) {

        limpar()

        conta()

        abaixo.style.background = 'yellow'
        abaixo.style.color = 'black'
    } else if (imc >= 18.5 && imc < 25) {

        limpar()

        conta()

        normal.style.background = 'green'
        normal.style.color = 'white'
    } else if (imc >= 25 && imc < 30) {

        limpar()

        conta()

        sobre.style.background = 'orange'
        sobre.style.color = 'white'
    } else if (imc >= 30) {

        limpar()

        conta()

        obeso.style.background = 'red'
        obeso.style.color = 'white'
    }
}




function limpar() {

    pimc.innerHTML = 'Seu IMC é:'

    abaixo.style.background = ''
    normal.style.background = ''
    sobre.style.background = ''
    obeso.style.background = ''
    abaixo.style.color = 'black'
    normal.style.color = 'black'
    sobre.style.color = 'black'
    obeso.style.color = 'black'
}