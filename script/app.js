
window.onload = () =>{
    const button = document.querySelector("#mobileMenu")

    typingAnimation()

    button.addEventListener("click", activeMenu)

}

function typingAnimation(){
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

function activeMenu(){
    const menu = document.querySelector(".menu")

    menu.classList.toggle('active');
}

function animeScroll() {
	
	document.querySelectorAll('[data-anime]').forEach((element, index) => {
		if(element.getBoundingClientRect().top < window.innerHeight) {
			element = element.setAttribute('class', "active");
		}else{
            element = element.removeAttribute('class', "active");
        }		
	})

}


window.addEventListener('scroll', animeScroll);
