var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})` 
    })
})