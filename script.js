//加入close按钮
let myNodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//点击close按钮隐藏该项目
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    // div.style.display = "none";
    //原来只是隐藏了,改用remove移除li
    div.remove();
  };
}

//显示完成
let list = document.querySelector("ul");

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
//add按钮后添加
//判断数量 为0的时候显示keep doing 为3的时候则没法再添加
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (myNodelist.length === 3) {
    alert("Task is full!");
  } else if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //加入右边的小叉叉
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
    };
  }
}
