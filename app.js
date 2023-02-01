const numbs = document.querySelector('.otp');

function generadorOtp (){
    const numeros = '0123456789'; 
    let otp = '';

    for(let i = 0; i < 6; i++){
        otp += numeros[Math.floor(Math.random() * 10)];
    }
    return numbs.innerHTML = `<h3>${otp}</h3>`;
}

setInterval(generadorOtp, 6000);
