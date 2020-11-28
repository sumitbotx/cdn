          $(document).ready(function(){
           // Add smooth scrolling to all links
           $("a").on('click', function(event) {
         
             // Make sure this.hash has a value before overriding default behavior
             if (this.hash !== "") {
               // Prevent default anchor click behavior
               event.preventDefault();
         
               // Store hash
               var hash = this.hash;
         
               // Using jQuery's animate() method to add smooth page scroll
               // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
               $('html, body').animate({
                 scrollTop: $(hash).offset().top
               }, 800, function(){
         
                 // Add hash (#) to URL when done scrolling (default click behavior)
                 window.location.hash = hash;
               });
             } // End if
           });
         });
         
         var myVar;
         
         function myFunction() {
           myVar = setTimeout(showPage, 4000);
         }
         
         function showPage() {
           document.getElementById("loaderr").style.display = "none";
           document.getElementById("myDiv").style.display = "block";
         }
         
         
         
function countToShow() {

  var countdownElement = document.getElementById('countdown');
  var contentElement = document.getElementById('content');
  var adsElement = document.getElementById('ads');
  var remainingSeconds = 15;

  adsElement.style.display = '';
  countdownElement.innerHTML = "You have to wait for " +remainingSeconds+ " seconds here to let us generate links.";

  var interval = setInterval(function() {

    countdownElement.innerHTML = "You have to wait for " +--remainingSeconds+ " seconds here to let us generate links.";

    if (remainingSeconds === 0) {
      clearInterval(interval);
      contentElement.style.display = '';
      countdownElement.innerHTML = '';
      
    }

  }, 1000);
}
