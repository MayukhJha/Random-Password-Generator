
const answer=document.getElementById("answer");

function generatepassword(length,includelowercase,includeuppercase,includenumbers,includesymbol){
    const lowercasechars=`abcdefghijklmnopqrstuvwxyz`;
    const uppercasechars=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberchars=`0123456789`;
    const symbols=`!@#$%^&*()_+=-`;

    let allowedchars=``;
    let password=``;

    allowedchars+=includelowercase?lowercasechars:``;
    allowedchars+=includeuppercase?uppercasechars:``;
    allowedchars+=includenumbers?numberchars:``;
    allowedchars+=includesymbol?symbols:``;
    
    if(length<=0){
        return `PASSWORD LENGTH SHOULD BE GREATER THAN 0`;
    }
    if(allowedchars.length==0){
        return `AT LEAST ONE SET OF CHARACTER NEED TO BE SELECTED`;
    }

    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password+=allowedchars[randomindex];
    }
    return password
}

const passwordlength=12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbol=true;

const password=generatepassword(passwordlength,includelowercase,includeuppercase,includenumbers,includesymbol);
console.log(`GENERATED PASSWORD = ${password}`);
answer.textContent=`PASSWORD = ${password}`;