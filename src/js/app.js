const menuBar = document.getElementById("menuBar")
const menuBarLineCenter = document.getElementById("menuBarLineCenter")
const menuBarLineBottom = document.getElementById("menuBarLineBottom")
const menuBarLineTop = document.getElementById("menuBarLineTop")
const menuMobile = document.getElementById("menuMobile")
let flagMenuBar = true

menuBar.addEventListener("click", function(){
    if(flagMenuBar){
        menuBarLineCenter.classList.remove("bg-white")
        menuBarLineCenter.classList.add("bg-reansparent")

        menuBarLineBottom.classList.remove("translate-y-2")
        menuBarLineBottom.classList.add("bar-bottom")

        menuBarLineTop.classList.remove("-translate-y-2")
        menuBarLineTop.classList.add("bar-top")

        menuMobile.classList.remove("close__menu")
        menuMobile.classList.add("open__menu")
       

        flagMenuBar = false

    }else{
        menuBarLineCenter.classList.add("bg-white")
        menuBarLineCenter.classList.remove("bg-reansparent")

        menuBarLineBottom.classList.add("translate-y-2")
        menuBarLineBottom.classList.remove("bar-bottom")

        menuBarLineTop.classList.add("-translate-y-2")
        menuBarLineTop.classList.remove("bar-top")

        menuMobile.classList.remove("open__menu")
        menuMobile.classList.add("close__menu")

        flagMenuBar = true

    }
    

})