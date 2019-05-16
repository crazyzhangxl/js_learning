let index = 0;
let mostIndex = 5;
let containerwidth;
let  ulElement;
let moveX = 15;
window.onload = function () {
    let box = document.getElementById('box');
    let picContainer = document.getElementById('picContainer');
    containerwidth = picContainer.offsetWidth;
    ulElement = picContainer.children[0];
    let arr = document.getElementById('arr');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    box.onmouseover = function () {
        // 目标显示
        arr.style.display = "block";
    };

    box.onmouseout = function () {
        // 目标隐藏
        arr.style.display = "none";
    };

    left.onclick = function () {
        turnLocation(true);
    };

    right.onclick = function () {
        turnLocation(false);
    };
};

function turnLocation(location) {
    //向左
    if (location){
        if (index !== 0) {
            index--;
            animate(ulElement, -index * containerwidth);
        }

    } else {
        if (index !== 4) {
            index++;
            animate(ulElement, -index * containerwidth);
        }
    }
}

function  animate(obj,scrollX) {
    clearInterval(obj.timer);
    let  instance = obj.offsetLeft < scrollX ? moveX:-moveX;
    obj.timer = setInterval(function () {
        console.log(1);
        obj.style.left = obj.offsetLeft+instance+"px";
        if (Math.abs(obj.offsetLeft - scrollX) < Math.abs(moveX)){
            obj.style.left = scrollX+"px";
           clearInterval(obj.timer)
        }
    },10);

}

