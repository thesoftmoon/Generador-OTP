const numbs = document.querySelector('.otp');
const copyBtn = document.querySelector('.clipboard-btn');
const copyAlert = document.querySelector('.text-copy-alert');

function generadorOtp (){
    const numeros = '0123456789'; 
    let otp = '';
    
    for(let i = 0; i < 6; i++){
        otp += numeros[Math.floor(Math.random() * 10)];
    }
    return numbs.innerHTML = `<h3>${otp}</h3>`;
}

const copyCode = async ()=>{
    const otpCode = numbs.textContent;
    try{
        navigator.clipboard.writeText(otpCode);
        console.log('Se copio el codigo: ' + otpCode)
    }
    catch(err){
        console.log('No se copio el texto')
    }
}    
    

copyBtn.addEventListener('click', function (){
    copyAlert.classList.add('active-alert');
    setTimeout(function(){
        copyAlert.classList.remove('active-alert');
        console.log('removido');
    }, 1900);
    copyCode();
})



window.addEventListener('DOMContentLoaded', (event) =>{
    console.log('cargado...');
    generadorOtp();
    setInterval(generadorOtp, 6000);
})

