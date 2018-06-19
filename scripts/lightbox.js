  function openModal(modalId, slideClass) {
    document.getElementById(modalId).style.display ='block';
    currentSlideClass = slideClass;
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  var slideIndex = 1;
  var currentSlideClass = '';
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName(currentSlideClass);
    if (slides.length === 0) {
      return;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
  }
