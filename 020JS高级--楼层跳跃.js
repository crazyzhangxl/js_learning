let contentHeight = [];
let nowScrollY = 0;
let timer =null;
let targetY2;
let step;
window.onload = function () {
    let titleElement = document.getElementById('titleDiv');
    let contentElement = document.getElementById('contentDiv');
    let titleLiLists = titleElement.getElementsByTagName('li');
    let contentLiLists = contentElement.getElementsByTagName('li');
    let arrColors = ["red","pink","yellow","grey","green"];
    for (let i=0;i<titleLiLists.length;i++){
        titleLiLists[i].style.backgroundColor = arrColors[i];
        contentLiLists[i].style.backgroundColor = arrColors[i];
        // 将原本高度赋予进来
        contentHeight[i] = contentLiLists[i].offsetTop;
        titleLiLists[i].onclick = function () {
              clickEvent(i);
        };
    }
};

function clickEvent(index){
    targetY2 = contentHeight[index];
    clearInterval(timer);
    timer = setInterval(function () {
       console.log("1");
       step = (targetY2 - nowScrollY)/10;
       step = step>0?Math.ceil(step):Math.floor(step);
       window.scrollTo(0,nowScrollY+step);
       if (Math.abs(targetY2 - nowScrollY) <= Math.abs(step)){
           window.scrollTo(0,targetY2);
           clearInterval(timer);
       }
   },10);
}

window.onscroll = function () {
    // 实时的更新scrollY的值
    nowScrollY = scroll().top;
};


/**
 * 获得屏幕滚动的宽高
 */
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

<!--
     client兼容性问题：
     ie9及其以上版本
     window.innerWidth/window.innerHeight
     标准模式[有DTD] ("CSS1Compat)
     document.documentElement.clientWidth
     document.documentElement.clientHeight
     怪异模式（没有DTD）
     document.body.clientWidth
     document.body.clientHeight

-->

/**
 * 获得屏幕可视区域
 * @returns {{height: number, width: number}}
 */
function  client() {
    // 如果该属性存在 那么应该是0-无情大;无果没有返回值是undifined
    if (window.innerHeight !== undefined){
        return {
            "height":window.innerHeight,
            "width":window.innerWidth
        }
    } else if (document.compatMode === "CSS1Compat") {
        // 申明dt情况
        return {
            "height":window.documentElement.clientHeight,
            "width":window.documentElement.clientWidth
        }
    }else {
        return {
            "height":window.body.clientHeight,
            "width":window.body.clientWidth
        }
    }
    // 或者简单封装 用合并
}



