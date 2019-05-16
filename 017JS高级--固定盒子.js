window.onload = function () {
    let  titleElement = document.getElementById('Q-nav1');
    let mainElement = document.getElementById('main');
    // 目标高度
    let targetOffsetTop = titleElement.offsetTop;
    let titleHeight = titleElement.offsetHeight;
    window.onscroll = function () {
        // 滑动过程中如果scroll超过了顶部距离那么固定 否则取消固定
        if (scroll().top >= targetOffsetTop){
            titleElement.className = "fixed";
            mainElement.style.paddingTop = titleHeight+"px";
        } else {
            titleElement.className = "";
            mainElement.style.paddingTop = "0";
        }
    };
};

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
