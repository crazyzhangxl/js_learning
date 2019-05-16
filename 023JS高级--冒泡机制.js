window.onload = function () {

    let box = document.getElementById('box');
    box.onclick = function(event){
        console.log("1111");
        //阻止冒泡，即阻止将事件传递给父组件
        /*--------牛逼啊------ 阻止冒泡*/
        event = event || window.event;
        if (event && event.stopPropagation()){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };

    console.log(getStyle(box,"width"));

    // 好牛逼啊 -----

    document.onclick = function (event) {
        event = event || window.event;
        console.log("点击了document");
        // 事件是否冒泡
        console.log(event.bubbles);
        // 谁触发了事件---就传递过来
        // 通过触发判断事件-------
        console.log(event.target);
    }

    /**
     * 兼容获取事件触控值 被传递过来的对象
     * @type {EventTarget | Element | Object}
     */
    var aa = event.target || event.srcElement;
};


/**
 * 获得某一个对象的某一个属性的值 ----------
 * @param element
 * @param attr
 * @returns {string}
 */
function getStyle(element,attr) {
    return window.getComputedStyle(element,null)[attr];
}

// 后面自己封装json就可以了 --------




