const button = document.querySelector("#mobileMenu")
const menu = document.querySelector(".menu") 

window.onload = () =>{

    button.addEventListener("click", activeMenu)
    button.addEventListener("touchstart", activeMenu)
}

function activeMenu(event){
    if(event.type === "touchstart") event.preventDefault()
    menu.classList.toggle('active');
    button.classList.toggle('active')
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
