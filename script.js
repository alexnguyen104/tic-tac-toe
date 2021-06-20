let alertBoard = document.getElementById("alertBoard");
let text = document.getElementById("info");
let restart = document.getElementById("restart");
let currentPlayer = 'X';
let count = 1 ;
let boxes = Array.from(document.getElementsByClassName("box"))
const drawMsg = "It's a draw !";
var a;
//click
boxes.forEach(box=> box.addEventListener('click', clickBox))
function clickBox(){
  const winMsg = `Player ${currentPlayer} has won !`;
  let index = boxes.indexOf(this);
  //unclickable on second click
  if(boxes[index].innerHTML!==""){
    return;
  }
  boxes[index].innerHTML = currentPlayer;
  //player's turn
  count++;
  if(count%2==0){
    currentPlayer="O";
  }else if(count % 2 == 1){
    currentPlayer="X";
  }
  drawCheck();
  if(winCheck(index)){
    alertBoard.style.display = "block";
    text.innerHTML = winMsg;
    restart.style.display = "block";
  }
}
//draw
function drawCheck(){
  if(count == 10){
    alertBoard.style.display ="block";
    text.innerHTML = drawMsg;
    restart.style.display="block";
  }
}
function winCheck(index){
  switch(index){
    case 0: return zeroPos();
    case 1: return onePos();
    case 2: return twoPos();
    case 3: return threePos();
    case 4: return fourPos();
    case 5: return fivePos();
    case 6: return sixPos();
    case 7: return sevenPos();
    case 8: return eightPos();
    default: return false;
  }
}
function zeroPos(){
  if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML){
    return true;
  }
  if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML){
    return true;
  }
  if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML) {
    return true;
  }
  return false
}
function onePos() {
  if (boxes[1].innerHTML == boxes[0].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML) {
    return true;
  }
  if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML) {
    return true;
  }
  return false
}
function twoPos() {
  if (boxes[2].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML) {
    return true;
  }
  if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML) {
    return true;
  }
  if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML) {
    return true;
  }
  return false
}
function threePos() {
  if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[6].innerHTML == boxes[3].innerHTML) {
    return true;
  }
  if (boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML == boxes[4].innerHTML) {
    return true;
  }
  return false
}
function fourPos() {
  if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML) {
    return true;
  }
  if (boxes[4].innerHTML == boxes[5].innerHTML && boxes[4].innerHTML == boxes[3].innerHTML) {
    return true;
  }
  if (boxes[8].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[0].innerHTML) {
    return true;
  }
  if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML) {
    return true;
  }
  return false
}
function fivePos() {
  if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML) {
    return true;
  }
  if (boxes[5].innerHTML == boxes[4].innerHTML && boxes[5].innerHTML == boxes[3].innerHTML) {
    return true;
  }
  return false
}
function sixPos() {
  if (boxes[6].innerHTML == boxes[0].innerHTML && boxes[6].innerHTML == boxes[3].innerHTML) {
    return true;
  }
  if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML) {
    return true;
  }
  if (boxes[6].innerHTML == boxes[4].innerHTML && boxes[6].innerHTML == boxes[2].innerHTML) {
    return true;
  }
  return false
}
function sevenPos() {
  if (boxes[7].innerHTML == boxes[6].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML) {
    return true;
  }
  if (boxes[7].innerHTML == boxes[4].innerHTML && boxes[7].innerHTML == boxes[1].innerHTML) {
    return true;
  }
  return false
}
function eightPos(){
  if(boxes[8].innerHTML == boxes[7].innerHTML && boxes[8].innerHTML == boxes[6].innerHTML ) {
    return true;
  }
  if (boxes[8].innerHTML == boxes[5].innerHTML && boxes[8].innerHTML == boxes[2].innerHTML) {
    return true;
  }
  if (boxes[8].innerHTML == boxes[0].innerHTML && boxes[8].innerHTML == boxes[4].innerHTML) {
    return true;
  }
  return false
}
restart.onclick = function(){
  for(i = 0; i < boxes.length; i++){
    boxes[i].innerHTML="";
    currentPlayer = "X";
    count = 1;
    alertBoard.style.display = "none";
  }
}

