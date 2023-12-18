
var scroll_box = document.querySelector("#scrolls");
window.addEventListener('scroll',()=>{
	scroll_box.style.display="none";
});


var button_chat = document.getElementById("chat_whatsapp");
button_chat.addEventListener("click",()=>window.location.href="https://wa.me/254745097705");