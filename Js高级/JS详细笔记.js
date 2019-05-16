window.onload =function () {

    //1.使用对象字面量
    let obj = {
        name:'zxl',
        age:18
    };
    obj['sex'] = '男';
    obj.school = '南京高校';
    console.log(obj);


    //2. 使用内置构造函数
    let objB = new Object();
    objB.name='zxl';
    objB.age = 18;
    objB.sing = function () {
        alert("正在唱歌");
    };
    console.log(objB);

    //3. 封装简单的工厂函数(不推荐使用)
    function createPerson(name,age) {
        let objC = new Object();
        objC.name= name;
        objC.age =  age;
        objC.sing = function () {
            alert("正在唱歌");
        };
        return objC;
    }
    let objPerson = createPerson('小张',25);
    console.log(objPerson);

   //4.自定义构造函数 ***********
   //  用来初始化对象的函数，并且和new关键字同时出现
   //  构造函数名 首字母要大写
   function Person(name,age) {
       // 默认隐含的操作 把刚才用new新创建的对象赋值给this
       this.name = name;
       this.age = age;
       // 如果当前返回基本数据类型,那么其实应该还是返回的对象
   }
   let p = new Person('小王',25);// new Object()
   console.log(p);

    /**
     * 谁调用this指代的是调用该方法的对象 ...
     * this谁调用就是谁...
     */

    /**
     * 系统会默认帮构造函数创造一个原型对象
     */

    console.log("---原型开始---");


    /**
     * 访问原型
     * 构造函数.prototype
     * 原型默认的是一个空的对象
     */
    console.log(Person.prototype);

    /**
     * 给原型对象添加属性和方法
     */
    Person.prototype.exerciese = function () {
      console.log('我是通过在原型中添加的方法');
    };
    // ok调用成功了
    p.exerciese();
    console.log(Person.prototype);

    console.log('-----');
    /**
     * 访问原型
     * 通过 对象.__proto__
     */
    console.log(p.__proto__);
    console.log('-----构造函数来咯-----');
    console.log(p.__proto__.constructor);
    console.log('-----构造函数结束咯-----');

    /**
     * 通过原型去访问构造函数
     */
    console.log('--- 开始访问构造函数了--');
    console.log(Person.prototype.constructor);

    console.log('--- 开始访问构造函数了2--');
    console.log(p.constructor);

    /**
     * 自己创建一个对象 然后让它(原型)去继承该对象 那么就可以很方便的进行拓展
     */
    function MyArray() {
        // 这样我们就可以进行拓展了
        this.name = '我是新复制的一个数组';
        this.hello = function () {
            alert('弹出了一个hello');
        }
    }
    //var arr = new Array();
    //MyArray.prototype = arr;
    MyArray.prototype = [];
    var myarr = new MyArray();
    myarr.push(1);
    myarr.push(2);
    console.log(myarr);

    let o = {
        name:'xx'
    };
    let objX = Object.create(o);
    console.log(objX.name);


    console.log('--------- 原型链开始-----------');
    /**
     * 原型链概念:
     * 每个构造函数都有原型对象
     * 每个对象都会有构造方法
     * 每个构造函数的原型都是一个对象
     * 那么这个原型对象也会有构造函数
     * 那么这个原型对象的构造函数也会有原型对象
     * 这样就会形成一个链式的结构 称为原型
     *
     * 如果没有找到,则继续向上查找,知道object.prototype 如果还没有 就报错
     */

    /**
     * 检测浏览器的兼容性
     *
     * 原型替换...
     */
    if (Object.create){
        let oC = Object.create(o);
    } else {
        Object.create = function () {
            function F() {

            }

            F.prototype = obj;
            return new F();
        };
        let oC = Object.create(obj);
    }

    /**
     * valueOf 获取当前对象的值
     */

    console.log('-----valueOf开始-----');
    function Man() {
        this.name = '小李';
        this.valueOf = function () {
            return 128;
        }
    }
    let man = new Man();
    console.log('man.toString() = '+man.toString());
    console.log('1+man = '+(1+man));

    // man.toString() = [object Object]
    // 1+man = 1[object Object]
    console.log("修改valueOf之后 1+man = "+(1+man));

    /**
     * 函数声明
     */
    function funcName(/*参数列表*/) {
        // 函数体
    }

    //2. 函数表达式
    let funcName2 = function () {

    };

    console.log('11');
    // new function
    let  func = new Function();
    func();

    /**
     * 静态成员:
     *    是指构造函数的属性和方法
     * 实例成员:
     *    是指实例的属性和方法
     */


    /**
     * js中的异常处理 ...待学习
     * arguments为参数...
     * @param a
     * @param b
     */
    function test(a,b) {
        if (arguments.length !== 2){
            throw "参数个数不等于2";
        }
    }

    /**
     * instanceOf 判断构造函数的原型是否存在该对象的原型链上
     */
    console.log('测试instanceOf 关键字');
    console.log(p instanceof Object);


    console.log(p.__proto__);

    console.log(Person.prototype.__proto__);


    console.log('测试Object的原型 Object.prototype = ');
    console.log(Object.prototype.__proto__);
    console.log('--函数的原型--');


    let fool = new Function();
    console.log("空函数的原型 = ");
    console.log(fool.prototype.__proto__.__proto__);

    /**
     * Object 和  Function 的原型链简单示意图
     *
     * 对象构造函数  --> Function.Prototype --> Object.Prototype --> null
     * Function    --> Function.Prototype --> Object.Prototype --> null
     */

};
