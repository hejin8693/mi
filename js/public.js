//素数
	function isPrime(num){
		for(var i = 2;i < num;i++){
			if( num % i == 0){
				return false;//代表这个数不是素数
			}
		}
		return true;//返回true,代表这个数是素数
	}
	
//通过ID名获取元素
	function $id(name){
		return document.getElementById(name);
	}

//判断一个数是否在该数组中
	function isArr(array,num){
		for(var i = 0;i < array.length;i++){
			if(array[i] == num){
				return true;//表示该数存在该数组中
			}
		}
		return false;//表示该数不存在该数组中
	}

//数组去重
	function noRepeat(array){
		var newArr = [];//存放去重后的数组
		for(var j = 0;j < array.length;j++){
			if(isArr(newArr,array[j])==false){
				//如果数组中的元素在新数组中不存在，则将该元素存放到新数组中去重
				newArr[newArr.length] = array[j];
			}
		}
		return newArr;//返回去重后的数组
	}
	
//数组冒泡排序（由小到大）
	function bubbleSort(array){
		for(var i = 0;i < array.length-1;i++){
			var bool = true;//开辟原则，控制每轮进来时对bool进行初始化
			for(var j = 0;j < array.length-1-i;j++){
				if(array[j] > array[j+1]){
					var temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
			if(bool){//如果一轮结束后，没有出现需要交换元素位置的话，则说明已经比较结束
				break;
			}
		}
		return array;
	}
	
//数组选择排序（由小到大）
	function selectSort(array){
		for (var i = 0; i < array.length-1; i++) {//控制排序轮数
			for(var j = i+1; j < array.length;j++){
				if(array[i] > array[j]){
					var temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			}
		}
		return array;
	}

//获取随机num位验证码
	function fnYZM(num){
		var yzm = "";
		for(var i = 0;i < num;i++){
			var ascii = parseInt(Math.random()*75+48);
			if((ascii >= 58 && ascii <= 64)||(ascii >= 91 && ascii <= 96)){
				i--;
			}else{
				yzm += String.fromCharCode(ascii);
			}
		}
		return yzm;
	}

//获取2个数之间的随机数
	function randomNum(min,max){
		var sj = parseInt(Math.random()*(max-min+1)+min);//取整函数法
		//var sj = Math.floor(Math.random()*(max-min+1)+min);//地板函数法
		//var sj = Math.round(Math.random()*(max-min)+min);//四舍五入函数法
		return sj;
	}

//随机获取一个16进制颜色
	function yanSe(){
		var num = "0123456789abcdef";//16进制颜色值可取到的字符集合
		var ys = "#";
		for(var i = 0; i < 6;i++){
			//随机获取num的下标值
			//var sj = parseInt(Math.random()*16);//直接再写一次随即
			var sj = randomNum(0,15);//调用上面写的方法也可
			ys += num.charAt(sj);
		}
		return ys;//返回获取的随即颜色
	}

//获取中文格式时间(输出：2018年X月X日 00:00:00 星期X)
	function dateToString(date){
		var time = "";
		var w = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var week = w[date.getDay()];
		time += year + "年" + zero(month) + "月" + zero(day) + "日";//输出年月日
		time += " " + zero(hours) + ":" + zero(minutes) + ":" + zero(seconds);//输出年月日 小时
		time += " " + week;//输出年月日 小时 星期
		return time;
	}
	function zero(num){//个位数时间前加0;
		if(num < 10){
			num = "0"+num;
		}
		return num;
	}

//计算时间差(得到的是秒)
	function secondShow(start,end){
		return (end.getTime()-start.getTime())/1000;
	}

//跨浏览器兼容获取浏览器与屏幕左边的距离
	function getScreenX(){
		if(window.screenLeft == undefined){
			return window.screenX;
		}else{
			return window.screenLeft;
		}
	}

//跨浏览器兼容获取浏览器与屏幕上边的距离
	function getScreenY(){
		if(window.screenTop == undefined){
			return window.screenY;
		}else{
			return window.screenTop;
		}
	}

//把一个新节点添加到某个节点的后面。
function insertAfter(newElement,targetElement){
	var pNode = targetElement.parentNode;
	if(pNode.lastElementChild === targetElement){
		//如果这个目标节点是它父节点的最后一个子节点，
		//可以把新的节点直接插入到父节点的最后就可以了
		pNode.appendChild(newElement);
	}else{
		//如果这个目标节点不是之父节点的最后一个子节点，
		//把新节点插入到它的下一个兄弟节点点的前面
		pNode.insertBefore(newElement,targetElement.nextElementSibling);
	}
}

//跨浏览器兼容获取事件对象的button属性值。
function getButon(e){
	var e = e || event;
	if(e){
		return e.button;
	}else{
		switch(e.button){//兼容IE8及以下浏览器
			case 1: return 0;
			case 4: return 1;
			case 2: return 2;
		}
	}
}

//跨浏览器兼容获取键盘事件对象的keyCode属性。
function getKeyCode(e){
	var e = e || event;
	return e.keyCode || e.which || e.charCode;//兼容火狐与欧朋浏览器
}

//跨浏览器兼容阻断事件冒泡。
function blockBubble(e){
	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
}

//兼容事件监听函数
function addEvent( obj , type , callBack ){
	//obj:监听对象，type：事件名称（去除了on的事件名称），callBack：函数名（执行的代码）
    if( obj.addEventListener ){
        obj.addEventListener( type , callBack );
    }else{
        obj.attachEvent( "on" + type , callBack );
    }
}

//设置cookie函数
	function setCookie(key,value,date){
		if(date){
			if(date instanceof Date){
				document.cookie = key +"="+value+";expires="+date;
			}else{
				document.cookie = key +"="+value;
			}
		}else{
			document.cookie = key +"="+value;
		}
	}
	
//获取cookie封装
	function getCookie(key){
		var str = document.cookie;
		var arr = str.split(";");
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].split("=")[0]==key){
				return arr[i].split("=")[1];
			}
			
		}
		return "";
	}

//删除cookie
function removeCookie(key){
	document.cookie = key + "=; expires=" + new Date(0);
}

//获取元素的样式属性
function getStyle(ele,arr){
	return window.getComputedStyle?window.getComputedStyle(ele,null)[arr]:ele.currentStyle(arr);
}
