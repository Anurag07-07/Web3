const crypto = require('crypto')

const value = "Anurag"
const hash = crypto.createHash('sha256').update(value).digest('hex')
console.log(hash);


//////Find The Hash//////////////

function findHash(n){
  let count = 0;
  while (true) {
    let stringCount = count.toString()
    //Find the Hash
    let hash = crypto.createHash('sha256').update(stringCount).digest('hex')
    if (hash.startsWith(n)) {
      return {hash,stringCount}
    }
    count++;
  }
}

const ans = findHash('00000')
console.log(`The Hash is ${ans.hash} and Value is ${ans.stringCount}`);



/////////Find The Nonce/////////////

function findNonce(n){
  let count = 0;
  while (true) {
    let stringValue = `Rs 10000 Anurag =>  Aniket ` + count.toString()
    let hash = crypto.createHash('sha256').update(stringValue).digest('hex')
    if (hash.startsWith(n)) {
      return {hash,count,stringValue}
    }
    count++
  }
}

const ans1 = findNonce('00000')
console.log(`The Hash is ${ans1.hash} The Nonce is ${ans1.count} The Original String is ${ans1.stringValue}`);

