let nowIndex = 0;
let selectedIndex = 0;
window.onload = function () {
    let banner = document.getElementById('banner');
    let moveSpan = banner.getElementsByTagName('span')[0];
    let ulElement = banner.getElementsByTagName('ul')[0];
    let spanWidth = moveSpan.offsetWidth;
    // 列表数组 ------
    let liLists = banner.getElementsByTagName('li');
    for (let i=0;i<liLists.length;i++){
        liLists[i].onmouseover = function () {
            animateMove(moveSpan,spanWidth*i);
            selectedIndex = i;
        };

        liLists[i].onclick = function () {
            nowIndex = i;
        };
    }

    /**
     * 移开的时候进行回调
     */
    ulElement.onmouseout = function () {
        if (selectedIndex === nowIndex){
            return;
        }
        console.log("移除了");
        animateMove(moveSpan,spanWidth*nowIndex);
    };


};

/**
 * 移动动画
 * @param obj
 * @param targetX
 */
function animateMove(obj,targetX) {
    clearInterval(obj.timer);
    // 当前位置
    let nowLocation;
    let step;
    obj.timer =  setInterval(function () {
        console.log("1111");
        nowLocation = obj.offsetLeft;
        step = (targetX - nowLocation)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        obj.style.left = nowLocation + step +"px";
        if (Math.abs(targetX - obj.offsetLeft) <= Math.abs(step)){
            obj.style.left = targetX +"px";
            clearInterval(obj.timer);
        }
    },10);
}

