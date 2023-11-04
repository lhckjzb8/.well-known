document.write(`
<style>
.minVideoViewBox::-webkit-scrollbar { width: 0 !important }
.minVideoViewBox{
    width:100%;padding-bottom:7px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space:nowrap;
-ms-overflow-style: none;
overflow: -moz-scrollbars-none;
}
footer {
      //width: 100px;
      height: 2px;
      //background-color: rgb(255, 250, 250,0.5);
      margin: 0px auto;
      border-radius: 0px;
      background-color: #FFC0CB;
    }
footer>div {
      width: 10px;
      height: 2px;
      background-color: #7B68EE;
      border-radius: 5px;
    }
#tab-list{
padding:10px 0;
margin: 0;
text-decoration: none;
list-style-type: none;
width:100%;word-break: break-all;
}
.show{
margin: 0;
display: block;
padding:0;
text-align: left;
}
.show p,.hidden p{
margin: 0;
display: block;
padding:5px 2px;
margin-top:5px;
text-align: left;
line-height:20px;
}
.hidden{
padding:10px 0 0 0;
margin:0;
display: none;
text-align: left;
}
.show font,.hidden font,.show span,.hidden span{color: #f00;}
.show label,.hidden label{color: #7B68EE;}
.jxzl span{color: #BC8F8F;font-size: 13px;}
#list li{
//width:50px;
display: inline-block;
border-radius: 5px;
border: 0.5px solid #ccc;
font-size: 13px;
text-align: center;
padding:3px 3px 3px 6px;
margin-right: 3px;
}
#list .g{
font-size: 8px;
color: #8B008B;
margin-top: 10px;
margin-left: 3px;
}
#list .gg{
font-size: 8px;
color: #7B68EE;
margin-top: 10px;
margin-left: 3px;
}
.active{
background-color: #FFFAF0;
color: #f00;
}
.jxzl{
border-radius: 8px;
border: 0.1px solid rgba(0,0,0,0.15);
background-color: rgb(255, 192, 203, 0.15);
//font-size: 13px;
text-align: left;
padding:5px 8px;
margin-top:10px;
line-height:25px;
}
.jxzl .gdjx{
float: right;font-size: 12px;color:#ccc;
}
.jxzl .gdkj{
float: right;font-size: 12px;color:#ccc;
}
.jxzlyk{
background-color: rgb(0, 0, 0, 0.03);
}
.jxzlyk font{color: #ccc;}
.jxzlyk a,.jxzl a{color: #f00;}
</style>
<div id="tab-list">
<div class="minVideoViewBox" id="list">
<li class="active">极限资料<span class="gg">nb</span></li>
</div>
<!-- 用来模拟滚动条区域开始 -->
  <footer>
    <!-- 模拟当前滚动的位置 -->
    <div class="thisDiv">
    </div>
  </footer>
<!-- 用来模拟滚动条区域结束 -->
<!--留用p><label>121-130期 </label>42,43,44,45,46<span> (18年至今11轮,无错,本轮第12轮)</span></p--><!--定位平六29,上上期特左右2个,10期内开,1期第11期开-->

<!-- 极限资料 -->
<ul class="show">
<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限① <font>待开</font></div><br>
03,05,43,45 <span>(本轮第13轮)</span><div class="gdkj">还有<font>5期</font></div><br>
<label>124期-133期：</label><br>
02,25,27,49 <span>(本轮第14轮)</span><div class="gdkj">还有<font>9期</font></div><br>
<span> (今年至今12轮,无错,有10轮5期内开,2轮第7期开) </span>
</div><!--定位平六与上上期特开同肖,上特和上上特左右两个号,总已过13轮,今年第一次十一期开,(上半年1次11期,2次7期,其他10次在5期内)-->

<div class="jxzl jxzlyk"><label>117期-120期：</label><div class="gdjx">机会极限② <font>已开</font></div><br>
<a>鼠</a><div class="gdkj">等待机会</div><br>
<span> (22年至今总7轮,无错,等待机会) </span><div class="gdkj">❤ 119期开鼠</div>
</div><!--定位平六01的特肖四期内开2022换肖来至今无错,+色肖五期21年至今无错-->

<div class="jxzl"><label>123期-126期：</label><div class="gdjx">机会极限③ <font>待开</font></div><br>
猪蛇<div class="gdkj">今年第3次机会</div><br>
<span> (20年1轮,21年3轮,22年1轮,23年第3轮,无错) </span><div class="gdkj">还有<font>2期</font></div>
</div><!--定位平六49的平一+对冲,四期内开,上轮119-122期狗龙121开龙-->

<div class="jxzl jxzlyk"><label>122期-126期：</label><div class="gdjx">机会极限④ <font>待开</font></div><br>
<a>马</a>龙 <span> (有6轮第一期开)</span><div class="gdkj">等待机会</div><br>
<span> (18年至今11轮,无错,本轮第12轮) </span><div class="gdkj">❤ 124期开马</div>
</div><!--定位平六29,下期特和减2两只,5期内开（出现第1期6次,第4期3次,第5期2次）-->

<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限⑤ <font>待开</font></div><br>
特5尾<div class="gdkj">今年第3次机会</div><br>
<span> (22年8轮,23年第3轮,无错) </span><div class="gdkj">还有<font>5期</font></div>
</div><!--定位平六08的平一尾+特尾,十期内开-->

<div class="jxzl jxzlyk"><label>121-125期 </label><div class="gdjx">机会极限⑥ <font>待开</font></div><br>
02,03,04,05,06,07,08,<br>09,10,42,43,44,45,<a>46</a>,<br>
<span> (18年至今11轮,无错,本轮第12轮)</span><div class="gdkj">❤ 124期开46</div>
</div><!--定位平六29,本期加上2期特左右2个,5期内开,1期第6期开（这1轮出现开重复号）-->

<div class="jxzl jxzlyk"><label>119期-128期：</label><div class="gdjx">固定极限① <font>待开</font></div><br>
<a>特6尾</a><br>
<span> (22年至今错1)</span><div class="gdkj">❤ 124期开46</div>
</div><!--m不凡,藐视是3尾期特尾-->

<div class="jxzl jxzlyk"><label>121期-125期：</label><div class="gdjx">固定极限② <font>待开</font></div><br>
羊牛鼠<a>马</a> + <a>虎</a>猴<br>
<span>(两年错1，加肖三年无错) </span><div class="gdkj">❤ 124期开马</font></div>
</div><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->

<div class="jxzl"><label>121期-125期：</label><div class="gdjx">固定极限③ <font>待开</font></div><br>
8尾,9尾,0尾<br>
<span> (22年至今错2，加1期无错) </span><div class="gdkj">还有<font>1期</font></div>
</div><!--0,5尾期D6左右1尾（拖1期无错）-->

<div class="jxzl jxzlyk"><label>119期-123期：</label><div class="gdjx">固定极限④ <font>已开</font></div><br>
虎<a>猴</a>猪蛇<br>
<span> (21,22年各错1,今年无错)</span><div class="gdkj">❤ 120期开猴</font></div>
</div><!--平开01,当期特色肖5期之内开,特开01不要-->

<div class="jxzl"><label>122期-131期：</label><div class="gdjx">固定极限⑤ <font>待开</font></div><br>
鼠狗<br>
<span> (17年至今错5) </span><div class="gdkj">还有<font>7期</font></div>
</div><!--壹路发发-->

<div class="jxzl"><label>122期-131期：</label><div class="gdjx">固定极限⑥ <font>待开</font></div><br>
07,08,09,10,11,12,13,14,15,29,30,31,32,33,34,35,36,37,<br>
<span> (21年至今无错) </span><div class="gdkj">还有<font>7期</font></div>
</div><!--(1尾期)D1,5,左右各4个,总18码--> 

<div class="jxzl jxzlyk"><label>121期-125期：</label><div class="gdjx">固定极限⑦ <font>已开</font></div><br>
蛇<a>龙</a>兔猪狗鸡<br>
<span> (三年无错) </span><div class="gdkj">❤ 121期开龙</font></div>
</div><!--0,5尾期L平2加2,3,4三年来最久5期-->

</ul>
</div>

<div id="show" style="display: none;"></div>

`);

 window.onload=function(){
  var tab=document.getElementById('tab-list');
  var list=document.getElementById('list').getElementsByTagName('li');
  var div=tab.getElementsByTagName('ul');
  var timer=null;
  var index=0;
  for(var i=0;i<list.length;i++){
   list[i].num=i;
   list[i].onmouseover=function(){
    Change(this.num);
   }
  }
  function Change(curIndex){
   for(var i=0;i<list.length;i++){
    list[i].className="";
    div[i].className="hidden";
       var g=document.body.scrollHeight;
window.parent.postMessage({msgjx: g}, "*");
   }
   list[curIndex].className="active";
   div[curIndex].className="show";
 var g=document.body.scrollHeight;
window.parent.postMessage({msgjx: g}, "*");
   index=curIndex;
  }
 }
    // 模拟滚动条
    // 获取滚动元素的父元素
    let mainBox = document.querySelector('#list')
