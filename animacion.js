var Not_blurred = document.querySelectorAll('body .flex-container img');





Not_blurred.forEach(function(img){
    
    img.addEventListener("mouseover", function(){
        var remanent = document.querySelectorAll('body .flex-container img:not(:hover)')
        remanent.forEach(function(img){
        img.style.filter = 'blur(10px)'
        img.style.transition = 'all 0.3s ease-in'
    });
    img.addEventListener("mouseout", function(){
        var remanent = document.querySelectorAll('body .flex-container img')
        remanent.forEach(function(img){
        img.style.filter = 'none'
        })
    });
});
})