//Sticky nav start
/*
const nav = document.querySelector("#topNav"); //get nav (id is "topNav" - Wes goes with "main" in his tute)
const topOfNav = nav.offsetTop //detect where top of the nav is
function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav")
        }
    }

window.addEventListener("scroll",fixNav); //run fixNav function whenever I scroll
*/
//sticky nav end - can delete the above? No use for it now


//tabs start
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