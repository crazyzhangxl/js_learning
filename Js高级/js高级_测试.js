window.onload = function () {
    testTiSheng();

    function testFloor() {
        console.log("----floor开始----")
        console.log(3/6);
        console.log(Math.floor(3/6));
        console.log("----floor结束 ----")
    }

    testFloor();
    testMap();

    showArr();
};

function showArr() {
	console.log('开始----------');
	let arr_one = [];
	let arr_two = [];
	let obj = {
		id:5,
		name:'小李'
	};
	let obj2 = {
		id: 6,
		name:'小王'
	};
	arr_one.push(obj);
	arr_one.push(obj2);
	console.log();
	console.log('添加--完成');
	console.log(arr_one);

	console.log('*******');
	console.log('点击ID =5 的条目');
	console.log('*******');
	for (let i=0;i<arr_one.length;i++){
		if (arr_one[i].id === 5){
			arr_two.push(arr_one[i]);
			break;
		}
	}
	console.log('查看数组two:');
	console.log(arr_two);
	console.log('查看two里面的ID');
	console.log(arr_two[0].id);
	console.log(arr_two[0].name);
	console.log();
	console.log('结束----------');
}

function testTiSheng() {
    a = 100;
    console.log(a);
    let fun =  function showNum() {
        console.log("我是showNum()方法");
    };
    fun();
}

function testMap() {
    const array = [];
    for (let i=0;i<10;i++){
        let key = Math.floor(i/6);
        if (!array[key]) {
            array[key] = [];
        }
        array[key].push(i);
    }
    console.log(array);

    console.log("逐条打印开始 ---");
    // for (let value in array){
    //     value.forEach(function (value, key) {
    //         console.log("key = "+key+"   value = "+value);
    //     })
    // }
    console.log("逐条打印结束 ---");

    const arrayHere = [];
    arrayHere.push("你好");
    arrayHere.push("世界");
    console.log(arrayHere);

    console.log("---开始了---");
    arrayHere.forEach(function (value, key) {
        console.log("key = "+key+"   value = "+value);
    });

    const arrayNum = [];
    for (let j=0;j<5;j++){
        arrayNum.push(j);
    }
    console.log(arrayNum);
}
