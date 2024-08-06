const botao = document.getElementById('alterar')
const container = document.getElementById('container')
const colorBox = document.getElementById('colorValue')
const input = document.getElementById('valor')

botao.addEventListener('click',()=>{
    const inputValue=input.value
container.style.backgroundColor = inputValue
colorBox.value = inputValue
})

function Box(){
    const colorBoxValue = colorBox.value
container.style.backgroundColor = colorBoxValue
input.value = colorBoxValue
} 
