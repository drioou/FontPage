function Parent(){
	this.name = 'wang';
}
function Child(){
	this.age = 28
}
// child.prototype = new Parent();

var demo = new Child();
console.log(demo.age);
console.log(demo.name);
var xhr = new XMLHttpRequest();
xhr.open('POST',url,true);
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xhr.onreadystatechange = function(){
	if(xhr.readyState ==4 && (xhr.status == 200 || xhr.status == 304) ){
		fn.call(this,xhr.reponseText);
	}
}
xhr.send(data);

var promise  = new Promise(function(resolve,reject){
	if(){
		resolve(result);
	}else {
		reject(Error(errMessage));
	}
})
 
 promise.then(onFulfilled,onRejected)