let leader = 0; // 显示区域自身位置
let target = 0;
window.onload = function () {
    let hou = document.getElementById('hou');
    window.onscroll = function () {
        leader = scroll().top;
        if (leader >= 1000){
            hou.style.display = "block";
        } else {
            hou.style.display = "none";
        }
    };

    /**
     * window.scrollTo(x,y)
     * 界面跳转到指定的目标 ----------------   
     */
    hou.onclick = function () {
        let  timer = null;
        let step;
        clearInterval(timer);
        timer = setInterval(function () {
              // 这里的leader是一直变化的--------
              step = (target-leader)/10;
              console.log("11");
              step = step > 0 ? Math.ceil(step):Math.floor(step);
              leader = leader +step;
              // x,y
              window.scrollTo(0,leader);
              if (leader === 0){
                  clearInterval(timer);
              }

        },20);
    }
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
