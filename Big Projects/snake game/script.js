const board=document.querySelector(".board");
const modal=document.querySelector(".modal");
const btnstart=document.querySelector(".btn-start");
const start_game=document.querySelector(".start_game");
const restart_game=document.querySelector(".game_over");
const btnover=document.querySelector(".btn-over");
const score=document.querySelector("#score");
const highscoreelement=document.querySelector("#high-score");
const timeelement=document.querySelector("#time");

const blockheight=30;
const blockwidth=30;
const cols=Math.floor(board.clientWidth/blockwidth);
const row=Math.floor(board.clientHeight/blockheight);
let points=0;
let highscore=localStorage.getItem("highscore")|| 0 ;
highscoreelement.innerText = highscore;
let time=`00-00`;
let interval=null;
let timerinterval=null;


// for(i=0;i<row*cols;i++){
//      const block=document.createElement("div");
//      block.classList.add("block");
//      board.appendChild(block);
     
// }
//get the direction of snake
const blocks=[];

//initial direction of snake
let snake=[
     {
          x:3,
          y:6,
     },
     
];

//food
let food={x:Math.floor(Math.random()*row),y:Math.floor(Math.random()*cols)};

//checking the direction using keys in keboard
let direction="left";
addEventListener("keydown",function(e){
     if(e.key==="ArrowLeft" && direction!=="right"){
          e.preventDefault();
          direction="left";
     }
     if(e.key==="ArrowUp" && direction!=="down"){
          e.preventDefault();
          direction="up";
     }
     if(e.key==="ArrowDown" && direction!=="up"){
          e.preventDefault();
          direction="down";
     }
     if(e.key==="ArrowRight" && direction!=="left"){
          e.preventDefault();
          direction="right";
     }
})

//giving the direction to the snake
for(let i=0;i<row;i++){
     for(let j=0;j<cols;j++){
          const block=document.createElement("div");
          block.classList.add("block");
          // block.innerText=`${i}~${j}`;
          board.appendChild(block);
          blocks[`${i}~${j}`]=block;
          
          
     }
}

//display the snake and moove according to keys pressed
function render(){
     let head=null;

     blocks[`${food.x}~${food.y}`].classList.add("food");

     if(direction==="left" ){
          head={x:snake[0].x,y:snake[0].y-1}
     }
     else if(direction==="right"){
          head={x:snake[0].x,y:snake[0].y+1}
     }
     else if(direction==="up"){
          head={x:snake[0].x-1,y:snake[0].y}
     }
     else if(direction=="down"){
          head={x:snake[0].x+1,y:snake[0].y}
     }
     if(head.x<0 || head.x>=row ||head.y<0 || head.y>=cols){
         clearInterval(interval);
         modal.style.display="flex";
         start_game.style.display="none";
         restart_game.style.display="flex";
         return;
         
         

     }
     if(head.x==food.x && head.y==food.y){
          points+=10;
          score.innerText=points;
          if(points>highscore){
               highscore = points;
               localStorage.setItem("highscore", highscore.    toString());
               highscoreelement.innerText=points;

          }
          
          blocks[`${food.x}~${food.y}`].classList.remove("food");
          food={x:Math.floor(Math.random()*row),y:Math.floor(Math.random()*cols)};
          blocks[`${food.x}~${food.y}`].classList.add("food")
          snake.unshift(head);


     }

     
     snake.forEach(function(segement){
     blocks[`${segement.x}~${segement.y}`].classList.remove("fill");
     
     
     })
     snake.unshift(head);
     snake.pop();

     snake.forEach(function(segement){
     blocks[`${segement.x}~${segement.y}`].classList.add("fill")
     })
    
}
//function for restarting the game

function restartgame(){
points=0;
time=`00-00`;
score.innerText=points;
snake.forEach(function(segement){
     blocks[`${segement.x}~${segement.y}`].classList.remove("fill");
});     
blocks[`${food.x}~${food.y}`].classList.remove("food");
modal.style.display="none";     
     //initial direction of snake
snake=[
     {
          x:3,
          y:6,
     },
     
];
interval=setInterval(() => {
        render();
      }, 300);


//food
food={x:Math.floor(Math.random()*row),y:Math.floor(Math.random()*cols)};


}

btnover.addEventListener("click",function(){
      restartgame();
})

btnstart.addEventListener("click", function(){
     modal.style.display="none";
     interval=setInterval(() => {
        render();
      }, 300);
      timerinterval=setInterval(function(){
          let[min,sec]=time.split("-").map(Number);
          if(sec==59){
               min+=1;
               sec=0;
          }
          else{
               sec+=1;
          }
          time=`${min}-${sec}`;
          timeelement.innerText=time;
      },1000);
     


     interval=setInterval(() => {
        render();
      }, 300);
})