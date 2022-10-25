const btnEnviar = document.querySelector('.btn-enviar')
const input = document.querySelector('.email')

btnEnviar.addEventListener('click', () => {
    if(input.value == ''){
        input.classList.add('erro')
        input.classList.remove('nice')
    }else if(input.value != ''){
        input.classList.remove('erro')
        input.classList.add('nice')
    }
})