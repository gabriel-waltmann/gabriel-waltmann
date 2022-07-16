
window.onload = () =>{
    const textMain = document.querySelector('.textMain')

    const name = "Gabriel_Waltmann"

    const numberOfLetters = name.length

    let currentLetter = 0

    setInterval(() => {
        document.querySelector("#line").classList.toggle('notVisible');
    }, 300);
    setTimeout(() => {
        setInterval(() => {
            if(currentLetter < numberOfLetters){
                textMain.innerText += name[currentLetter]
                currentLetter++
            }
    
        }, 300);
    }, 1500);
    

}