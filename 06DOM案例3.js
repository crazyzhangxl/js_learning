
window.onload = function () {
   let aTagElement = document.getElementById('aTag');
   let erElement = document.getElementById('erwei');
   aTagElement.onmouseover =  function () {
       console.log("over");
       erElement.className =  "erweima show";
       //用替换也可以  erElement.className = erElement.className.replace("hide","show");

   };

   aTagElement.onmouseout =  function () {
       // 这里先留下来 要清楚的是不需要正则判断在上面和里面 是瞬发的,和状态无关
       if(erElement.className.match("show")){
           //erElement.className = "erweima hide";
           erElement.className = erElement.className.replace("show","hide");
       }
   };

    /* ----案例文本框----*/
    let inputDivElement = document.getElementById('inputDiv');
    let accountElement = document.getElementById('accountInput');
    let buttonCannot = inputDivElement.getElementsByTagName('button')[0];
    let buttonCan = inputDivElement.getElementsByTagName('button')[1];
    buttonCannot.onclick = function () {
        accountElement.style.backgroundColor = "grey";
        accountElement.disabled = true;
    };

    buttonCan.onclick = function () {
        accountElement.style.backgroundColor = "";
        accountElement.disabled = false;
    };

    let pwdElement = document.getElementById('pwdInput');
    let pwdLabelElement = document.getElementById('pwdLabel');
/*
    pwdElement.onfocus = function () {
            pwdLabelElement.innerText = "";
    };

    pwdElement.onblur = function () {
        if (pwdElement.value.length === 0){
            pwdLabelElement.innerText = "请输入密码";
        }
    };
    */

    // 检测输入事件 --- 类似于Android[包括增添和删除]
    pwdElement.oninput = function(){
        if (pwdElement.value.length === 0){
            pwdLabelElement.innerText = "请输入密码";
        }else {
            pwdLabelElement.innerText = "";
        }
    };

    let lastInputElement = document.getElementById('lastInput');
    lastInputElement.oninput = function () {
       changeLastInput(lastInputElement);
    };


    /*------案例三 表单事件------*/
    let cbTotal = document.getElementById('cbTotal');
    let tBody = document.getElementById('tableBody');
    let inputsElement = tBody.getElementsByTagName('input');
    let childTrNodes = tBody.children;

    cbTotal.onclick = function () {
        for (let i =0;i<inputsElement.length;i++){
            let element = inputsElement[i];
            element.checked = this.checked;
        }
    };

    for (let i=0;i<inputsElement.length;i++){
        let elementElement = inputsElement[i];
        elementElement.onclick = function () {
            doTotalChanged(cbTotal,inputsElement);
        }
    }

    for (let i=0;i<childTrNodes.length;i++){
        console.log(childTrNodes.length);
        doTrNodeMoveOver(i,childTrNodes);
    }



    /* ---------案例四 衣服选择----------*/
    let clothesElement = document.getElementById('clotherBox');
    let lisElements = clothesElement.getElementsByTagName('li');
    let innerElement = document.getElementById('inner');
    let spanElements = innerElement.getElementsByTagName('span');
    for (let i =0 ;i<lisElements.length;i++){
        let singleLi = lisElements[i];
        dofun(singleLi,i,spanElements,lisElements);
    }
};

function dofun(singleLiElement,i,spanElements,lisElements) {
    singleLiElement.onmouseover = function () {
        console.log(""+i);
        for (let j=0;j<spanElements.length;j++){
            let niceSpan = spanElements[j];
            let niceList = lisElements[j];
            if (j === i){
                niceSpan.className = "showLargeBox";
                niceList.className ="liBackground";
            } else {
                niceSpan.className = "";
                niceList.className = "";
            }
        }

    }

}

/**
 *
 * @param totalElement  总开关
 * @param allElement    所有
 */
function doTotalChanged(totalElement,allElement) {
    let bol = true;
    for (let i=0;i<allElement.length;i++){
        let element = allElement[i];
        if (element.checked === false){
            bol = false;
            break;
        }
    }
    totalElement.checked = bol;
}


/**
 * 案例三
 * @param i
 * @param childTrNodes
 */
function doTrNodeMoveOver(i, childTrNodes) {
    let chooseNode = childTrNodes[i];
    chooseNode.onmouseover = function () {
        // for (let j=0;j<childTrNodes.length;j++){
        //     let trNode = childTrNodes[j];
        //     if (j ===i){
        //         chooseNode.style.backgroundColor = "#0f0";
        //     } else {
        //         trNode.style.backgroundColor = "";
        //     }
        // }
        chooseNode.style.backgroundColor = "#0f0";
    };

    chooseNode.onmouseout =function () {
        console.log("移除了");
        chooseNode.style.backgroundColor = "";
    }
}

function changeLastInput(element) {
    if (element.value.length < 10 && element.value.length > 6){
        element.className = "error";
    }else {
        element.className = "right";
    }
}



