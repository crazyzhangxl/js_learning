window.onload = function () {
    /**
     * 沙箱模式概念:
     * 与外界隔绝的一个环境 外界无法修改该环境内任何信息 沙箱内的东西与外界隔绝
     * 用于隔绝变量的
     *
     *  == 匿名函数
     * 优势:
     * 沙箱模式使用的是IIFE(密集调用函数),不会在外界暴露任何的全局变量 也就不会造成全局变量的污染
     * 沙箱中的所有数据 都是和外界完全隔离的 外界无法对其进行修改
     *
     * 原理:
     * 函数可以构建作用值域,上级作用域不能直接访问下级作用域中的数据
     */
    (function () {
        var sum = 0;
        console.log(sum+10);
    })();


    /**
     * 函数调用模式
     */
    window.age = 38;
    var obj = {
        age:18,
        getAge:function () {
            function foo() {
                console.log("函数里:"+this.age);
            }
            foo();
        }
    };

    var f = obj.getAge;
    f();
    // 38
};
