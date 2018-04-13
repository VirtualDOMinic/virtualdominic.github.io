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


// Nicer photo option!
function nicerHeading() {

    // get the sentences to alter/remove
    const imgChangeText = document.getElementById("img-change");
    const helloChangeText = document.getElementById("hello");

    // hide "embarrassing" photo, reveal nice one
    document.getElementById("nice").removeAttribute("style");
    document.getElementById("not-nice").setAttribute("style","display:none"); 

    // update contents of intro to match new photo
    helloChangeText.innerHTML = "Hi! I'm dom, the one in the middle (with the red bow tie).";

    // remove the option to change image
    imgChangeText.parentNode.removeChild(imgChangeText);
}