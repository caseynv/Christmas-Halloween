const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
function renderCountdown(){
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.  
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // If the count down is over, write some text 
  if (distance > 0) {
 
  btn.addEventListener("click", () => {
    greeting.textContent = 'Wishing you a merry Christmas';
    greeting.style.fontFamily = "'Mountains of Christmas', cursive";
    
  })
  }
    else if(distance < 0){
    clearInterval(x);
    greeting.textContent = "Happy New Year!!!";
    greeting.style.fontFamily = "'Mountains of Christmas', cursive";
  }
  else{
    return
  }
}, 1000);
}

renderCountdown()