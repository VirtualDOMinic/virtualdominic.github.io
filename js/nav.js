 //Sticky nav start
 const nav = document.querySelector("#topNav"); //get nav (id is "topNav" - Wes goes with "main" in his tute)
    const topOfNav = nav.offsetTop //detect where top of the nav is
    function fixNav(){
         if(window.scrollY >= topOfNav){
            document.body.classList.add("fixed-nav");
         } else {
            document.body.classList.remove("fixed-nav")
            }
        }

            window.addEventListener("scroll",fixNav); //run fixNav function whenever I scroll


//tabs start
function openSection(evt, secName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(secName).style.display = "block";
    evt.currentTarget.className += " active";
}

