let pageY = 0;
let pageX = 0;
let halfMaskWidth = 0;
let halfMaskHeight = 0;
let smallBoxLeft = 0;
let smallBoxTop = 0;
let smallBoxRight = 0;
let smallBoxBottom = 0;
let divLeft = 0;
let divTop = 0;
let value = 800/300;
window.onload = function () {

    let smallBoxDiv = document.getElementById('smallBox');
    let maskDiv = document.getElementById('maskDiv');
    let bigBox =  document.getElementById('bigBox');
    let bigImage = bigBox.children[0];
    smallBoxLeft = smallBoxDiv.offsetLeft;
    smallBoxTop = smallBoxDiv.offsetTop;
    smallBoxRight = smallBoxLeft + smallBoxDiv.offsetWidth;
    smallBoxBottom = smallBoxTop + smallBoxDiv.offsetHeight;

    smallBoxDiv.onmouseenter = function(){
        maskDiv.style.display = "block";
        bigBox.style.display = "block";
    };

    smallBoxDiv.onmouseleave = function(){
        maskDiv.style.display = "none";
        bigBox.style.display = "none";
    };



    // 给文档设置绑定事件获取鼠标位置
    document.onclick = function (event) {

    };

    /**
     * step:鼠标移动实现文本框根着移动
     */
    document.onmousemove = function (event) {
        event = event || window.event;
        //兼容：鼠标在页面的位置 = 被卷去的部分[屏幕的滑动---] + 可视区域部分[点击事件以上-屏幕]
        // 运动时先左右后上下 --------
        pageY = event.pageY || scroll().top+event.clientY;
        pageX = event.pageX || scroll().left+event.clientX;
        console.log("在里面了-----------");
        if (halfMaskHeight === 0){
            halfMaskWidth = Math.ceil(maskDiv.offsetWidth/2);
            halfMaskHeight = Math.ceil(maskDiv.offsetHeight/2);
            console.log(halfMaskWidth);
        }
        divLeft = pageX-smallBoxLeft-halfMaskWidth;
        divTop = pageY-smallBoxTop-halfMaskHeight;
        if (divLeft < 0){
            divLeft = 0;
        } else if (divLeft > smallBoxRight-smallBoxLeft-halfMaskWidth*2){
            divLeft = smallBoxRight-smallBoxLeft-halfMaskWidth*2;
        }

        if (divTop <0){
            divTop = 0;
        } else if (divTop > smallBoxBottom - smallBoxTop - halfMaskHeight*2){
            divTop = smallBoxBottom - smallBoxTop - halfMaskHeight*2;
        }
        maskDiv.style.left = divLeft+"px";
        maskDiv.style.top = divTop+"px";

        bigImage.style.marginLeft = -divLeft*value+"px";
        bigImage.style.marginTop = -divTop*value+"px";
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









