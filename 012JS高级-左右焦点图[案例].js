/* 鼠标放到方块上
*  点亮盒子  + 移动盒子(向左移动 给定目标盒子)
*  放到第几个移动n-1个
*
* */
var spanClick;
var moveul;
var preIndex = 0;
window.onload = function () {
    let square = document.getElementById('square');
    spanClick = square.getElementsByTagName('span');
    let innerBox = document.getElementById('inner');
    moveul = innerBox.children[0];
    let offsetWidth = innerBox.offsetWidth;
    for (let i =0;i<spanClick.length;i++){
        spanOnClickEvent(i,offsetWidth);
    }
};

function spanOnClickEvent(index,offsetWidth) {
    spanClick[index].onmouseover = function () {
        if (preIndex === index){
            return;
        }
        spanClick[preIndex].className = "";
        spanClick[index].className = "current";
        preIndex = index;
        console.log(moveul);
        console.log(-index*offsetWidth);
        animate(moveul,-index*offsetWidth);
    }
}


/**
 * 动画移动 -------------- 这里封装的很重要
 * @param obj
 * @param target
 *
 * 当从第一张图片时  应该想象的是向左滑动 ul
 *
 * 判断当前ul和父亲盒子的 left量,
 * if( -100 > -200){
 *     说明目标位置在当前的左边
 *     那么为负数 接着向左滑动
 *
 *     即 obj.offsetLeft < tatget?x:-15(向左滑动)
 * }
 */
function animate(obj,target) {
    clearInterval(obj.timer);
    let speed = obj.offsetLeft<target?10:-10;
    obj.timer = setInterval(function () {
        // 计算差值
        let  result = target - obj.offsetLeft;// 他们的值 等于0 说明完全相等
        obj.style.left = obj.offsetLeft+speed+"px";
        if (Math.abs(result) <= 10){
            // 还原,取消抖动
            obj.style.left = target +"px";
            // 取消定时
            clearInterval(obj.timer);
        }
    },10);
}
