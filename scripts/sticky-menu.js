function onReady() {
  var pMenu = document.getElementById('p-menu');
  var top = document.getElementById('top');
  var bottom = document.getElementById('bottom');
  var didScroll = false;
  window.onscroll = function() {pNav()};
  var sticky = pMenu.offsetTop;
  function pNav() {
    didScroll = true;
  }
  setInterval(function () {
    if(didScroll) {
      didScroll = false;
      if (window.pageYOffset >= sticky) {
        pMenu.className = 'sticky',
        top.className = 'sticky-non-p',
        bottom.className = 'sticky-non-p',
        highlightNavMenu()
      } else {
        pMenu.classList = ('process'),
        top.classList = ('non-p'),
        bottom.classList = ('non-p'),
        document.getElementById('menu-research').classList.remove('current');
      }
    }
  }, 250);
}
window.onload = function() {
  onReady();
}
