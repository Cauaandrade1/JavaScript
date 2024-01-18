function VerificaNumero(n){
    if (isValid(n)){
        if (n % 3 ===  0 && n % 5 === 0){
            return 'FizzBuzz'
        } else if (n % 3 === 0){
            return 'Fizz'
        } else if(n % 5 === 0){
            return 'Buzz'
        } else{
            return n
        }
    } else{
        return n
    }
}

function isValid(n){
    if (typeof n !== 'number'){
        return false
    }if(n < 0 || n > 100){
        return false
    } else{
        return true
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i, '=',VerificaNumero(i))
}