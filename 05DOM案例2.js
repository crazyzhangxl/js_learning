window.onload = function () {

    /* ----- 案例1 -----*/
    let aControl = document.getElementById('control');
    let imageControl = document.getElementById('imgShow');
    aControl.onclick = function () {
        let innerText = aControl.innerText;
        if (innerText === "关"){
            aControl.innerText = "开";
            imageControl.src = "./图片/light_off.png";
             // imageControl.style.visibility = "hidden";
             // visibility hideen 仍然占空间 和 invisible一个意思
        } else {
            aControl.innerText = "关";
            imageControl.src = "./图片/light_on.png";
            //imageControl.style.visibility = "visible";
        }
        //return false的作用是禁止a链接跳转   ----- 牛逼 ------
        //或者行内  onclick = "fun();return false"
        return false;
    };


    /* ------- 相册问题 -------*/
    // title -- 属性实现当鼠标经过图片时出现文字提示的效果
    // alt   -- 属性是为了给那些不能看到你文档中图像的浏览者提供文字说明的
    let divControl = document.getElementById('divControl');
    let imgElement = document.getElementById('imageShow');
    let pElement = document.getElementById('des');
    // 标签--
    let tagA = divControl.getElementsByTagName("a");
    for (let i = 0 ;i<tagA.length;i++){
        doTagChange(tagA[i],imgElement,pElement);
        // 小贴士: 在循环里面调用的时候 切记要使用 this.属性
        //        this指代的是方法的调用者 不会出现其他的问题
    }
};

function doTagChange(elementA,elementImg,elementP) {
    elementA.onclick = function () {
        elementImg.src = elementA.href;
        elementImg.title = elementA.title;
        elementP.innerHTML = elementA.title;
        // 设置不跳转 ----- 设置连接不跳转
        return false;
    }
}
