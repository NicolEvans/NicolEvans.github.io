function isVisible(sectionId) {
  var element = document.getElementById(sectionId);
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  if (
    (rect.bottom < html.clientHeight - 200) ||
    (rect.top > html.clientHeight - 200)
  ) {
    return false
  }  else {
    return true
  }
}

function highlightNavMenu() {
  var array = [
    {section: 'section-research',
    menu: 'menu-research'},
    {section: 'section-ia',
    menu: 'menu-ia'},
    {section: 'section-branding',
    menu: 'menu-branding'},
    {section: 'section-hifi',
    menu: 'menu-hifi'},
    {section: 'ending',
    menu: 'menu-conclusion'}
  ]
  var i;
  for (i = 0; i < array.length; i++) {
    if (isVisible(array[i].section)) {
      document.getElementById(array[i].menu).classList.add('current');
    } else {
      document.getElementById(array[i].menu).classList.remove('current');
    }
  }
}

function removeHighlightNav() {
  var current = document.getElementsByClassName('current');
  current[0].classList.remove('current');
}
