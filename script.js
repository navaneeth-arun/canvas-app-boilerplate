/* Iteration 4: Make the Everything Work */
// <!-- Ronaldo - background, jersey, face, hair, cr, number -->
const background = document.getElementById("background");
const buttonjersey = document.getElementById("buttonjersey");
const buttonface = document.getElementById("buttonface");
const buttonhair = document.getElementById("buttonhair");
const buttoncr = document.getElementById("buttoncr");
const buttonnumber = document.getElementById("buttonnumber");

buttonbackground.oninput=()=>{
  background.style.fill=buttonbackground.value;
}
buttonjersey.oninput=()=>{
  jersey.style.fill=buttonjersey.value;
}
buttonface.oninput=()=>{
  face.style.fill=buttonface.value;
}
buttonhair.oninput=()=>{
  hair.style.fill=buttonhair.value;
}
buttoncr.oninput=()=>{
  cr.style.fill=buttoncr.value;
}
buttonnumber.oninput=()=>{
  number.style.fill=buttonnumber.value;
}