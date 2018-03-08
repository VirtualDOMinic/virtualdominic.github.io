//nav tabs start - time for Dom to manipulate the DOM
function openSection(evt, secName) {
  // Declare/initialise vars
  var i, tabcontent, tablinks;

  // Hide all elements with class="tabcontent"
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove "active" class from all elements with class="tablinks"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show current tab, and add "active" class to the relevant button
  document.getElementById(secName).style.display = "block";
  evt.currentTarget.className += " active";
}
//tabs end
