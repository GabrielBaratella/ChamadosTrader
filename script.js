/*
const data = new Date()
const dia = String(data.getDate().padStart(2, '0')) // 1 -> 01
const mes = String(data.getMonth() +1).padStart(2,'0') //janeiro = 0

const dataAtual = `${dia}/${mes}`
document.getElementById("data").innerHTML = (dataAtual);*/
const addloading = () =>{
    const button = document.querySelector('button');
    button.innerHTML ='<img src="/imagens/favicon-16x16.png" class="loading">';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
}
document.querySelector('#formularios').addEventListener('enviar', handleSubmit);