window.onload = function () {
    demo2();
    alert(document.compatMode);
};

/**
 * 测试 scrollWidth 以及 scrollHeight
 */
function demo2() {
    let demo2Box = document.getElementById('demo2Box');
    let scrollW = document.getElementById('scrollWidthP');
    let scrollH = document.getElementById('scrollHeightP');
    let result = document.getElementById('result2');
    scrollW.innerText = "console.log(demo2Box.scrollWidth)"+" = "+demo2Box.scrollWidth;
    scrollH.innerText = "console.log(demo2Box.scrollHeight)"+" = "+demo2Box.scrollHeight;
    result.innerText = "scrollWidth scrollHeight不包括border  scrollWidth = width+paddingLeft+paddingRight\n" +
        "高度特点:如果内部控件超过当前的高度 则显示的是超出的较大的+有效的padding";
    console.log(demo2Box.scrollWidth);
    console.log(demo2Box.scrollHeight);
}

/**
 * 屏幕滚动出发 onScroll事件
 */
window.onscroll = function () {
    // 没有dtd
    //console.log(document.body.scrollTop+" "+document.body.scrollLeft);
    // 有dtd 新的浏览器默认就是有 ********
    console.log(document.documentElement.scrollTop+" "+document.documentElement.scrollLeft);

    // 需求:封装一盒兼容的scroll().返回值json 获取返回值

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


