window.onload = function () {

  // 验证了只能获得行内的属性,和内嵌和外链无关[也就是说这2者的属性js无法获得]
  let  styleElement = getEle('styleDiv');
  console.log(styleElement.style.border);
  // 可以修改

  // 重新赋予整个的属性,以分号进行分割
  styleElement.style.cssText = "width:200px;background-color:red";
  //styleElement.opacity = "0.2"; // 透明度[低版本]
  //styleElement.style.filter = "alpha(opacity=20)";

  /* ----------------------- 本节重点  ----------------*/
  // 这样会全部覆盖掉的
    // document.write("<li>我是document.write创建的</li>")

  // 利用dom的api创建元素
  let ulElement = document.getElementById('ulElement');
  // 创建元素
  let newLiElement = document.createElement("li");
  // 赋予属性
  newLiElement.innerText = "我是一只小猪猪";
  // 添加孩子
  ulElement.appendChild(newLiElement);
  // ulElement.insertBefore(newNode,beforeNode);
  // 替换删除
  // ulElement.removeChild(l1);
  // ulElement.replaceChild(newNode,oldNode);
  // 克隆
  // let newTip = ulElement.cloneNode(true);


  /*案例3  点击列表,添加图片,鼠标放到谁上面谁高亮显示*/
  demo3();

  /*案例4 内置对象*/
  innerObject();

  /*案例5 时间倒计时*/
  showAppleTime();
};

/**
 * 案例三 --------------------
 */
function demo3() {
    let arr = ["标题1","标题2","标题3","标题4"];
    let btnElement = document.getElementById('demo3Btn');
    let divElement = document.getElementById('demo3Div');
    let ulElement = document.getElementById('ulHoder');

    btnElement.onclick = function () {
        if (ulElement.children.length === 0){
            appendNewLi(ulElement,arr);
        }else {
            alert("已经创建完毕咯");
        }
    };
}

function appendNewLi(ulElement,arr) {
    for (let i=0;i<arr.length;i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = arr[i];
        ulElement.appendChild(newLi);
    }
    // 添加触摸事件吧
    highLight(ulElement);
}

function highLight(ulElement) {
    let childLiNode = ulElement.children;
    console.log(childLiNode.length);
    for (let i=0;i<childLiNode.length;i++){
        let nowNode = childLiNode[i];
        nowNode.onmouseover = function () {
            nowNode.style.backgroundColor = "#0f0";
        };
        nowNode.onmouseout = function () {
            nowNode.style.backgroundColor = "grey";
        };
    }

}

/* ----------- 内置对象 ---------- */
               /*日期对象*/
function innerObject() {
    showDate1();
}

function showDate1() {
    let spanDateElement = document.getElementById('spanDateOne');
    let  date = new Date();
    spanDateElement.innerHTML = date.toString();
    // new Date("2018/9/1 00:00:00); 定义特定时间
    console.log(date.getDay());
    console.log(date.getFullYear()); // 年
    console.log(date.getMonth());    // 月 （month要+1）
    console.log(date.getDate());     // 日
    console.log(date.getHours());    // 小时
    console.log(date.getMinutes());  // 分钟
    console.log(date.getSeconds());  // 秒

    console.log(date.getTime());  // 距离1970/01/01的毫秒值
}

function showAppleTime() {
    let appleElement = document.getElementById('appleTime');
    let interval = setInterval(function () {
        let timeStr = getTimeStr();
        if (timeStr){
                appleElement.innerHTML = timeStr;
        }else {
            clearInterval(interval);
        }

    },100);
}

function getTimeStr() {
    // 返回时间str
    let nowSecond = new Date().getTime();
    let endSecond = new Date("2018/12/17 00:00:00").getTime();
    if (nowSecond >= endSecond){
        return false;
    }
    let distanceMSeconds = endSecond-nowSecond;
    return parseInt(distanceMSeconds/1000/60/60/24)+"天"+parseInt(distanceMSeconds%(1000*60*60*24)/1000/60/60)+"小时"+
        parseInt(distanceMSeconds%(1000*60*60)/1000/60)+"分钟"+parseInt(distanceMSeconds%(1000*60)/1000)+"秒"+
    parseInt(distanceMSeconds%1000)+"毫秒";
}

// String str = new String("普通数据类型转化为了内置对象");
// java里包装类型
