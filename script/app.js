
window.onload = () =>{
    const textMain = document.querySelector('.textMain')

    const name = "GabrielﾠWaltmann"

    const numberOfLetters = name.length

    let currentLetter = 0

    setInterval(() => {
        if(currentLetter < numberOfLetters){
            textMain.innerText += name[currentLetter]
            currentLetter++
        }

        /* if(currentLetter < numberOfLetters){
            if(textMain.innerText[textMain.length] == "|"){
                console.log("textMain.innerText[currentLetter-1]")
            }else{
                console.log("textMain.innerText[currentLetter-1]")
            }
            console.log(textMain.innerText[currentLetter-1])
            textMain.innerText += `${name[currentLetter]}` 
            currentLetter++

        }else{
            clearInterval() 
        } */
    }, 300);

}