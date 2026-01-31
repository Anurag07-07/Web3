/**
 * Public and Private Keys in Web3
 * 
 * @typedef {Object} KeyPair
 * @property {string} publicKey - The public key derived from the private key. Used to receive transactions and identify accounts on the blockchain. Publicly shareable and visible on the ledger.
 * @property {string} privateKey - The private key used to sign transactions and prove ownership. Must be kept secret and secure. Anyone with access to this key can control the associated account and funds.
 * 
 * @description
 * In Web3/Ethereum:
 * - Public Key: Derived from the private key using elliptic curve cryptography (ECDSA). Used to verify signatures and generate wallet addresses. Safe to share publicly.
 * - Private Key: A secret 256-bit number that must be protected. Used to sign transactions cryptographically. Compromise of the private key means loss of account control and funds.
 * 
 * @example
 * // Public key is used in the address derivation
 * // Private key signs transactions
 * const wallet = ethers.Wallet.createRandom();
 * console.log(wallet.publicKey);   // Public key (shareable)
 * console.log(wallet.privateKey);  // Private key (keep secret)
 */

// 1 byte => 0-255 number 
// const bytes = new Uint8Array([256])
// console.log(bytes);

//Private keys and public keys => array of bytes 32 bytes5


//Bytes to Text
function bytestoArray(bytes){
  return new TextDecoder().decode(bytes)
}


const bytes = new Uint8Array([72,101,108,108,111])
const ans = bytestoArray(bytes)
console.log(ans);


//Text to Bytes
function asciitoBytes(asciiString){
  // return new Uint8Array([...asciiString].map((char)=>char.charCodeAt(0)))
  return new TextEncoder().encode(asciiString)
}

const ascii = "Hello Myself AJ"
const ans1  = asciitoBytes(ascii)
console.log(ans1);


//Hex => 4 bytes