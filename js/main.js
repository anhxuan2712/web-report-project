let slide = document.querySelectorAll(".slide");
let cham = document.querySelectorAll(".dot");
let vitri = 0;
function chuyenSlide(i){
    slide.forEach(function(s){
        s.classList.remove("active");
    });
    cham.forEach(function(c){
        c.classList.remove("active");
    });
    slide[i].classList.add("active");
    cham[i].classList.add("active");
    vitri = i;
}
setInterval(function(){
    vitri++;
    if(vitri >= slide.length){
        vitri = 0;
    }
    chuyenSlide(vitri);
}, 3000);
cham.forEach(function(c, i){
    c.addEventListener("click", function(){
        chuyenSlide(i);
    });
});