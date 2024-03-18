function* geradora1(){
    //Código qualquer
    yield 'Valor 1'
    //Código qualquer
    yield 'Valor 2'
    //Código qualquer
    yield 'Valor 3'
}

function* geradora2(){
    yield 0
    yield 1
    yield 2
}

function* geradora3(){
    yield* geradora2()
    yield 3
    yield 4
    yield 5
}

const g3 = geradora3()
for (let v of g3){
    console.log(v)
}

function* geradora4(){
    yield function(){
        console.log('Vim do y1')
    }

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = geradora4()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()