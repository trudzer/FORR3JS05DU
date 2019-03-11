let canvas = document.getElementById("myCanvas");                                   //býr til canvas
let ctx = canvas.getContext("2d");                                                  //býr til context breytu
let ballRadius = 15;                                                                //til breytu fyrir radius bolta
let x = canvas.width/2;                                                             //býr til breytu x sem verður í miðju canvas-inu
let y = canvas.height-30;                                                           //býr til breytu y sem er sett á sérstaka hæð í canvas-inu
let dx = 6;                                                                         //býr til breytu dx sem setur hraða á x gildin
let dy = -6;                                                                        //býr til breytu dy sem setur hraða á y gildin
let paddleHeight = 15;                                                              //býr til breytu fyrir player object-ið height
let paddleWidth = 150;                                                              //býr til breytu fyrir player object-ið width
let paddleX = (canvas.width-paddleWidth)/2;                                         //býr til breytu sem setur player-inn í miðjuna
let rightPressed = false;                                                           //býr til boolean yfir hvort ýtt er á hægri
let leftPressed = false;                                                            //býr til boolean yfir hvort ýtt er á vinstri
let brickRowCount = 12;                                                             //býr til breytu yfir fjölda kassa í röð
let brickColumnCount = 7;                                                           //býr til hversu margar raðir verða
let brickWidth = 135;                                                               //býr til width-ið fyrir kassana
let brickHeight = 20;                                                               //býr til hæðina fyrir kassana
let brickPadding = 10;                                                              //býr til bilið milli kassana
let brickOffsetTop = 30;                                                            //setur kassana aðeins niður
let brickOffsetLeft = 45;                                                           //setur kassa aðeins til vinstri
let score = 0;                                                                      //býr til score og setur það í 0
let lives = 5;                                                                      //býr til hversu mörg líf þú byrjar með

let bricks = [];                                                                    //býr til array bricks sem setur kassana í raðir
for(let c=0; c<brickColumnCount; c++) {                                             //for-loop sem skrifar út raðirnar
  bricks[c] = [];                                                                   
  for(let r=0; r<brickRowCount; r++) {                                              //for-loop sem skrifar út kassana í röð
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);                        //bætir við keydown feature
document.addEventListener("keyup", keyUpHandler, false);                            //bætir við keyup feature
document.addEventListener("mousemove", mouseMoveHandler, false);                    //bætir við mouse movement feature

function keyDownHandler(e) {                                                        //ef ýtt er á vinstri eða hægri þa verður hægri eða vinstri true
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {                                                          //ef ýtt er af hægri eða vinstri þa verður hægri eða vinstri false
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {                                                      //function fyrir mouse movement sem tekur inn x og y hnitana hennar
  let relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {                                                     //function sem athugar hvort hlutir klessa á hvorn annan
  for(let c=0; c<brickColumnCount; c++) {                                           //for-loop sem athugar ef status-inn á kassanum er 1,
    for(let r=0; r<brickRowCount; r++) {                                            //ef það er hitt kassann breytist status-inn hans í 0 og
      let b = bricks[c][r];                                                         //hann verður tekinn af skjáinum og bætir við 1 í score
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {                             //ef score er jafn mikið og allir kassarnir þá kemur alert
            alert("you win");                                                       //you win og reload-ar leikinn
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {                                                               //teiknar upp hring
  ctx.beginPath();                                                                  //byrjunar staður
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);                                          //formúla fyrir að teikna hring
  ctx.fillStyle = "#FF0000";                                                        //gerir hlutinn rauðann
  ctx.fill();                                                                       //lokunar staður
  ctx.closePath();
}
function drawPaddle() {                                                             //teiknar player-inn
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight-15, paddleWidth, paddleHeight);      //býr til kassa og setur hann í miðjuna á skjáinum
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {                                                             //teiknar upp kassana
  for(let c=0; c<brickColumnCount; c++) {                                           //for-loop sem býr til röð af kössum
    for(let r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {                                                //ef kassin er með status settan á 1 þá er hann birtur
        let brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;                 //setur upp kassa með width og padding sem er buið að vera skilgreint
        let brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;                 //setur upp kassa mep height og padding sem er buið að vera skilgreint
        bricks[c][r].x = brickX;                                                    //setur upp array-in sem brickX
        bricks[c][r].y = brickY;                                                    //setur upp array-in sem brickY
        ctx.beginPath();                                                            
        ctx.rect(brickX, brickY, brickWidth, brickHeight);                          //setur upp staðsetningu og stærð fyrir kassana
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {                                                              //teiknar upp score á skjáinn og setur upp staðsetninguna
  ctx.font = "26px Arial";
  ctx.fillStyle = "#FF0000";
  ctx.fillText("Score: "+score, 8, 25);
}
function drawLives() {                                                              //teiknar upp Lives á skjáinn og setur upp staðsetninguna
  ctx.font = "26px Arial";
  ctx.fillStyle = "#FF0000";
  ctx.fillText("Lives: "+lives, canvas.width-105, 25);
}

function draw() {                                                                   //function sem teiknar upp allt og passar collision
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {                     //ef bolti hittir vegg þá flýgur hann aftur til baka
    dx = -dx;
  }
  if(y + dy < ballRadius) {                                                         //ef bolti hittir loftið þá kemur hann aftur til baka
    dy = -dy;
  }
  else if(y + dy > canvas.height-ballRadius-15) {                                   //ef boltinn lendir á player kassa þá flýgur hann aftur upp
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {                                                                          //annars missir þú líf
      lives--;                                                
      if(!lives) {
        alert("GAME OVER");                                                         //ef lífin þín eru búin þá færðu GAME OVER
        document.location.reload();                                                 //leikurinn byrjar upp á nýtt
      }
      else {
        x = canvas.width/2;                                                         //reset-ar x gildi
        y = canvas.height-30;                                                       //reset-ar y gildi
        dx = 6;                                                                     //setur x hraða í 4
        dy = -6;                                                                    //setur y hraða í 4
        paddleX = (canvas.width-paddleWidth)/2;                                     //setur player kassa á miðjan völlinn
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {                          //ef ýtt er á hægri og player er ekki út í endann þá fer hann til hægri
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {                                             //ef ýtt er á vinstri og player er ekki út í endann þá fer hann til vinstri
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);                                                      //segir browser-inum að þetta er animation fyrir þessi functions
}

draw();                                                                             //kallar á draw function-ið sem kveikir á leikinum
