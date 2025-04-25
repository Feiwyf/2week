function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); // 設定顏色模式為HSB
  background(0); // 設定背景顏色為黑色
}

function draw() {
  // 根據滑鼠位置動態調整圓的色相和亮度
  let hue = map(mouseX, 0, width, 0, 360);
  let brightness = map(mouseY, 0, height, 0, 100);
  fill(hue, 100, brightness); // 設定填充顏色為動態色相和亮度 (HSB)
  stroke(60, 100, 100); // 設定外框顏色為亮黃色 (HSB: 60, 100, 100)
  strokeWeight(2); // 設定外框粗度
  
  // 畫圓
  ellipse(mouseX, mouseY, 100, 100); // 在滑鼠位置畫一個直徑為100的圓
}

function mouseMoved() {
  redraw(); // 當滑鼠移動時重新繪製
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // 重新設定背景顏色為黑色
}
