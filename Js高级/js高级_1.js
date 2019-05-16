window.onload = function () {
    objDynamic();
    defTrueOrFalse();
    deleteAction();
    dealException();
    extendsExample();
    objExample();
    originExample();
    jingdian();
    funExample();
    argumentsExample();
    fnLian();
    tisheng();
    console.log("==========开始闭包=========");
    biBao();
};

/**
 *
 */
function objDynamic() {
    let  obj = {
        name:"zxl",
        age:22
    };
    // 对象的【动态特性】
    // 对象创建出来后 仍旧可以添加新的属性和方法
    // 方式 A .语法   B [ ]进行添加

    // 不存在创建并赋值
    obj.sex = "男";
    // 已存在属性即修改
    obj.sex ="好男人";
    console.log(obj); // output: {name: "zxl", age: 22, sex: "好男人"}
    // 属性名一定是【字符串】
    console.log(obj["name"]); // output: zxl

    // 对象传0 其实是"0"而已,不可能是索引值
    // 【隐式的类型转换】 如果不是数值,会转换为数值
    obj[0] = "我是帅比张";
    console.log(obj["name"]); // output:  zxl
    console.log(obj);

    // {} 转换 "[obj Ojb]"
    obj[{}] = "111";
    console.log(obj); // output: {0: "我是帅比张", name: "zxl", age: 22, sex: "好男人", [object Object]: "111"}
}

/**
 * 结论: 0是假
 *
 * 表达式1 && 表达式2
 * 如果表达式1为真 则返回表达式2
 * 如果表达式1为假 则返回表达式1
 *
 *
 */
function defTrueOrFalse() {
    if (0){
        console.log("0是真");
    } else {
        console.log("0是假");
    }

    console.log("-------判断开始了------");
    console.log(1&&2); // 2
    console.log(0&&1); // 0
}


/**
 * delete 删除对象的属性
 * delete 删除有返回值,代表是否删除成功,删除不能存在属性 返回值为true
 *
 * 如果删除的是对象的原型中,删除的返回值为true,但是仍然可以使用,并未删除
 */
function deleteAction() {
    let  obj = {
        name: "校长",
        age: 18
    };

    delete obj.name;
    console.log(obj);       // {age: 18}
    console.log(obj.name);  // undefined


    //知识点 如果一个变量未加作用域(var/let/const) 那么会默认加给window对象
    num = 100;
    console.log(window.num);// 100
    console.log(num);
    let isOk = delete num;
    // console.log(num);      // 未定义,直接抛异常了
    console.log(window.num);
}

/**
 * 异常捕获,不捕获后面会不执行的...
 *
 * try{
 *
 * }catch(){
 *
 * }finally{
 *
 * }
 *
 * 语法错误:try catch无法捕获
 */
function dealException() {
    console.log("异常前");
    try {
        console.log(xx);
    }catch (e) {
        console.log(e);
    }
    console.log("异常后面---");
}

function sum(num1,num2) {
    if (num1 === undefined || num2 === undefined){
        // 手动抛出异常,用于调试
        throw "参数错误";
    }
    return num1+num2;
}

/**
 * js中 键值对的组合就是对象
 */

/**
 * 继承 封装 多态
 *
 *  混入式继承
 * 继承:把另外一个对象的属性直接拿过来使用
 */

function extendsExample() {
    let obj = {

    };

    let obj1 = {
        name:"zxl",
        age:123
    };

    // 混入式继承  使用[]语法
    for (let k in obj1){
        obj[k] = obj1[k];
    }

    console.log("-----");
    console.log(obj);
    console.log("---------通过obj.create()继承----------");
}

function objExample() {
    /**
     * 构造创建对象,对象是无序的 ---
     * new object() 返回具体对象
     * { } 构造函数是object
     * [ ] 构造函数是array
     * this指向方法的调用者
     */
    function Man() {
       this.name = "小白";
       this.age = 20;
       // 返回基本类型或; 还是返回的对象 反之假如返回的是object类型,则不一样
    }
    let goodMan = new Man();
    console.log(goodMan);
}

/**
 * 原型方法
 * 原型继承
 * 创建对象时创建并关联了一个原型对象
 * 将需要创建的函数,放到原型对象中存储 解决全局方法变量污染的问题,结构更加清晰
 */