var w = window.screen.availWidth-31;
    let scollAllWidth = w;//document.querySelector('footer').offsetWidth
    let scollWidth = document.querySelector('footer>div').offsetWidth

    let thisScolljd = scollAllWidth - scollWidth  // 代表模拟滚动条的滚动大小

    // 给元素添加scoll事件，方便获取滚动的具体数据
    mainBox.addEventListener('scroll', (e) => {
      // console.log(e)
      const { target } = e
      // console.log(target.offsetWidth);  // 可视的宽度
      // console.log(target.scrollLeft);  // 当前滚动的宽度
      // console.log(target.scrollWidth); // 滚动区域总宽度
      // console.log(target.scrollWidth - target.offsetWidth);  // 总滚动的长度
      let thisJd = target.scrollLeft / (target.scrollWidth - target.offsetWidth+1)   // 当前滚动的距离 / 代表滚动的总距离
document.querySelector('.thisDiv').style.marginLeft = `${thisScolljd* thisJd}px`  // 根据上放计算进度，改变下方模拟的位置
      // console.log((thisJd * 100).toFixed(2), '%');  // 当前滚动的百分比
    });

//复制
function copyToClipboard(text,Y) {
  const bgColor = '#ff00ff';

  const textarea = document.createElement('textarea');
  textarea.value =text;
  textarea.style.background = bgColor;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // 显示成功提示
  const successMessage = document.createElement('div');
var YY=Y+"px";
  successMessage.textContent = '复制成功!';
  successMessage.style.position = 'fixed';
successMessage.style.zIndex = '999';
  successMessage.style.top = YY;
  successMessage.style.right = '35%';
  successMessage.style.background = bgColor;
  successMessage.style.color = '#fff';
  successMessage.style.padding = '8px';
  document.body.appendChild(successMessage);

  // 3 秒后隐藏提示
  setTimeout(() => {
    successMessage.remove();
    show.innerHTML="";//复制成功,清除容器内容
  }, 500);
}


