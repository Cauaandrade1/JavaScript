const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento prevenido')
    Calcular()
});


function Calcular(){
    const p = document.getElementById('peso')
    const a = document.getElementById('altura')
    const res = document.getElementById('resultado')

    res.innerHTML = ''

    const para = document.createElement('p')
    para.classList.add('paragrafo-res')


    const peso = Number(p.value)
    const altura = Number(a.value)

    const imc = peso / ( altura ** 2) 
    if(p.value.length == 0 || a.value.length == 0 || !peso || !altura){
        para.classList.add('bad')
        para.innerHTML = `Algum dados não foram preenchidos corretamente`
        res.appendChild(para)
    } else{
        if (imc > 0 && imc < 18.5){
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
            res.appendChild(para)
        } else if (imc < 24.9){
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
            res.appendChild(para)
        } else if ( imc < 29.9){
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
            res.appendChild(para)
        } else if ( imc < 34.9){
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
            res.appendChild(para)
        } else if ( imc < 39.9){
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
            res.appendChild(para)
        } else {
            para.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
            res.appendChild(para)
        }
    }
}
