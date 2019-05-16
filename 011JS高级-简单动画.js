window.onload = function () {
  demo1();
  demo2();
};

// 瞬间动画
function demo1() {
    let flashBoxElement = document.getElementById('flashBox');
    let btnFlash = document.getElementById('btnFlash');
    btnFlash.onclick = function () {
        flashBoxElement.style.left = "100px";
        flashBoxElement.style.top = "100px";
    }
}

function demo2() {
    let uniform = document.getElementById('btnUniform');
    let uniformBox = document.getElementById('uniformBox');
    let x = 0;
    // 思路 定时器,每间隔一定的时间向右走一些
    uniform.onclick = function () {
        // 要用定时器 先清除定时器
        let interval = setInterval(function () {
            x = uniformBox.offsetLeft;
            if (x >=200){
              clearInterval(interval);
                uniformBox.style.left = "";
            } else {
                // 动画原理: 当前位置+定长
                uniformBox.style.left = x + 10 +"px";
            }
        },300);
    };
}
