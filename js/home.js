			
	function myweb(){
	window.location.href='start.html';
}		
			
	var person=prompt("请输入你的名字","输入进校或出校");
	if (person!=null && person=="进校")
{
 	window.location.href='jinxiao.html';
} 
else if(person=='出校')
{
	window.location.href='chuxiao.html';
}
else{
	alert('输入错误，请重新输入');
//	window.location='home.html';
}
