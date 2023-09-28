export default function randomidgenerator(){
    let id = ''
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charLength = characters.length
    for(let i=0;i <8;i++) {
        const randomChar = Math.floor(Math.random() * charLength)
        id+=characters.charAt(randomChar)
    }
    return id;
}