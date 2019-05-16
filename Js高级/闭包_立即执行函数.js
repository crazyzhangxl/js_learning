window.onload = function () {
    function fun() {
        let num = 10;
        return function () {
            return '返回值 = '+num;
        }
    }

    let func = fun();
    console.log(func());

    let immed = (function () {
        console.log("立即执行函数");
    })();
    // 立即执行函数


    // 立即执行函数 封装
    let funXX = (
        function (x,y) {
            return {
                showAge:function () {
                    return "年龄 = "+x;
                },
                showSex:function () {
                    return "性别 = "+y
                }
            }
        }
    )(10,'男');
    console.log(funXX.showAge()); //年龄 = 10
    console.log(funXX.showSex()); //性别 = 男

    // letTest();
    // letTest2()
    letFun3();
    //letFun4();

    funZhangKai();

   //  methodZ();
    
};

/**
 * es6 中 let定义的变量无变量提升
 */
function letTest() {
    console.log(foo);
    var foo = 10;
    // undefined

    console.log(foo2);
    let foo2 = 11;
    // ReferenceError
}

/**
 * es6 中let绑定封闭作用域,不能在let申明前赋值
 */
function letTest2() {
    var show = 100;
    if (true){
        show = 200;
        let show;
    }
    // 闭包_立即执行函数.js:58 Uncaught ReferenceError: show is not defined
}


/**
 * 哇 想不到不 由于js的变量提升导致打印的是 undefined啊
 *
 * 实际执行的顺序是:
 *
 * var temp;
 * fun f(){}
 * temp = '你是谁';
 */
function letFun3() {
    var temp = '你是谁';
    function f() {
        console.log(temp);
        if (false){
            console.log('执行了');
            var temp = 'hello';
        }
    }
    console.log(temp);
    f();
}


function letFun5_plus() {
    var temp = '你是谁';
    function f() {
        var temp;
        console.log(temp);
        if (false){
            console.log('执行了')
        }
    }
}

/**
 * 块作用域——不会污染全局变量
 *          外层代码块不受内层代码块的影响
 *          外层作用域无法读取内层作用域的变量
 */
function letFun4() {
    let  variableA = 10;
    if (true) {
        let variableA = 20;
        console.log('块内 variableA = ' + variableA);
        // 20
    }
    console.log('块外 variableA = '+variableA);
    // 10

    for (let i=0;i<10;i++){}
    console.log(i);
    // 不会污染全局变量
    // Uncaught ReferenceError: i is not defined
}

function funZhangKai() {
    let arr = [1,2,3];
    console.log(...arr);
    // 1 2 3

    //使用对象展开运算符将此对象混入到外部对象中
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    console.log(z);
    //{a: 3, b: 4}
    function mapState() {
        return 1;
    }

}

/**
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 * Object.keys(obj).map()
 */
function methodZ() {
    let arrs = [1,3,5];
    let map = arrs.map(key => ({ key, val: key }));
    console.log(map);

    /**
     * key代表的是当前值
     * array.map(function(currentValue,index,arr), thisValue)
     */
    let map1 = arrs.map(function (key) {
        return {
            // 键值一致 可以省略一个
            key:key,
            val: key
        }
    });
    console.log(map1);
    /*
    0: {key: 1, val: 1}
    1: {key: 3, val: 3}
    2: {key: 5, val: 5}
    */

    let map5 = {
        name:'zxl',
        age:18
    };
    let map2 = Object.keys(map5).map(key => ({ key, val: map5[key] }));
    console.log(map2);
    /*
    0: {key: "name", val: "zxl"}
    1: {key: "age", val: 18}
    */

    /**
     * res 返回的是一个对象 和 mapState一致
     *
     * ... 对象展开运算符号
     *
     * {
     *
     *     x:function(){
     *
     *     },
     *
     *     y:function(){
     *
     *     }
     * }
     *     展开成 x:function(){
     *
     *     } , y:function(){
     *
     *     }
     *
     */
    const res ={};
    map2.forEach(function (key, value) {
        return res[key] = function () {
            return value;
        }
    });
    console.log(res);
    console.log(...res);
}




