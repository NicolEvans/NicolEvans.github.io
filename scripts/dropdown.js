  function dropDown() {
    document.getElementById('dropProjects').classList.toggle('show');
    document.getElementById('projects').classList.toggle('projectdrop');
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      document.getElementById('projects').classList.remove('projectdrop');
    }
  }
