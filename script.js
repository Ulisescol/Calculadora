let boton = document.getElementById('calcular')
let vol = document.getElementById('vol')
let flu = document.getElementById('flu')
let mant = document.getElementById('mant')
let error = document.getElementById("mensajeError") 
let input = document.getElementById("peso")
boton.addEventListener('click', calcular)

function calcular(){
let peso = document.getElementById("peso").valueAsNumber
let resultado

if (peso<=30){
    resultado = Holliday()
    vol.style.display = "block"
    vol.innerHTML = resultado + " cc" 
    flu.style.display = "block"
    flu.innerHTML = (resultado / 24).toFixed(0) + " cc/hr"
    mant.style.display = "block"
    mant.innerHTML = (resultado * 1.5) + " m+m/2" 
    error.style.display = 'none'
}
else if (peso == 0) {
    error.style.display = 'block'
    error.innerHTML = "debes ingresar un número mayor a 0"
    vol.style.display = "none"
    flu.style.display = "none"
    mant.style.display = "none"
} 
else{
    resultado = Superficie()
    vol.style.display = "block"
    vol.innerHTML = (resultado * 1500).toFixed(0)  + " cc (x1500)" 
    flu.style.display = "block"
    flu.innerHTML = (resultado * 2000).toFixed(0) + " cc(x2000)" 
    error.style.display = 'none'
}

function Holliday() {
    if(peso<=10){
        let pesoMenor10 
        pesoMenor10 = peso* 100
        console.log(pesoMenor10)
        return pesoMenor10
    }
    else if(peso > 10 && peso <= 20 ){
        let pesoMayor10
        pesoMayor10 = (((peso - 10) * 50) + 1000)
        console.log(pesoMayor10)
        return pesoMayor10
    }
    else if(peso > 20 && peso <= 30){
        let pesoMayor20
        pesoMayor20 = ((((peso - 20) * 20) +1500))
        console.log(pesoMayor20)
        return pesoMayor20
    }
}

function Superficie(){
    if (peso > 30){
        supCorp = ((peso * 4) + 7) / (peso + 90)
        console.log(supCorp)
        return supCorp
    }
}
}