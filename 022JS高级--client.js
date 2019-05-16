window.onresize = function () {
    // 屏幕大小改变的时候调用
    // 检测屏幕分辨率
    // window.screen.width;  ======= 像素点
    // window.screen.height; ======= 像素点
};


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
