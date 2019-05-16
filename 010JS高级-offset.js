window.onload = function () {
    demo1();

    demo2();

    demo3();

    demo4();

    demoNext();
};

/**
 * offsetwith和offsetHeight 无单位
 *
 * offsetWidth  = width + leftPadding + rightPadding + border*2
 * offsetHeight = height + topPadding + bottomPadding + border*2
 */
function demo1() {
    let div1Element = document.getElementById('demo1');
    // offsetHeight和offsetWidth 可以检测盒子的宽高
    // 包括宽高和padding值以及boeder
    console.log("offsetWidth = "+div1Element.offsetWidth);   // 122
    console.log("offsetHeight = "+div1Element.offsetHeight); // 122
}

/**
 * offsetLeft和offsetTop 无单位
 * 功能: 检测距离父盒子有定位的左/上面的距离,如果父级都没有定位则以body为准
 * 当子盒子没有赋予left 或者 top时
 * offsetLeft从父亲的padding开始算 父亲的border不算  即 offsetLeft = 父亲有定位paddingLeft
 *
 * 当子盒子定义了left 或者 top时
 * offsetLeft = left
 *
 */
function demo2() {
    let div2ChildElement = document.getElementById('demo2DivChild');
    console.log("offsetLeft = "+div2ChildElement.offsetLeft); // 20/10
    console.log("offsetTop = "+div2ChildElement.offsetTop);   // 20/10
}

/**
 * offsetParent
 * 功能： 检测父亲盒子中带有定位的父亲盒子的节点
 *
 * 父亲盒子有定位则返回层级最近的盒子;无定位则为body
 */
function demo3() {
    let div3ChildElement = document.getElementById('demo3Child');
    let offsetParent = div3ChildElement.offsetParent;
    console.log(offsetParent);
}


function demo4() {
     let  div4Child =  document.getElementById('demo4Child');
     let parentNode = div4Child.parentNode;
     if (parentNode!== null){
         /* width+paddingLeft+paddingRight+bord*2 = 100+10+2 = 112*/
         console.log(parentNode.offsetWidth);  // 112
         console.log(parentNode.offsetHeight); // 112
     }
     // 当父亲与儿子都没有定位时 ！！！！！！！！！！！ 不是0 是6  是从border开始算的
     // console.log(div4Child.offsetLeft); // =0 错了
     // console.log(div4Child.style.left); // null

    // 当父亲有定位 而儿子没有left时
    //console.log(div4Child.offsetLeft); // =5 对了

    // 当父亲没定位 儿子有定位left时还是相对的body 等于left
    // 当父亲有定位 儿子有定位left时 === left+父亲的border
    console.log(div4Child.offsetLeft); // divChild.style.left 去掉px 对了
    // 当父亲盒子有边距的时候赋予完了之后会默认加上paddingLeft的
    // *********以上时很重要的*********
    div4Child.style.left = "1px";
    console.log("改变之后的style.left ="+div4Child.style.left);
    console.log("改变之后的大小 = "+div4Child.offsetLeft);
}

function demoNext() {
    let next = document.getElementById('demoNext');
    console.log("案例5 = "+next.offsetLeft);
    console.log("案例5 = "+next.style.left);
}
