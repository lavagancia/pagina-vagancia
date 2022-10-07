const fulImgBox = document.getElementById("fulImgBox")
fulImg = document.getElementById("fulImg")

function openFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}
    

function toggleVideo(){
const trailer= document.querySelector(".trailer");
const video = document.querySelector("video");
trailer.classList.toggle("active");
video.currentTime=0;
video.pause();

 }

