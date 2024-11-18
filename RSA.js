//-------key Generate----------
const p=3;
const q=11;
const n=p*q;
const z=(p-1)*(q-1);
const e=3;
for(let d=0;d<=1000;d++){
    if(d*e%z==1){
        var PrivateKey=d
        console.log('Private Key:',PrivateKey)
      break;
    }
    
}

// -------Encryption------------

const Alphabets =' abcdefghijklmnopqrstuvwxyz'
const AlphabetsArray=Alphabets.split('')

const Message='meet me at lalkhanbajar';
const msgArray =Message.split('')

const EncryptedArrayValue=[]
for(let i=0;i<msgArray.length;i++){
    const Letter = msgArray[i]
    const Index =AlphabetsArray.indexOf(Letter)
    const A =Math.pow(Index,e)
    const B=A%n
    EncryptedArrayValue.push(B)
}
console.log(EncryptedArrayValue)

let splitArray = EncryptedArrayValue.flatMap(num => String(num).split('').map(Number));

const encryptedMsgArray=[]
for(value of splitArray){
    const alph=Alphabets[value]
    encryptedMsgArray.push(alph)
}

const encryptedMsg =encryptedMsgArray.join("")
console.log('Encrypted Messege:',encryptedMsg)
 

// -------Decryption--------------

const decryMsgArray=[];
for(let i=0;i<EncryptedArrayValue.length;i++){
    const value = EncryptedArrayValue[i]
    const A =Math.pow(value,PrivateKey)
    const B=A%n
    const Letter=AlphabetsArray[B]
    decryMsgArray.push(Letter)
}

const DecryMsg =decryMsgArray.join('')
console.log('Decrypted Message:',DecryMsg)