function originExample() {
    console.log("-----------原型方法测试--------");
    function Origin(){
        this.name = "zxl";
    }
    console.log(Origin);
    // 访问构造函数的原型
    console.log(Origin.prototype);
    // 给原型对象添加属性和方法
    Origin.prototype.exercise = function () {
        console.log("---我是origin下的exercise方法---");
    };
    // 直接替换原型对象
    // Origin.prototype = {};
    let origin = new Origin();
    // 先内部查找 后原型查找
    origin.exercise();
}

/**
 * 经典继承: var stu = Object.create(obj);
 *          进行原型对象的替换
 *
 *
 * 原型链概念:每个构造函数都有一个原型对象,每个对象都有一个构造函数
 * constructor 属性 获取和原型对象相关的构造函数
 * hasOwnProperty: 判断对象本身是否含有某个属性
 * A.isPrototypeof(B): 判断对象A是不是对象B的原型
 *
 * toLocalString:将字符串转换为本地格式的字符串
 *
 * var fun = new Function(); 创建空函数
 *
 *
 */
function jingdian() {
    function Stu() {
        this.name = "111";
    }
    Stu.prototype = {age:123};
    let  stu2 = new Stu();
    console.log("**************************");
    let  obj = Object.create(new Stu());
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);

    console.log("--- 对象本身属性包含 ---");
    console.log(stu2.hasOwnProperty("name"));
    // 继承的不行啊
    console.log(obj.hasOwnProperty("name"));
    console.log("----*** A.isPrototypeof(B) ***----");
    console.log(Stu.prototype.isPrototypeOf(stu2));
}

/**
 * Function和eval
 * 同: 字符串转js代码
 * 不同: Function -- 创建出来的函数并不会直接调用,程序员手动调用
 *      eval 把字符串转化成字符串  *直接* 执行
 */
function funExample() {
    let func = new Function("console.log(1222222)");
    func();
    eval("console.log('evalaaa')");
}

/**
 * arguments.length 参数个数
 *
 * arguments.callee 调用本身
 */
function argumentsExample() {
    function f(a,b) {
        console.log('arguments.length = '+arguments.length);
    }

    f(1,2);
}

/**
  构造函数  ----> .prototype  原型对象

  原型对象  ----> .constructor 构造函数

 instanceof 判断该构造函数的原型是否存在该对象的原型链上

 p -- > Person.prototype --> Object
 */


/**
 * function的原型链
 *
 *  Function 的原型对象是一个空的函数,空函数的原型是Object.prototype,object的原型对象是null
 *
 *  Function也可以当做一个构造函数
 *  通过function new出来的函数可以被当作是实例化的对象
 *  那么Function这个构造函数也有原型对象
 *
 *
 *
 */
function fnLian() {
    let foo = new Function();

    // 空函数 ƒ () { [native code] }
    console.log(Function.prototype);
    //  obj
    console.log(Function.prototype.__proto__);

    // null
    console.log(Function.prototype.__proto__.__proto__);
}

function  manager() {
    function HelpManager() {

    }
    HelpManager.prototype = {
        addSong:function () {

        },
        /**
         * 如果想在该方法调用 当前对象的另外方法需要在前加 this
         */
        delSong:function () {

        }
    }
}

/**
 * js代码的执行分为2个部分:
 *
 * 1.Js预解析
 * 2.执行
 *
 * 核心是 先定义变量,再定义方法 然后是变量赋值 顺序调用
 */
function tisheng() {
    // 异常 未定义
    // console.log(a);
    let a = 100;
    console.log(a);

    hello();
    function hello() {
        console.log("11");
    }

    // 这里就有异常了
    //console.log(res());
    let res = function () {
        return "111";
    };

    console.log(res());
    let  num;
    // 方法申明不执行 -- 运行再执行
    function f1() {
        console.log("--------函数/变量提升--------");
        console.log(num);
        num = 10;
    }
    num = 100;
    f1();
}


/**
 * 方法执行 + （）
 *
 * 闭包解决了对象的重复创建
 *
 * 通过()执行
 */
function biBao() {
    function foo() {
        let name = "zxl";
        return {
            getName:function () {
                return name;
            },
            setName:function (vale) {
                name = vale;
                return name;
            }
        }
    }
    let  person = foo();
    console.log(person.getName());
    console.log(person.setName("hah"));
}

/**
 * 如遇变量和函数同名
 * 在提升的时候，如果有变量和函数同名，会忽略掉变量，只提升函数
 */
