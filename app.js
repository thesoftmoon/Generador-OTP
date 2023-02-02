const numbs = document.querySelector('.otp');

const copyBtn = document.querySelector('.clipboard-btn');

function generadorOtp (){
    const numeros = '0123456789'; 
    let otp = '';

    for(let i = 0; i < 6; i++){
        otp += numeros[Math.floor(Math.random() * 10)];
    }
    return numbs.innerHTML = `<h3>${otp}</h3>`;
}

copyBtn.addEventListener('click', function (){
    console.log('presionaste el boton de copiar');
})

generadorOtp();
setInterval(generadorOtp, 6000);
