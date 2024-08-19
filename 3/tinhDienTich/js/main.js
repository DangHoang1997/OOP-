import { Circle, Square } from "./model.js";

let caculateSquare = () => {
  let canhVuong = document.getElementById("side").value * 1;
  var chieuDai = document.getElementById("squareX").value * 1;
  var chieuCao = document.getElementById("squareY").value * 1;
  var mauNen = document.getElementById("squareColor").value;
  //
  let square = new Square(canhVuong, "Hình vuông", mauNen, chieuDai, chieuCao);
  //   hiển thị object lên layout
  let mainElement = document.getElementById("main");
  mainElement.style.width = square.chieuDai + "px";
  mainElement.style.height = square.chieuCao + "px";
  mainElement.style.backgroundColor = square.mauNen;
};

document.getElementById("areaSquare").addEventListener("click", caculateSquare);

let caculateCircle = () => {
  let banKinh = document.getElementById("radius").value * 1;
  let chieuDai = document.getElementById("cirX").value * 1;
  let chieuCao = document.getElementById("cirY").value * 1;
  let mauNen = document.getElementById("cirColor").value;
  let circle = new Circle(banKinh, "Hình tròn", mauNen, chieuDai, chieuCao);
  let mainElement = document.getElementById("main");
  mainElement.style.width = circle.chieuDai + "px";
  mainElement.style.height = circle.chieuCao + "px";
  mainElement.style.backgroundColor = circle.mauNen;
  mainElement.style.borderRadius = "50%";
};

document.getElementById("areaCircle").addEventListener("click", caculateCircle);
