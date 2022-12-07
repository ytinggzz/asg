var Fullimgbox = document.getElementById("fullimgbox")
var Fullimg = document.getElementById("fullimg")

function openFullimg(pic){
    Fullimgbox.style.display = "flex";
    Fullimg.src = pic;
}
function closeFullimg(){
    Fullimgbox.style.display = "none";
}