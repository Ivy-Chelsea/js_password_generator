const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//get the button elements from the html file
//create random characters
//concatenate the random characters created
//store the value in the buttons
let firST = document.getElementById("first")
let seC = document.getElementById("sec")

function create() {
    let result = ""
    for (let z = 0; z < 15; z++) {
        let c = Math.floor(Math.random() * characters.length)
        let res = characters[c]
        result += res
    }
    return result
}

function generator() {
    
    firST.textContent = create()
    seC.textContent = create()
}