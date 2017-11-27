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
