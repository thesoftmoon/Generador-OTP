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
    //copyClipboard()
    copyCode()
})

navigator.clipboard.writeText("This is the text to be copied").then(() => {
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });


generadorOtp();
setInterval(generadorOtp, 6000);
