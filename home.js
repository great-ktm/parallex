const home =document.getElementById('first');

window.addEventListener("scroll",function(){    
    let onScroll =window.pageYOffset;
    first.style.backgroundPositionY = onScroll * 0.5 +"px";
 
})