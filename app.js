function insert(num) {
    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
}

function clean() {
    document.getElementById('result').innerHTML = ""
}

function back() {
    let bac = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = bac.substring(0, bac.length - 1)

}

function calculate() {
    let resultado = document.getElementById('result').innerHTML
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado)
    }

    else {
        document.getElementById('result').innerHTML = 'nothing to calculate'
    }
}