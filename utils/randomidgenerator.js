export default function randomidgenerator(){
    let id = ''
    const characters = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i <8;i++) {
        const randomChar = Math.floor(Math.random() * characters.length)
        id+=characters.charAt(randomChar)
    }
    return id;
}