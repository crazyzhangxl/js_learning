window.onload = function () {

    function sayHello(a,b) {
        console.log(this.name+" "+a*b+"个数");
    }

    let obj = {
        name: '我是zxl'
    };
    // 这个对象将代替Function类里this对象
    sayHello.apply(obj,[2,4]);
    sayHello.call(obj,2,4);


    let arr = [1,4,5,7,11];
    let number = Math.max.apply(null,arr);
    let number2 = Math.max.apply(window,arr);
    console.log(number); // 11
    console.log(number2); // 11

    // 我是zxl 8个数
    console.log("---join拼装---");

    let strArr = ["你好","世界","我的哥"];
    let resultStr = strArr.join('-');
    console.log(resultStr);
    // 你好-世界-我的哥

    function funJoin() {
        return Array.prototype.join.apply(arguments,['-']);
    }

    var str = funJoin(1,3,'join');
    console.log(str);
    // 1-3-join

    let origin = [1,2,3];
    let arr_one = [];
    let arr_two = [];
    for (let i=0;i<origin.length;i++){
        arr_one.push(origin[i]);
    }
    arr_two.push.apply(arr_two,origin);
    console.log('arr_one = '+arr_one);
    console.log('arr_two = '+arr_two);
    // arr_one = 1,2,3
    // arr_two = 1,2,3


    // 事件的三个阶段 =>
    // 捕获 目标 冒泡
    
};
