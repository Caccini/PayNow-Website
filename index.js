


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})



var accordions = document.querySelectorAll('.accordion-button');

for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    var icon = this.querySelector('.plus-minus-icon i');
    if (icon.classList.contains('fa-plus')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
}

var accordions = document.querySelectorAll('.accordion-button');

for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}












var textWrapper = document.querySelector('.fade-in');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.fade-in .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1250,
    delay: (el, i) => 70*i
  }).add({
    targets: '.fade-in',
    opacity: 0,
    duration: 7000,
    easing: "easeOutExpo",
    delay: 4000
  });



  


  /*
  var textWrapper = document.querySelector('.fade-in');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
  .add({
    targets: '.fade-in .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.fade-in',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });
  */






