function toggleMenu(){
  document.getElementById('menu').classList.toggle('show');
}
function scrollToSec(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
  document.getElementById('menu').classList.remove('show');
}
function sendMsg(){
  let name = document.getElementById('name').value;
  if(name.trim() === ""){
    alert("Please enter your name");
    return;
  }
  document.getElementById('success').style.display='block';
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('msg').value='';
}
