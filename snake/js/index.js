var _this;
class SnakeGame {
  constructor(options) {

    // 获取score的span标签
    this.score = document.getElementById("score");

    // 获取button标签
    this.btns = document.querySelectorAll("button");

    // 获取canvas标签
    this.canvas = document.getElementById("canvas");

    // 获取canvas标签的上下文本
    this.ctx = canvas.getContext("2d");

    // 设置画布的宽
    this.canvas.width = options.width;

    // 设置画布的高
    this.canvas.height = options.height;

    // 设置单元格的大小
    this.space = options.space;

    // 列
    this.column = this.canvas.width / this.space;

    // 行
    this.row = this.canvas.height / this.space;

    // 定时器
    this.timer = null;

    // 缓存this
    _this = this;

    // 速度
    this.speed = 200;

    // 得分
    this.goal = 0;

    // 设置蛇身
    this.snakeBody = [

      // 蛇尾
      {
        x: 0 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇4
      {
        x: 1 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇3
      {
        x: 2 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇2
      {
        x: 3 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇头
      {
        x: 4 * this.space,
        y: 0,
        "color": "chartreuse"
      }
    ];

    // 蛇的默认方向
    this.direction = "right";

    //调用初始化
    this.init();
  };

  // 初始化
  init() {

    // 蛇的默认方向
    this.direction = "right";

    // 得分
    this.score.innerHTML = 0;

    // 重新设置蛇身
    this.snakeBody = [

      // 蛇尾
      {
        x: 0 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇4
      {
        x: 1 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇3
      {
        x: 2 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇2
      {
        x: 3 * this.space,
        y: 0,
        "color": "black"
      },

      // 蛇头
      {
        x: 4 * this.space,
        y: 0,
        "color": "chartreuse"
      }
    ];

    // 调用绘制地图
    this.drawMap();

    // 调用绘制蛇类
    this.drawInitSnake();

    // 调用绘制食物
    this.drawFood();

    // 调用控制蛇的方向
    this.snakeDirection();

    // 调用控制面板
    this.controlPanel();
  };

  // 绘制初始化蛇类
  drawInitSnake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.snakeBody[i].x + this.space / 2, this.snakeBody[i].y + this.space / 2, this.space / 2, 0,
        2 * Math.PI, false)
      this.ctx.fillStyle = this.snakeBody[i].color;
      this.ctx.fill();
    }
  };

  // 绘制地图
  drawMap() {
    this.ctx.strokeStyle = "gray";
    for (var i = 0; i <= this.column; i++) {
      this.ctx.moveTo(0, i * this.space);
      this.ctx.lineTo(this.canvas.width, i * this.space);
      this.ctx.moveTo(i * this.space, 0);
      this.ctx.lineTo(i * this.space, this.canvas.width);
      this.ctx.stroke();
    }
  };

  // 绘制食物
  drawFood() {
    this.food = {
      x: Math.floor(Math.random() * this.column) * this.space,
      y: Math.floor(Math.random() * this.row) * this.space,
      color: "orangered"
    };
    this.ctx.beginPath();
    this.ctx.arc(this.food.x + this.space / 2, this.food.y + this.space / 2, this.space / 2, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.food.color;
    this.ctx.closePath();
    this.ctx.fill();
  };

  // 控制蛇的方向
  snakeDirection() {
    document.addEventListener('keydown', function (e) {

      // 上 下 左 右//W S A D
      // 38 40 37 39//87 83 65 68
      e = e.keyCode || window.event.keyCode;
      if (e == 38 || e == 87) {
        if (_this.direction != "down") {
          _this.direction = "up";
        }
        return;
      } else if (e == 40 || e == 83) {
        if (_this.direction != "up") {
          _this.direction = "down";
        }
        return;
      } else if (e == 37 || e == 65) {
        if (_this.direction != "right") {
          _this.direction = "left";
        }
        return;
      } else if (e == 39 || e == 68) {
        if (_this.direction != "left") {
          _this.direction = "right";
        }
        return;
      }
    });
  };

  // 绘制蛇的移动
  drawMove() {
    this.x = 0;
    this.y = 0;
    if (this.direction == "right") {
      this.x = this.space;
    }
    if (this.direction == "left") {
      this.x = -this.space;
    }
    if (this.direction == "down") {
      this.y = this.space;
    }
    if (this.direction == "up") {
      this.y = -this.space;
    }

    // 更新蛇的坐标
    for (var i = 0; i < this.snakeBody.length - 1; i++) {
      this.snakeBody[i].x = this.snakeBody[i + 1].x;
      this.snakeBody[i].y = this.snakeBody[i + 1].y;
    }

    // 设置蛇头
    this.snakeBody[this.snakeBody.length - 1].x += this.x;
    this.snakeBody[this.snakeBody.length - 1].y += this.y;
  };

  // 绘制蛇类
  drawSnake() {
    this.ctx.clearRect(
      this.snakeBody[0].x,
      this.snakeBody[0].y,
      this.space,
      this.space
    );

    // 需要重新绘制地图
    this.drawMap();

    // 需要移动蛇
    this.drawMove();

    // 需要更新蛇的位置
    this.drawInitSnake();

    // 检测蛇头和食物碰撞
    this.eatFood();

    // 记录蛇的身体的坐标便于检测蛇头和身碰撞
    this.newSnake = [];
    for (var i = 0; i < this.snakeBody.length; i++) {
      this.newSnake.push({
        x: this.snakeBody[i].x,
        y: this.snakeBody[i].y
      })
    }
    this.isGameOver(this.newSnake);
  };

  // 蛇吃到食物
  eatFood() {

    // 检测蛇头和食物的碰撞
    if (this.snakeBody[this.snakeBody.length - 1].x == this.food.x && this.snakeBody[this.snakeBody.length - 1].y ==
      this.food.y) {

      // 吃到食物添加蛇身体
      var snakeNewbody = {
        x: this.snakeBody[0].x - this.space,
        y: this.snakeBody[0].y - this.space,
        color: "black"
      };

      // 吃到食物分数加一
      this.goal++;
      this.score.innerHTML = this.goal;

      // 蛇吃到食物需要往尾巴添加一个（格子）坐标
      this.snakeBody.unshift(snakeNewbody);

      // 蛇吃到食物的时候 再次创建
      this.drawFood();
    }
  };

  // 判断游戏是否结束
  isGameOver(newSnake) {

    // 记录蛇头的坐标
    var snakeHead = this.snakeBody[this.snakeBody.length - 1];

    // 判断是否超出边界
    if (snakeHead.x < 0 || snakeHead.x > this.canvas.width - this.space || snakeHead.y < 0 || snakeHead.y > this
      .canvas.height - this.space) {
      alert("撞墙了还怎么玩？😭");
      clearInterval(this.timer);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.init();
      return;
    }

    // 主要检测是否自残
    for (var i = 4; i < newSnake.length; i++) {
      if (newSnake[0].x == newSnake[i].x && newSnake[0].y == newSnake[i].y) {
        clearInterval(this.timer);
        alert("怎么还能吃自己呢😭？不玩啦！");
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.init();
        return;
      }
    }
  };

  // 控制面板
  controlPanel() {

    // 开始游戏
    this.btns[0].onclick = function () {

      // 调用绘制蛇的移动
      clearInterval(_this.timer);
      _this.timer = setInterval("_this.drawSnake()", _this.speed);
    };

    // 暂停游戏
    this.btns[1].onclick = function () {
      clearInterval(_this.timer)
    }
  }
};


// 实例化
new SnakeGame({
  width: 600,
  height: 600,
  space: 12
});