var showq = document.querySelectorAll("p");
for(i=0;i<showq.length;i++){
showq[i].index=i;
showq[i].ondblclick=function() {
var show=document.getElementById('show');
show.innerHTML = showq[this.index].innerHTML;
var Y=showq[this.index].offsetTop;
var text = show.innerText.replace(/(\n[\s\t]*\r*\n)/g,'\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g,'');
copyToClipboard(text,Y);
}
}
var showjx = document.querySelectorAll(".jxzl");
for(i=0;i<showjx.length;i++){
showjx[i].index=i;
showjx[i].ondblclick=function() {
var show=document.getElementById('show');
show.innerHTML = showjx[this.index].innerHTML;
var div = show.getElementsByTagName("div");
    for (var i = 0; i <= div.length - 1; i++) {
      div[i].innerHTML="";
    }
var Y=showjx[this.index].offsetTop;
var text = show.innerText.replace(/(\n[\s\t]*\r*\n)/g,'\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g,'');
copyToClipboard(text,Y);
}
}
//复制结束
var  glistli = document.querySelectorAll("#list li");
var  gglist = document.getElementById("list");
var ggdiv=document.querySelector('.thisDiv');
for (var y=0;y<glistli.length;y++) {    //根据tab-list下的li标签长度循环
glistli[y].index=y;
glistli[y].onclick=function() {
ggdiv.style.marginLeft =glistli[this.index].offsetLeft*0.25+"px";
gglist.scrollLeft=glistli[this.index].offsetLeft*0.25;
if(glistli[this.index].offsetLeft<gglist.offsetWidth*0.3){
ggdiv.style.marginLeft ="";
gglist.scrollLeft="";
}
if(glistli[this.index].offsetLeft>gglist.offsetWidth*0.9){
ggdiv.style.marginLeft =glistli[this.index].offsetLeft+"px";;
gglist.scrollLeft=glistli[this.index].offsetLeft;
}
}}
