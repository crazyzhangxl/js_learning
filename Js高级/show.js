window.onload = function () {
    f1();
};

function f1() {
    (function (j) {
        console.log('自调用'+j)
    })(10);
}


function createCache() {
    var cache = {};
    return function (key,value) {
        if (value !== undefined){
            cache[key] = value;
            return cache[key];
        } else {
            return cache[key];
        }
    }
}

function f() {
    let divs = document.getElementsByTagName('div');
    console.log("数据长度 = "+divs.length);
    for (let i=0;i<divs.length;i++){
        let div = divs[i];
        // div.onclick = function () {
        //     alert("我是第"+i+"个元素");
        // }

        /*       function fool(j) {
                   return function () {
                       alert('我是第'+j+'个div');
                   }
               }

               div.onclick = fool(i);*/

        div.onclick = (function(j) {
            return function () {
                alert('我是第'+j+'个div');
            }
        })(i);
    }
}
