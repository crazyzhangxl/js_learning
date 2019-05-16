let spanLists;
let preIndex = 0;
let moveIntervalX = 15;
window.onload = function () {
    let square = document.getElementById('square');
    spanLists = square.getElementsByTagName('span');
    let inners = document.getElementById('inner');
    let ulElement = inners.children[0];
    let offsetWidth = inners.offsetWidth;

    init();
    for (let i =0 ;i<spanLists.length;i++){
        spanLists[i].onmouseover = function () {
            if (i === preIndex){
                return;
            }
            spanSelected(i);
            animate(ulElement,-offsetWidth*i);
        }
    }
};

function init() {
    spanLists[preIndex].className = "current";
}

function spanSelected(index) {
    spanLists[preIndex].className = "";
    spanLists[index].className = "current";
    preIndex = index;
}


/**
 * 动画
 * @param obj 对象
 * @param scrollX 移动的x
 */
function animate(obj,scrollX) {
    // 运行动画前先关闭之前的动画
    clearInterval(obj.timer);
    // 根据位置判断间隔的正负
    let  moveIndex =  obj.offsetLeft<scrollX?moveIntervalX:-moveIntervalX;
    let result;
    obj.timer =  setInterval(function () {
        obj.style.left = obj.offsetLeft+moveIndex+"px";
        result = scrollX-obj.offsetLeft;
        if (Math.abs(result) <= Math.abs(moveIndex)){
            obj.style.left = scrollX+"px";
            clearInterval(obj.timer);
        }
    },5);
}
