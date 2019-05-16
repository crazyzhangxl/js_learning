/**
 * js中通过建立函数的方式构建对象 ---
 *     this指当属性方法都挂在在原型上
 * @param name
 * @param age
 * @param sex
 * @constructor
 */
function Student(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.display = function () {
        console.log("我的姓名叫 "+this.name+" 我的年龄是 "+this.age+" 我的性别是 "+this.sex);
    }
}

function showStudentObject() {
    let student = new Student("小张",22,'男');
    student.display();
}

/*
 * 像c一样赋予变量值的操作
 */
function likeCObject() {
    let  person = {};
    person["name"] = "小白";
    person.age = 15;
    person.sex = '男';
    console.log(person);

}

function testJson() {
    let json = {"name":"zxl","age":22,"sex":'男'};
    displayJson(json);
}

function displayJson(jsonObject) {
    console.log("是否是map类型  "+ jsonObject instanceof Map);
    console.log(jsonObject);
    for ( let k in  jsonObject){
        console.log("键 = "+k+"   值 = "+jsonObject[k]);
    }
    console.log("记住这时候不能用 jsonObject.k 来获得")
}


/**
 * 通过对sort行参定义排列规则,实现正序和逆序排列
 */
function sortNumber() {
    let arr = [1,5,7,10,-1,-10,15];
    arr.sort(function (a,b) {
        return b - a;
    });
    console.log(arr);
}

/**
 * 使用js实现冒泡排序
 */
function bubble() {
    let numArr = [1,10,7,5,2,-22.5,50];
    let numLength = numArr.length;
    let temp;
    for (let i = 0;i<numLength-1;i++){
        for (let j=0;j<numLength-i-1;j++){
            if (numArr[j] > numArr[j+1]){
                temp = numArr[j];
                numArr[j] = numArr[j+1];
                numArr[j+1] = temp;
            }
        }
    }
    console.log(numArr);
}

/**
 * 创建一个新数组 -- 循环遍历有重复的就不添加
 */
function deleteRepeat() {
    let numArr = [1,2,3,3,2,1];
    let resultArr = [];
    let canPop;
    let numLength = numArr.length;
    for (let i=0;i<numLength;i++){
        canPop = true;
        for (let j=0;j<resultArr.length;j++){
            if (resultArr[j] === numArr[i]){
                canPop = false;
                break
            }
        }

        if (canPop){
            resultArr.push(numArr[i]);
        }
    }
    console.log(numArr);
    console.log(resultArr);
}