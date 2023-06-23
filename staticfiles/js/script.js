/*========================================================================================================================
                                            NavBar
=========================================================================================================================*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
     nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
     nav.removeAttribute("style");
   }
} 
/*========================================================================================================================
                                            Image Slider
=========================================================================================================================*/
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*========================================================================================================================
                                            Achievements Animated Number Counter
=========================================================================================================================*/
// get the counter section element
const counterSection = document.querySelector('.flex-awards');

// set a flag to check if the numbers have been incremented already
let numbersIncremented = false;

// add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  // get the current scroll position of the window
  const scrollPosition = window.scrollY;

  // check if the counter section is visible on the screen
  if (scrollPosition + window.innerHeight >= counterSection.offsetTop && !numbersIncremented) {
    //Animated Number counter
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 100;

    counterNum.forEach((curElem) => {
      const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNum = parseInt(curElem.innerText);

        const incerementNumber = Math.trunc(targetNumber/ speed)

        if(initialNum < targetNumber){
          curElem.innerText = `${initialNum + incerementNumber}+`;
          setTimeout(updateNumber, 30)
        }
      };

      updateNumber();
    });

    // set the flag to true to prevent the numbers from incrementing again
    numbersIncremented = true;
  }
});
