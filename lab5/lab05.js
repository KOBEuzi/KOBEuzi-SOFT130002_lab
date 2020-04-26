//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
     let index1 = url.value.indexOf("name=");
     if(index1 === -1){
        url_result.value = "Everything";
     }
     else{
       let index2 = url.value.indexOf("&");
       if(index2 === -1){
           url_result.value = url.value.substring(index1+5);
       }
       else{
           url_result.value = url.value.substring(index1+5,index2);
       }
     }

}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
mul.value = 1;
let startMinute = new Date().getMinutes();
function timeTest(){
     var count = 0;

    let f1 = setInterval(function(){
      mul.value *= 2;
      count ++;
      if(count === 10 || new Date().getMinutes() !== startMinute){
        clearInterval(f1);
      }
    },5000);
}
mul.oninput = timeTest();
//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
   let targetString, targetCount = 0 , tmp, strings = most.value.split("");
   for(let i = 0 ; i < strings.length; i++){
       tmp = 0;
       for(let j = 0; j < strings.length; j++){
         if(strings[i] === strings[j]){
             tmp++;
         }
       }
       if(tmp > targetCount){
         targetCount = tmp;
         targetString = strings[i];
       }
   }
   result.value = "The most character is:" + targetString +" times:" + targetCount;
}
