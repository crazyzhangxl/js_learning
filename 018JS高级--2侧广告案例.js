window.onload  = function () {
    let leftSide = document.getElementById('left');
    console.log("原始高度"+leftSide.offsetTop);
    let originalHeight = leftSide.offsetTop;
    window.onscroll = function () {
        console.log(scroll().top);
        animate(leftSide,scroll().top+originalHeight);
    }
};

function  animate(obj,targetY) {
    clearInterval(obj.timer);
    let  nowLicationY;
    let  step;
    obj.timer =  setInterval(function () {
        console.log("1");
        nowLicationY = obj.offsetTop;
        step = (targetY - nowLicationY)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        obj.style.top = nowLicationY + step +"px";
        if (Math.abs(obj.offsetTop - targetY) < Math.abs(step)){
            obj.style.top = targetY +"px";
            clearInterval(obj.timer);
        }
    },25);
}

function  scroll() {
    // 如果该属性存在 那么应该是0-无情大;无果没有返回值是undifined
    if (window.pageXOffset !== undefined){
        return {
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        // 申明dt情况
        return {
            "top":window.documentElement.scrollTop,
            "left":window.documentElement.scrollLeft
        }
    }else {
        return {
            "top":window.body.scrollTop,
            "left":window.body.scrollLeft
        }
    }
    // 或者简单封装 用合并
}

// 原理： 鼠标在页面的位置 = 被卷去的部分 + 可视区域部分

