  function openModal(modalId) {
    document.getElementById(modalId).style.display ='block';
    currentModalId = modalId;
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  var slideIndex = 1;
  var currentModalId = '';

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var modal = document.getElementById(currentModalId);
    var slides = modal.getElementsByClassName('slides');
    var demo = modal.getElementsByClassName('demo');
    var captionText = modal.getElementsByClassName('caption');
    if (slides.length === 0) {
      return;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
    captionText[slideIndex-1].innerHTML = demo[slideIndex-1].alt;
  }
