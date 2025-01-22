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
        menuBarLineBottom.classList.add("rotate-45")
        menuBarLineTop.classList.remove("-translate-y-2")
        menuBarLineTop.classList.add("-rotate-45")
        menuMobile.classList.remove("h-0")
        menuMobile.classList.add("h-[430px]")
        menuMobile.classList.remove("invisible")
        menuMobile.classList.add("visible")
        flagMenuBar = false

    }else{
        menuBarLineCenter.classList.add("bg-white")
        menuBarLineCenter.classList.remove("bg-reansparent")
        menuBarLineBottom.classList.add("translate-y-2")
        menuBarLineBottom.classList.remove("rotate-45")
        menuBarLineTop.classList.add("-translate-y-2")
        menuBarLineTop.classList.remove("-rotate-45")
        menuMobile.classList.add("h-0")
        menuMobile.classList.remove("h-[430px]")
        menuMobile.classList.add("invisible")
        menuMobile.classList.remove("visible")
        flagMenuBar = true

    }
    

})