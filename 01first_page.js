/*
* 注意点1:写js时 分号不能够省略
* */

/*
*  1. alert() 弹出对话框 用于调试
*  2. confirm() 弹出对话框,增取消按钮
*  3. console.log("") 控制台输出
*  4. prompt("") 对话框多了输入框
*  5. document.write(""); 页面输出文本内容
* */

/*
 *1.const定义的变量不可以修改，而且必须初始化。
 *2.var定义的变量可以修改，如果不初始化会输出undefined，不会报错。
 *3.let是块级作用域，函数内部使用let定义后，对函数外部无影响。
 */
// const ssd = prompt("请输入摄氏度");
// const tmp = 9 / 5 * ssd + 32;
// alert(tmp);

/*
var name = "小明";
var age = 22;
var height = 22.5;
var hex = 'a';
console.log(typeof name);  // string
console.log(typeof age);   // number
console.log(typeof height);// number
console.log(typeof hex);   // string
*/

/*
* array 数组
*
* 增
* push 向数组的末尾添加一个或更多元素，并返回新的长度
* unshift 向数组的开头添加一个或更多元素，并返回新的长度
*
* 删除
* arr.pop("a");//删除数组的最后一个元素并返回该删除的元素
* arr.shift("a");//删除数组的第一个元素并返回该删除的元素
* arr.splice(index,howmany,item1,.....,itemX);

 （ index   必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
    howmany 必需。要删除的项目数量。如果设置为0，则不会删除元素。
    item1, ..., itemX   可选。向数组添加的新元素。）

* 改
* arr.splice(index,1,item)
* (开始,改变几个,item数组)
*
* 查
* arr[index]
* */


// var array = [];
// array.push("a");
// array.push("b");
// array.splice(1,1,"c");
// array.splice(0,2);
//
// //一般遍历
// for (var i = 0;i<array.length;i++){
//     console.log(array[i]);
// }
//
// // for in遍历
// for (let i in array){
//     console.log(array[i]);
// }
//
// // forEach 遍历
// array.forEach(function (value) {
//    console.log(value);
// });
//
// // ES6 for of
// for (let value of array){
//     console.log(value);
// }

/*
var map = new Map();
map.set("zxl",1);
map.set("wzm",2);
// for (let key in map){
//     console.log(map[key]);
// }

// 遍历获得值
map.forEach(function (item) {
    console.log(item.toString());
});
// 1
// 2

// 遍历键以及值
for (var [key, value] of map) {
    console.log(key + ' = ' + value);
}
// zxl = 1
// wzm = 2
*/

// let num = prompt("请输入鸡蛋数量");
// console.log(typeof num);
// var index =  num % 20 +1;
// alert("需要的篮子 = "+index);

/*
* 当您声明新变量时，可以使用关键词 "new" 来声明其类型：
* var carname=new String;
  var x=      new Number;
  var y=      new Boolean;
  var cars=   new Array;
  var person= new Object;
* */


/*
 *  true   true 除0数字,"something" object(任何对象)为true
 *  false  false 0 " " undefined null 为false
 *
 *  undefined == null  true
 *  undefined === null false
 *
 *  任何数据类型和undefined运算都是NaN
 *  任何值和 null运算，null可以看作是0运算
 *
 *  转换数字  -0 *1 /1 必须是-0
 *  Number(str)
 *  parseInt(str) parseFloat(str)
 *
 *
 *  !反(取反)
 *  任何数值类型都可以转换成boolean类型。 var bool = Boolean("111")
 *
 *  !!x == ！(!x) 转换boolean值,获取该变量的类型------
 */

// var str = "123abc";
// var  num = 134;
// console.log(str-0);
// // 全盘转换
// console.log(Number(str));
// // 截取字符
// console.log(parseInt(str));
// console.log(typeof parseInt(str));
// console.log(num.toString()); // 134
// console.log(typeof num.toString()); // string
// console.log(!!123);
// console.log(!!"abc");

// 测试预习解析
// 预解析: js的解析器在页面加载的时候,首先检查页面上的语法错误。把变量申明提升起来,只是提升变量的名称,不对齐进行赋值,同时
//        提升函数的整体
// 1. 查看语法错误
// 2.变量申明提升和函数整体提升 [只是提升变量名,而不对其进行赋值]
// console.log(a);      // 结果: undefined
// var a = 10;
// console.log(show()); // 结果: 10

window.onload = function () {
    testMapWithList();
};

function show() {
    return 10;
}


function febe() {
  alert(getsum(4));
}

function getsum(a) {
    if (a ===1 || a ===0){
        return 1;
    }
    return getsum(a-1)+getsum(a-2);
}


function f1() {
    return 2;
}

function f2() {
    return 3;
}

function f(a,b) {
    console.log(a+b);
    return a+b;
}


function testMapWithList() {
    console.log("----- -----");

    // 数组遍历
    let list = ["数据1","数据2","数据三"];
    list.map((value, index)=>{
        console.log('index = '+index+",value = "+value);
    });

    /*
    index = 0,value = 数据1
    index = 1,value = 数据2
    index = 2,value = 数据三
    */


    // map遍历
    let map = new Map();
    map.set('name','zxl');
    map.set('age',18);
    console.log(map);
    // Map(2) {"name" => "zxl", "age" => 18}

    let object = {'name':'zxl','age':20};
    Object.keys(object).forEach((value, index)=>{
        console.log('index = '+index+",value = "+value);
    });
    // index = 0,value = name
    // index = 1,value = age

    /**
     * vue中常用的技巧:
     *
     * v-for:"(item,index) in list"
     *
     * v-for:"(item,index) of map"
     */
}








