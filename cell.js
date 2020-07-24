function cell (_x, _y, _col){

  this.indexX = _x;
  this.indexY = _y;
  this.x = this.indexX * cellSize;
  this.y = this.indexY * cellSize;
  this.col = _col;
  this.hive;
  this.spacer;

  this.top;
  this.right;
  this.bottom;
  this.left;

  this.update  = function () {

    if (!this.spacer) {

      this.top = cellGrid   [this.indexX]    [this.indexY - 1];
      this.right = cellGrid [this.indexX + 1][this.indexY    ];
      this.bottom = cellGrid[this.indexX]    [this.indexY + 1];
      this.left = cellGrid  [this.indexX - 1][this.indexY    ];
    }
  }

  this.display = function () {

    if (!this.spacer) {

      noStroke();
      if (this.col == 0) {

        fill(0, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      } else if (this.col == 1) {

        fill(38, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      } else if (this.col == 2) {

        fill(60, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      } else if (this.col == 3) {

        fill(120, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      } else if (this.col == 4) {

        fill(210, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      } else if (this.col == 5) {

        fill(270, 100, 100);
        rect(this.x, this.y, cellSize, cellSize);
      }
    }

    if (this.hive) {

      // fill(0, 50);
      // stroke(0);
      // strokeWeight(3);
      // rect(this.x, this.y, cellSize, cellSize);
    }
  }
}
