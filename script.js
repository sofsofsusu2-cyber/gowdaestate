function contactMsg() {
    alert("Thank you! We will contact you soon.");
}
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  
  // Checks if the page has been scrolled down more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
});