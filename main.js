let hiveCol;
let cellSize = 30;
let won;
let moveCount;

let cellGrid = [];
let hiveGrid = [];

let rainbow;
let initialSeconds;
let sec;
let min;

let futura;
let futuraBold;
let futuraLight;

function preload() {

  /*futura = loadFont('assets/futura medium bt.ttf');
  futuraBold = loadFont('assets/Futura Bold font.ttf');
  futuraLight = loadFont('assets/Futura Book font.ttf');*/
}

function setup () {

  createCanvas(660, 800);
  colorMode(HSB);

  won = false;
  for (let i = 0; i < 22; i++) {

    cellGrid[i] = [];

    for (let j = 0; j < 22; j++) {

      cellGrid[i][j] = new cell(i, j, floor(random(0, 6)));

      if (i == 0 || i == 21 || j == 0 || j == 21) {

        cellGrid[i][j].spacer = true;
      }
    }
  }

  initialSeconds = second();

  hiveCol = cellGrid[1][1].col;
  hiveGrid.push(cellGrid[1][1]);
  cellGrid[1][1].hive = true;
  rainbow = 0;
  moveCount = 0;
  sec = 0;
  min = 0;
  //restart();

  print ("\nSetup Complete");
}

function draw () {

  background(215, 86, 72);
  translate(0, 50);

  for (let i = 0; i < cellGrid.length; i++) {
    for (let j = 0; j < cellGrid[0].length; j++) {

      cellGrid[i][j].update();
      cellGrid[i][j].display();
    }
  }

  if (second() != initialSeconds && !won){
    sec += 1;
    initialSeconds = second();
  }

  if (sec >= 60) {

    sec = 0;
    min++;
  }

  if (rainbow <= 360) {

    rainbow += 1.5;
  } else {

    rainbow = 0;
  }

  noStroke();
  fill(rainbow, 100, 100);
  //textFont(futuraBold);
  textSize(70);
  textAlign(CENTER, CENTER);
  stroke(0);
  strokeWeight(8);
  text("Color Flood!", 330, -20);

  noStroke();
  fill(0, 100, 100);
  rect(30, 650, 100, 40);

  fill(38, 100, 100);
  rect(130, 650, 100, 40);

  fill(60, 100, 100);
  rect(230, 650, 100, 40);

  fill(120, 100, 100);
  rect(330, 650, 100, 40);

  fill(210, 100, 100);
  rect(430, 650, 100, 40);

  fill(270, 100, 100);
  rect(530, 650, 100, 40);

  noFill();
  stroke(0);
  strokeWeight(5);
  rect(30, 650, 600, 40);

  if (mouseY > 700 && mouseY < 740 && !won) {

    noFill();
    stroke(255);
    strokeWeight(7);
    if (mouseX > 30 && mouseX < 130) {

      rect(30, 650, 100, 40);
    } else if (mouseX > 130 && mouseX < 230) {

      rect(130, 650, 100, 40);
    } else if (mouseX > 230 && mouseX < 330) {

      rect(230, 650, 100, 40);
    } else if (mouseX > 330 && mouseX < 430) {

      rect(330, 650, 100, 40);
    } else if (mouseX > 430 && mouseX < 530) {

      rect(430, 650, 100, 40);
    } else if (mouseX > 530 && mouseX < 630) {

      rect(530, 650, 100, 40);
    }
  }

  if (won) {

    fill(rainbow, 100, 100);
  } else {

    noFill();
  }
  stroke(0);
  strokeWeight(7);
  rect(28, 28, 604, 604);

  stroke(0);
  strokeWeight(5);
  fill(100);
  rect(30, 702, 164, 40);
  rect(630 - 100, 702, 100, 40);

  noStroke();
  fill(0);
  //textFont(futura);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(moveCount + " moves", 110, 720);

  textSize(34);
  if (sec < 10 && min < 10) {

    text("0" + min + ":0" + sec, 580, 720);
  } else if (sec >= 10 && min < 10) {

    text("0" + min + ":" + sec, 580, 720);
  } else if (sec < 10 && min >= 10) {

    text(min + ":0" + sec, 580, 720);
  } else if (sec >= 10 && min >= 10) {

    text(min + ":" + sec, 580, 720);
  }

  fill(0);
  noStroke();
  rect(0, -50, 15, 850);
  rect(645, -50, 15, 850);

  fill(rainbow, 100, 100);
  noStroke();
  rect(0, -50, 10, 850);
  rect(650, -50, 10, 850);

  fill(215, 86, 72);
  rect(0, -50, 20, 850 - ((hiveGrid.length / 400) * 850));
  rect(640, -50, 20, 850 - ((hiveGrid.length / 400) * 850));

  if (!won) {
    stroke(0);
    strokeWeight(5);
    line(0, 800 - ((hiveGrid.length / 400) * 850), 11, 800 - ((hiveGrid.length / 400) * 850));
    line(660 - 11, 800 - ((hiveGrid.length / 400) * 850), 660, 800 - ((hiveGrid.length / 400) * 850));
  }

  if (hiveGrid.length == 400) {

    won = true;
  }
}

function mousePressed () {

  if (mouseY > 700 && mouseY < 740 && !won) {

    moveCount++;
    if (mouseX > 30 && mouseX < 130) {

      changeCol(0);
    } else if (mouseX > 130 && mouseX < 230) {

      changeCol(1);
    } else if (mouseX > 230 && mouseX < 330) {

      changeCol(2);
    } else if (mouseX > 330 && mouseX < 430) {

      changeCol(3);
    } else if (mouseX > 430 && mouseX < 530) {

      changeCol(4);
    } else if (mouseX > 530 && mouseX < 630) {

      changeCol(5);
    }
  }
}

function keyPressed () {

  if (won && key == ' ') {

    restart();
  }
}

function restart() {

  for (let i = 0; i < 22; i++) {
    for (let j = 0; j < 22; j++) {

      cellGrid[i][j] = new cell(i, j, floor(random(0, 6)));
      hiveGrid.length = 0;
    }
  }

  for (let i = 0; i < hiveGrid.length; i++) {

    hiveGrid[i].col = hiveCol;
    addToHive(hiveGrid[i].indexX, hiveGrid[i].indexY);
  }

  moveCount = 0;
  initialSeconds = second();
  changCol(hiveCol);
}

function changeCol (_col) {

  hiveCol = _col;
  for (let i = 0; i < hiveGrid.length; i++) {

    hiveGrid[i].col = hiveCol;
    addToHive(hiveGrid[i].indexX, hiveGrid[i].indexY);
  }
}

function addToHive (x, y) {

  if (cellGrid[x][y].top.col == hiveCol && !cellGrid[x][y].top.spacer && !cellGrid[x][y].top.hive) {

    hiveGrid.push(cellGrid[x][y].top);
    cellGrid[x][y].top.hive = true;
  }
  if (cellGrid[x][y].right.col == hiveCol && !cellGrid[x][y].right.spacer && !cellGrid[x][y].right.hive) {

    hiveGrid.push(cellGrid[x][y].right);
    cellGrid[x][y].right.hive = true;
  }
  if (cellGrid[x][y].bottom.col == hiveCol && !cellGrid[x][y].bottom.spacer && !cellGrid[x][y].bottom.hive) {

    hiveGrid.push(cellGrid[x][y].bottom);
    cellGrid[x][y].bottom.hive = true;
  }
  if (cellGrid[x][y].left.col == hiveCol && !cellGrid[x][y].left.spacer && !cellGrid[x][y].left.hive) {

    hiveGrid.push(cellGrid[x][y].left);
    cellGrid[x][y].left.hive = true;
  }
}
