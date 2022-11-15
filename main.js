const buttonLower = document.querySelectorAll('.buttons .lower')
const buttonUpper = document.querySelectorAll('.buttons .upper')

const items1 = document.querySelector('#vintageBackbag')
const items2 = document.querySelector('#leviShoes')
const total = document.querySelector('#total')

//let sum = 0
//fazer o total
//fazer o click enter
//fazer a validação

buttonUpper[0].onclick = (e)=>Checkout(buttonUpper[0], e)
buttonUpper[1].onclick = (e)=>Checkout(buttonUpper[1], e)

buttonLower[0].onclick = (e)=>Checkout(buttonLower[0], e)
buttonLower[1].onclick = (e)=>Checkout(buttonLower[1], e)

function Checkout(element, e){
    const product = e.target.parentNode.parentNode.parentNode.firstElementChild.outerText
    
    if(element.className == 'upper'){
        console.log(element)
        
        if (product == 'Vintage Backbag') {
            let current1 = Number(items1.innerText)
            current1 += 1
            items1.innerText = current1
            sum+=54.99
            return
        }
        let current2 = Number(items2.innerText)
        current2 += 1
        items2.innerText = current2
        sum+=74.99
    }

    else{
        if (product == 'Vintage Backbag' && items1.innerText >= 1) {
            let current1 = Number(items1.innerText)
            current1 -= 1
            items1.innerText = current1
            sum-=54.99
            return
        }
        if(items2.innerText >=1){
            let current2 = Number(items2.innerText)
            current2 -= 1
            items2.innerText = current2
            sum-=74.99
        }
    }

    console.log(currentPrice)
}
