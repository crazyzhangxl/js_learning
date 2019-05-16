window.onload = function () {
   demoTest();
};

function  demoTest() {
    let divObj = document.getElementById('divControl1');
    let button = document.getElementById('btnControl');
    let targetLocation;
    button.onclick = function () {
       // 点击执行动画 --------------------------
        if (divObj.offsetLeft > 850){
            targetLocation = divObj.offsetLeft-400;
        } else {
            targetLocation = divObj.offsetLeft+400;
        }
        animate(divObj,targetLocation);
    };
}

/**
 * offset取值取的是 四舍五入
 *
 * 9 - 0 为正  1 - 1- 1 向上获取值
 * -9 - 0 为负 -1  -1  -1  向下取值
 * @param obj
 * @param targetLocation
 */
function animate(obj,targetLocation) {
    let nowLocation;
    let step;
    clearInterval(obj.timer);
    obj.timer  = setInterval(function () {
        nowLocation = obj.offsetLeft;
        step = (targetLocation - nowLocation)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        console.log("布长"+step+"  "+(targetLocation - obj.offsetLeft));
        obj.style.left = nowLocation + step +"px";
        if (Math.abs(targetLocation - obj.offsetLeft) < Math.abs(step)){
            obj.style.left = targetLocation +"px";
            clearInterval(obj.timer);
        }
    },10);

}
