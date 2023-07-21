
// Navbar
const navbarToggle = document.querySelector(".navbar-toggler");

const navbarLinks = document.querySelector('.navbar-collapse');
// Old code
// const navbarLinks = document.querySelector('.navbar-links');
navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
});
// Old code
// navbarLinks.classList.toggle("active");


// popovers

// <!-- Initialize the popover in JavaScript -->
{/* <script> */}
  $(document).ready(function() {
    $('[data-toggle="popover"]').popover({
      trigger: 'click', // Show the popover on hover
      // Add any other options you want to customize the popover behavior
      
    });
  });
// </script>

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// {/* <script> */}
// $(document).ready(function(){
//   $('[data-toggle="popover"]').popover();   
// });
// {/* </script> */}



// $(document).ready(function(){
//     $('.btn').popover({title: "<h1><strong>HTML</strong> inside <code>the</code> <em>popover</em></h1>", content: "Blabla <br> <h2>Cool stuff!</h2>", html: true, placement: "right"}); 
//   });