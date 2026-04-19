function toggleSound(){

var video = document.getElementById("bgvideo");

if(video.muted){
video.muted = false;
}else{
video.muted = true;
}

}