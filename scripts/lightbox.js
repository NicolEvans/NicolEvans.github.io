  function openModal(modalId) {
    document.getElementById(modalId).style.display ='block';
    currentModalId = modalId;
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  var slideIndex = 1;
  var currentModalId = '';

  function plusSlides(s) {
    slideIndex = slideIndex + s;
    showSlides(slideIndex);
  }

  function currentSlide(s) {
    slideIndex = s;
    showSlides(slideIndex);
  }

  function showSlides(slideNumber) {
    var i;
    var modal = document.getElementById(currentModalId);
    var slides = modal.getElementsByClassName('slides');
    var demo = modal.getElementsByClassName('demo');
    var numberText = modal.getElementsByClassName('numberText');
    var number = modal.getElementsByClassName('slide-number');
    var captionText = modal.getElementsByClassName('caption');
    if (slides.length === 0) {
      return;
    }
    if (slideNumber > slides.length) {slideIndex = 1}
    if (slideNumber < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
    number[0].innerHTML = numberText[slideIndex-1].innerHTML;
    captionText[0].innerHTML = demo[slideIndex-1].alt;
  }

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      document.getElementById(currentModalId).style.display = 'none';
    };
    if (event.keyCode == 37) {
      plusSlides(-1);
    };
    if (event.keyCode == 39) {
      plusSlides(1);
    };
  })
