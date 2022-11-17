const buttonLower = document.querySelectorAll('.buttons .lower')
const buttonUpper = document.querySelectorAll('.buttons .upper')

const items1 = document.querySelector('#vintageBackbag')
const items2 = document.querySelector('#leviShoes')
const total = document.querySelector('#total')

buttonUpper[0].onclick = (e)=>Checkout(buttonUpper[0], e)
buttonUpper[1].onclick = (e)=>Checkout(buttonUpper[1], e)

buttonLower[0].onclick = (e)=>Checkout(buttonLower[0], e)
buttonLower[1].onclick = (e)=>Checkout(buttonLower[1], e)

let sum = 0
function Checkout(element, e){
    const product = e.target.parentNode.parentNode.parentNode.firstElementChild.outerText
    
    if(element.className == 'upper'){
        if (product == 'Vintage Backbag') {
            let current1 = Number(items1.innerText)
            current1 += 1
            items1.innerText = current1
            sum+=54.99
            showTotal(sum)
            return
        }
        console.log(element)
        let current2 = Number(items2.innerText)
        current2 += 1
        items2.innerText = current2
        sum+=74.99
        showTotal(sum)
    }

    else{
        if (product == 'Vintage Backbag' && items1.innerText >= 1) {
            let current1 = Number(items1.innerText)
            current1 -= 1
            items1.innerText = current1
            sum-=54.99
            showTotal(sum)
            return
        }
        if(items2.innerText >=1){
            let current2 = Number(items2.innerText)
            current2 -= 1
            items2.innerText = current2
            sum-=74.99
            showTotal(sum)
        }
    }
}

function showTotal(num){
    let TOTAL = num.toFixed(2)
    total.innerText = `$${Math.abs(TOTAL)}`
}

function validateForm(){
    const inputsForm = document.querySelectorAll('input[type=text]')
    let validated = true;
    inputsForm.forEach(input => {
        if(!input.value){
            validated = false
        }
    })
    if(validated){
        alert('Validação bem sucedida')
        return
    }
    alert('Validação não sucedida. Todos os campos devem ser preenchidos')
}


const body = document.getElementsByTagName('body')
body[0].onkeydown = (e)=>{
    if(e.key == 'Enter') validateForm()
}


//fazer o click enter
