/**
 * 描述：
 * @ClassName JS_数据类型
 * @Author apple
 * @Date 2019-05-01 14:03
 * @Version 1.0
 */

// JS数据类型分为2类
// 1.原始数据类型 数字,字符串,布尔,null undefined
// 2.对象类型 其他
window.onload = () => {
	console.log('立即执行函数');
	let date = new Date();
	console.log(date);
	console.log(date.getDay());

	whichBoolean();

	console.log(typeof null ); // object
	console.log(typeof 'xx');  // string
	let str = new String('xx');
	console.log(typeof  str);  // object
	console.log(typeof 'x' === 'string'); // true


	// 字符串既然不是对象,为何它会有属性呢？
	// 只要引用了字符串的属性,JS就会将字符串通过new String(s) 的方式转换为对象，这个对象继承了字符串的方法
	// 一旦引用结束,这个新创建的对象就会销毁

	// 同样数值和布尔也有包装类型 Number()和Boolean()
	// null 和 undefined 没有包装对象,访问他们的属性会报错

	let a = 1;
	let b = undefined;
	console.log(a.toString()); // 1
	// console.log(b.toString()); // Uncaught TypeError: Cannot read property 'toString' of undefined


	let longStr = "hello world";
	console.log(longStr.toUpperCase()); // HELLO WORLD  【只不过返回一个新值罢了】
	console.log(longStr);               // hello world
};

function whichBoolean() {
	testBool(undefined); // false
	testBool(null);      // false
	testBool("");        // false
}

function testBool(value) {
	if (! value) 	{
		console.log(value+" is false");
	}
}


