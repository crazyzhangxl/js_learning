class Animal {
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;

        this.state = {
            remove:false
        };

    }

    getDes(){
        console.log('name = '+this.name+",age = "+this.age);
    }

    set sexProp(sex){
        this.sex = sex;
    }

    get sexProp(){
        return this.sex;
    }

    change(){
        this.state = {
            remove:true
        };

        console.log("状态 = "+this.state.remove);
    }

}

function client() {
    let  animal = new Animal('猴子',18);
    animal.getDes();
    // name = 猴子,age = 18
    animal.sexProp = '男';
    console.log(animal.sexProp);
    // 男
    animal.change();
}


function clientInner(){
    // 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，
    // 指代当前类。在 Class 外部，这个类只能用MyClass引用。
    // 相当于内部类...
    const  An = class Person {
        constructor(name){
            this.name = name;
        }

        showName(){
            console.log('showName = '+this.name);
        }

    };

    let person = new An('小张');
    person.showName();
}

function clientThis(){
    class Logger{
        constructor(){
        }

        print(text){
            console.log(text);
        }

        printName(name = '小李'){
            this.print(`hello ${name}`);
            this.print(`${name}`);
        }
    }

    let logger = new Logger();
    logger.printName('小王');


}

function clientJiantou(){
    let ret = {
    };
}

// 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj



window.onload = function () {
    client();
    clientInner();
    clientThis();
    clientJiantou();

    console.log('assign的学习');
    clientAssign();
};

function clientAssign() {
    let obj1 = {'name':'zxl'};
    let obj2 = {'age':18};
    let assign = Object.assign(obj1,obj2);
    console.log(assign);
    // {name: "zxl", age: 18
}

