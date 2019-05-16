/**
 * 描述：
 * @ClassName 递归
 * @Author apple
 * @Date 2019-04-02 22:00
 * @Version 1.0
 */

window.onload =function () {
		console.log('体验递归');
		let data = {
				id:1,
				name:'地球',
				pid:0,
				children:[
					{
						id:2,
						name:'亚洲',
						pid:1,
						children:[
							{
								id:3,
								pid:2,
								name:'中国',
								province:[
									{
										id:14,
										pid:3,
										name:'江苏'
									},{
										id:15,
										pid:3,
										name:'湖南'
									}

								]
							},
							{
								id:4,
								pid:2,
								name:'日本',
								province:[
									{
										id:19,
										pid:4,
										name:'大阪'
									},{
										id:20,
										pid:4,
										name:'东京'
									}

								]
							}
						]
					},{
						id:10013,
						pid:1,
						name:'非洲'
					}]
		};
		let array = [];
		// show(data,array);
		// console.log(array);
	  // setTreeData(array);

	  // 重新拉一下...
};


/**
 * step1:
 * {
 *   {name:'地球'}
 *
 * }
 * @param data
 * @param array
 */
function show(data,array) {
	if (data.children !== undefined && data.children.length !== 0){
		array.push({pid:data.pid,id:data.id,name:data.name});
		for (let i=0;i<data.children.length;i++){
			show(data.children[i],array);
		}
	}else if (data.province !== undefined && data.province.length !== 0){
		array.push({pid:data.pid,id:data.id,name:data.name});
		for (let i=0;i<data.province.length;i++){
			show(data.province[i],array);
		}
	} else {
		array.push({pid:data.pid,id:data.id,name:data.name});
	}
}

function setTreeData(source){
	let cloneData = JSON.parse(JSON.stringify(source))    // 对源数据深度克隆
	let tree = cloneData.filter(father=>{              //循环所有项
		let branchArr = cloneData.filter(child=>{
			return father.id === child.pid      //返回每一项的子级数组
		});
		if(branchArr.length>0){
			father.children = branchArr;    //如果存在子级，则给父级添加一个children属性，并赋值
		}
		return father.pid === 0;      //返回第一层
	});
	console.log(tree);
	return tree     //返回树形数据
}
