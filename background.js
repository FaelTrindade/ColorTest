const botao = document.getElementById('alterar')

botao.addEventListener('click',()=>{
    const input = document.getElementById('valor').value

const container = document.getElementById('container')

container.style.backgroundColor = input

})