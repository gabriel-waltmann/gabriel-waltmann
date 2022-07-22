
window.onload = () =>{
    const button = document.querySelector("#mobileMenu")

/*     typingAnimation()
 */
    button.addEventListener("click", activeMenu)

}

/* function typingAnimation(){
    const textMain = document.querySelector('.textMain')

    const firstName = "Gabriel"
    const lastName = "Waltmann"

    const lengthFirstName = firstName.length
    const lengthLastName = lastName.length

    let currentFirstName = 0
    let currentLastName = 0

    setInterval(() => {
        document.querySelector("#line").classList.toggle('notVisible');
    }, 300);

    setTimeout(() => {
        setInterval(() => {
            if(currentFirstName < lengthFirstName){
                const currentText = textMain.innerText
                textMain.innerText = firstName[currentFirstName] + currentText
                currentFirstName++
            }else if (currentFirstName == lengthFirstName && currentLastName <= lengthFirstName){
                if(lastName[currentLastName] == "W"){
                    textMain.innerHTML += " "
                    textMain.innerHTML += lastName[currentLastName]
                    currentLastName++
                    console.log(textMain.innerText)
                }else{
                    textMain.innerText += lastName[currentLastName]
                    currentLastName++
                }
        
            }
    
        }, 300);
    }, 1500);
} */

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
