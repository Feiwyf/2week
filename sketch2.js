function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255, 255, 204); // 設定背景顏色為淡黃色 (RGB: 255, 255, 204)
    
    // 根據滑鼠位置動態調整方框和圓的大小
    let rectSize = map(mouseX, 0, width, 100, 500);
    rectMode(CENTER);
    
    // 畫一整排的方框和圓
    for (let x = rectSize / 2; x <= width; x += rectSize + 20) {
      // 畫方框
      stroke(0, 255, 127); // 設定方框外框顏色為翡翠色 (RGB: 0, 255, 127)
      strokeWeight(10); // 設定方框外框粗度為10
      fill(0, 0, 255); // 設定填充顏色為藍色
      rect(x, height / 2, rectSize, rectSize); // 在畫布中央畫一個方框
  
      // 在方框中間畫圓
      stroke(255, 182, 193); // 設定圓外框顏色為粉紫色 (RGB: 255, 182, 193)
      strokeWeight(10); // 設定圓外框粗度為10
      fill(128, 0, 128); // 設定填充顏色為紫色
      ellipse(x, height / 2, rectSize, rectSize); // 在方框中央畫一個直徑為200的圓
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  