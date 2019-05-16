function pictureClick() {
    let element = document.getElementById('picture');
    //Matches a string with a regular expression, and returns an array containing the results of that search.
    // js正则表达式
    if (element.src.match("on")){
        element.src = "./图片/light_on.png";
    } else {
        element.src = "./图片/light_off.png"
    }

    /*
    * element.innerHTML --> 文本信息
    * element.src       --> 资源
    * */
}

function textClick() {
    let colorChanged = document.getElementById('text');
    console.log("执行了");
    colorChanged.style.color = "#0f0";
    console.log (colorChanged.style.color);
    var  x = 100;
    // isNaN(X) 用于验证是否不是数字---不是就返回true
    // noinspection EqualityComparisonWithCoercionJS
    if (x == "" || isNaN(x)){
    }
}

/*
 * onmouseover:在盒子内
 * onmouseout: 在盒子外
 *
 * onmousedown、onmouseup 以及 onclick 事件
 * onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。
 * 首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，
 * 会触发 onclick 事件。
 */

function boxIN() {
    let element = document.getElementById('sp_text');
    element.innerHTML = "鼠标在内部";
}

function boxOut() {
    let element = document.getElementById('sp_text');
    element.innerHTML = "鼠标在外部";
}

function alertText(id) {
    if (id.innerHTML === "点我改变文字"){
        id.innerHTML = "改变了";
    }else if (id.innerHTML === "改变了") {
        id.innerHTML = "点我改变文字";
    }
}

function measureSpec() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log("浏览器宽度 = "+width);  // 530
    console.log("浏览器高度 = "+height); // 686
}


