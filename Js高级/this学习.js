window.onload = function () {
    var sing = {
        name:'zxl',
        age:'小白',
        showName:function () {
            // *****重点*****
            let that = this;
            function getName(){
                console.log('name = '+that.name+"  age = "+that.age);
            }

            return getName();
        }
    };
    sing.showName();

    function Foo() {
       // 这样无效
       let getName = function () {
            alert(1);
        }
    }


    function f1() {
        let num = 123;
        // 函数体内 能够进行函数的调用
        function f2() {
            console.log(num);
        }
        f2();
        return {name: 'xx'};
    }
    console.log("----闭包测试开始了----");
    f1();

    let obj1 = f1();
    let obj2 = f1();
    console.log('---检查obj1和obj2 是否相等---');
    // 函数的每次调用 都会开辟新的空间  返回的对象都是新的 每次都不一样
    console.log(obj1 == obj2); // false


    console.log(' --- 函数内部调用 ---');

    /**
     * 函数内部调用
     */
    function method1() {
        let num = 123;
        function innerMethod(a) {
            num = a;
            console.log(num);
        }
        return innerMethod;
    }

    let func = method1();
    console.log(func);
    func(789);

    /**
     * 闭包 -- 获取多个参数方法 并设置值
     */
    function method2() {
        let name = '小李';
        let age = 18;
        return {
            getName:function () {
                return name;
            },
            getAge:function () {
                return age;
            }
        }
    }
    let method = method2();
    console.log(method.getName()); // 小李
    console.log(method.getAge());  // 18

    /**
     * 箭头函数学习
     *
     * x => x*x  === function(x){
     *     retrun x*x;
     * }
     */
      let fn = x => x*x;
      let fun2 = function(y){
          return y*y;
      };

      console.log(fn(5));   // 25
      console.log(fun2(5)); // 25
};
