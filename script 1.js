window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Change 50 to the scroll position you prefer
      navbar.style.backgroundColor = 'grey';
      navbar.style.color = 'black';
    } else {
      navbar.style.backgroundColor = 'black';
      navbar.style.color = 'white';
    }
  });
  