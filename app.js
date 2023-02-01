const numbs = document.querySelector('.otp');

function generadorOtp (limite){
    const numeros = '0123456789'; 
    let otp = '';

    for(let i = 0; i < limite; i++){
        otp += numeros[Math.floor(Math.random() * 10)];
    }
    return otp
}
//console.log(numbs.classList)
console.log(generadorOtp(5));