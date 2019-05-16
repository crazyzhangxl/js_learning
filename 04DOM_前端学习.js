// noinspection SpellCheckingInspection
/**
 * 事件三要素:事件源,事件,事件处理程序[函数]
 *
 *
 * window.onload 可以预防使用标签在定义标签之前[牛逼了 很好的解决了问题-.-]
 */

//行内绑定
function alertMsgFromEventFirst() {
    let eventFirst = document.getElementById('eventExample1');
    if (eventFirst.style.backgroundColor === "pink" ||
        eventFirst.style.backgroundColor ===""){
        eventFirst.style.backgroundColor = "green";
    }else {
        eventFirst.style.backgroundColor = "pink";
    }
}

// noinspection SpellCheckingInspection
window.onload = function () {
    let eventTwo = document.getElementById('eventExample2');
    eventTwo.onclick = function () {
        alert("点击了第二个");
    };

    let  controlWidget =  document.getElementById('closeBanner');
    let topBanner = document.getElementById('banner');
    controlWidget.onclick = function () {
        // 类控制(通过赋予类名的方式)
        //1.保留原类名,添加新类名 topBanner.className += "hide";
        //2.直接覆盖赋予类名topBanner.className = "hide";
        //3. 行内赋予直接删除
        topBanner.style.display = "none";
    };


    let eventThird = document.getElementById('moveEvent');
    // initColor
    eventThird.style.backgroundColor = "red";
    eventThird.onmouseout = function () {
        //eventThird.style.backgroundColor = "red";
        //这里this 指代的是函数的调用者
        this.style.backgroundColor = "red";
        // 假如需要修改图片源:
        // eventThird.src = "xxx";
    };

    eventThird.onmouseover = function () {
        eventThird.style.backgroundColor = "green";
    };

    /*--------------  DOM开始 --------------*/
    /*----------节点的获取 以及简要操作----------*/
    let boxChild = document.getElementById('boxChild');
    // 获取父亲节点 parentNode
    let boxFather = document.getElementById('boxFather');
    let elementDiv = document.createElement('div');
    boxFather.appendChild(elementDiv);
    //boxFather.removeChild()  删除
    //boxFather.insertBefore() 在某个之前插入

    console.log(boxChild.parentNode);
    // 兄弟节点[考虑浏览器兼容问题]  next下一个,previous前一个
    // 单个子节点  第一个以及最后一个


    /*------节点属性的操作2------*/
    let light = document.getElementById('image');
    console.log(light.className);
    console.log(light.title);
    console.log(light.alt);
    console.log("修改前class = "+light.getAttribute("class"));
    light.setAttribute("class","haha");
    //light.setAttribute("id","其他的ID");
    //light.setAttribute("alt","属性哦");
    light.title = "我是标题";
    console.log("修改后class = "+light.getAttribute("class"))
    console.log(light.title);
};

// 案例2 点击按钮隐藏盒子
// 思路: 点击a链接,让top-banner这个盒子隐藏起来

