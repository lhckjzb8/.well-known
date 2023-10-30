document.write(`
<style>
.minVideoViewBox::-webkit-scrollbar { width: 0 !important }
.minVideoViewBox{
    width:100%;padding-bottom:10px;
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
margin-right: 5px;
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
.jxzlyk a{color: #f00;}
</style>
<div id="tab-list">
<div class="minVideoViewBox" id="list">
<li class="active">极限资料<span class="gg">nb</span></li>
<li>天空特围<span class="gg">ok</span></li>
<li>六喜多多<span class="gg">ok</span></li>
<li>风云七肖<span class="gg">ok</span></li>
<li>岚山红风<span class="gg">ok</span></li>
</div>
<!-- 用来模拟滚动条区域开始 -->
  <footer>
    <!-- 模拟当前滚动的位置 -->
    <div class="thisDiv">
    </div>
  </footer>
<!-- 用来模拟滚动条区域结束 -->
<!--留用p><label>120-126期 </label>04,11,18,25,32,39,46<span> (今年错1)</span></p--><!--7期一轮,下轮（127-133）01到07循环,下轮05+7-->

<!--留用p><label>121-120期 </label>42,43,44,45,46<span> (18年至今11轮,无错,本轮第12轮)</span></p--><!--定位平六29,上上期特左右2个,10期内开,1期第11期开-->
<!--留用p><label>121-125期 </label>02,03,04,05,06,07,08,09,10,42,43,44,45,46<span> (18年至今11轮,无错,本轮第12轮)</span></p--><!--定位平六29,本期加上2期特左右2个,5期内开,1期第6期开（这1轮出现开重复号）-->

<!-- 极限资料 -->
<ul class="show">
<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限① <font>待开</font></div><br>
03,05,43,45 <span>(有10轮5期内开,2轮第7期开)</span><br>
<span> (今年至今12轮,无错,本轮第13轮) </span><div class="gdkj">还有<font>8期</font></div>
</div><!--定位平六与上上期特开同肖,上特和上上特左右两个号,总已过13轮,今年第一次十一期开,(上半年1次11期,2次7期,其他10次在5期内)-->

<div class="jxzl jxzlyk"><label>117期-120期：</label><div class="gdjx">机会极限② <font>已开</font></div><br>
<a>鼠</a><div class="gdkj">等待机会</div><br>
<span> (22年至今总7轮,无错,等待机会) </span><div class="gdkj">❤ 119期开鼠</div>
</div><!--定位平六01的特肖四期内开2022换肖来至今无错,+色肖五期21年至今无错-->

<div class="jxzl jxzlyk"><label>119期-122期：</label><div class="gdjx">机会极限③ <font>已开</font></div><br>
狗<a>龙</a><div class="gdkj">等待机会</div><br>
<span> (20年1轮,21年3轮,22年1轮,23年2轮,无错) </span><div class="gdkj">❤ 121期开龙</font></div>
</div><!--定位平六49的平一+对冲,四期内开-->

<div class="jxzl"><label>122期-126期：</label><div class="gdjx">机会极限④ <font>待开</font></div><br>
马龙 <span> (有6轮第一期开)</span><div class="gdkj">今年第2次机会</div><br>
<span> (18年至今11轮,无错,本轮第12轮) </span><div class="gdkj">还有<font>5期</font></div>
</div><!--定位平六29,下期特和减2两只,5期内开（出现第1期6次,第4期3次,第5期2次）-->

<div class="jxzl"><label>122期-123期：</label><div class="gdjx">机会极限⑤ <font>待开</font></div><br>
4尾,9尾+3尾,5尾 <span> (连续9轮开前2尾)</span><div class="gdkj">今年第5次机会</div><br>
<span> (18年至今16轮,无错,本轮第17轮) </span><div class="gdkj">还有<font>2期</font></div>
</div><!--定位平五49,下期特尾左右1尾和加5一尾,2期内开（有1轮拖1期开）-->

<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限⑥ <font>待开</font></div><br>
特5尾<div class="gdkj">今年第3次机会</div><br>
<span> (22年8轮,23年第3轮,无错) </span><div class="gdkj">还有<font>8期</font></div>
</div><!--定位平六08的平一尾+特尾,十期内开-->

<div class="jxzl"><label>119期-122期：</label><div class="gdjx">固定极限① <font>待开</font></div><br>
01,03,05,<font>08</font>,<font>12</font>,19,25,36,40,（9个）<br>
<span>二中二36组，三中三84组 (119期开2个)</span><div class="gdkj">还有<font>1期</font></div>
</div>

<div class="jxzl"><label>119期-128期：</label><div class="gdjx">固定极限② <font>待开</font></div><br>
特6尾<br>
<span> (22年至今错1)</span><div class="gdkj">还有<font>7期</font></div>
</div><!--m不凡,藐视是3尾期特尾-->

<div class="jxzl"><label>121期-125期：</label><div class="gdjx">固定极限③ <font>待开</font></div><br>
羊牛鼠马 + 虎猴<br>
<span>(两年错1，加肖三年无错) </span><div class="gdkj">还有<font>4期</font></div>
</div><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->

<div class="jxzl"><label>121期-125期：</label><div class="gdjx">固定极限④ <font>待开</font></div><br>
8尾,9尾,0尾<br>
<span> (22年至今错2，加1期无错) </span><div class="gdkj">还有<font>4期</font></div>
</div><!--0,5尾期D6左右1尾（拖1期无错）-->

<div class="jxzl jxzlyk"><label>119期-123期：</label><div class="gdjx">固定极限⑤ <font>已开</font></div><br>
虎<a>猴</a>猪蛇<br>
<span> (21,22年各错1,今年无错)</span><div class="gdkj">❤ 120期开猴</font></div>
</div><!--平开01,当期特色肖5期之内开,特开01不要-->

<div class="jxzl"><label>122期-131期：</label><div class="gdjx">固定极限⑥ <font>已开</font></div><br>
鼠狗<br>
<span> (17年至今错5) </span><div class="gdkj">还有<font>10期</font></div>
</div><!--壹路发发-->

<div class="jxzl"><label>122期-131期：</label><div class="gdjx">固定极限⑦ <font>待开</font></div><br>
07,08,09,10,11,12,13,14,15,29,30,31,32,33,34,35,36,37,<br>
<span> (21年至今无错) </span><div class="gdkj">还有<font>10期</font></div>
</div><!--(1尾期)D1,5,左右各4个,总18码--> 

<div class="jxzl jxzlyk"><label>121期-125期：</label><div class="gdjx">固定极限⑧ <font>已开</font></div><br>
蛇<a>龙</a>兔猪狗鸡<br>
<span> (三年无错) </span><div class="gdkj">❤ 121期开龙</font></div>
</div><!--0,5尾期L平2加2,3,4三年来最久5期-->

</ul>
<!-- 天空特围 -->
<ul class="hidden">
<p><label>122期：</label>
01,02,05,06,08,10,13,15,17,20,22,23,25,26,28,29,30,31,32,33,37,38,39,42,43,45,46,48,（28个）</p>
<p><label>121期：</label>
01,02,03,05,08,09,10,11,13,17,18,22,<span>24</span>,26,28,29,31,33,35,36,38,40,42,43,44,45,46,（27个）</p>
<p><label>120期：</label>
01,03,04,07,<span>08</span>,09,11,13,17,18,20,21,23,24,25,27,28,31,33,35,36,40,41,43,44,46,48,49,（28个）</p>
<p><label>119期：</label>
01,02,03,<span>04</span>,05,07,09,11,12,13,15,16,19,22,26,28,30,31,32,34,35,36,38,39,40,42,44,（27个）</p>
<p><label>118期：</label>
02,03,04,05,06,09,12,14,23,24,25,26,31,32,34,36,39,41,43,<span>44</span>,46,49,（22个）</p>
<p><label>117期：</label>
01,03,05,11,12,13,14,15,20,23,24,25,28,29,30,<span>31</span>,33,36,39,40,44,45,47,49,（24个）</p>
<p><label>116期：</label>
01,02,03,04,05,09,10,12,14,15,16,21,23,27,29,31,35,37,38,<span>40</span>,43,46,48,（23个）</p>
<p><label>115期：</label>
01,<span>03</span>,06,08,10,11,12,13,16,17,18,21,23,27,29,32,33,34,35,37,38,39,41,47,48,（25个）</p>
<p><label>114期：</label>
01,02,03,04,07,10,11,12,13,16,21,22,23,26,27,29,<span>30</span>,31,32,33,37,41,42,43,44,46,47,（27个）</p>
<p><label>113期：</label>
01,02,05,08,09,10,15,18,20,21,<span>26</span>,27,28,29,33,34,36,38,40,41,42,43,47,48,49,（25个）</p>
</ul>
<!-- 六喜多多 -->
<ul class="hidden">
<p>
<label>【122期】</label><br>
虎,兔,马,羊,猴,鸡,猪,牛,鼠,（9个）<br>
03,04,05,06,08,09,10,12,15,16,17,19,21,23,24,26,28,30,31,32,34,35,36,37,38,39,41,42,43,45,46,47,48,（33个）<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
03,04,05,08,09,10,15,16,17,19,21,26,28,31,32,34,37,38,39,41,43,45,46,（23个）
</p>
<p>
<label>【121期】</label><br>
鼠,虎,兔,<span>龙</span>,蛇,马,羊,狗,猪,（9个）❤<br>
02,05,07,08,09,13,15,16,17,18,19,20,22,<span>24</span>,25,27,29,30,31,32,35,36,37,38,40,42,43,45,48,49,（30个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
02,05,09,13,16,17,18,22,<span>24</span>,25,29,30,35,36,37,38,40,42,45,48,49,（21个）❤
</p>
<p>
<label>【120期】</label><br>
牛,虎,兔,龙,马,羊,<span>猴</span>,狗,猪,（9个）❤<br>
02,04,05,06,07,<span>08</span>,09,10,11,12,13,14,16,17,18,21,23,24,25,26,27,28,30,33,35,37,38,39,40,41,42,43,45,47,（34个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
02,05,06,<span>08</span>,09,10,12,13,14,17,18,21,24,25,26,27,30,33,37,38,39,41,42,45,（24个）❤️
</p>
<p>
<label>【119期】</label><br>
<span>鼠</span>,牛,虎,龙,马,羊,鸡,狗,（8个）❤<br>
01,02,03,<span>04</span>,05,07,08,09,10,12,13,14,16,17,18,19,20,21,23,24,25,26,28,31,32,33,34,35,37,38,39,40,41,42,43,45,46,48,（38个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
02,03,<span>04</span>,07,09,10,12,14,16,18,19,21,24,26,28,31,33,34,38,39,40,42,43,45,46,48,（26个）❤️
</p>
<p>
<label>【118期】</label><br>
鼠,牛,虎,马,<span>猴</span>,鸡,狗,猪,（8个）❤<br>
01,02,03,04,07,08,09,10,11,12,13,14,15,17,18,19,20,21,23,25,26,28,29,30,31,32,34,35,36,38,39,40,42,43,<span>44</span>,45,46,47,（38个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
02,03,04,07,08,10,14,15,17,18,19,20,26,28,29,30,31,32,34,38,39,40,42,43,<span>44</span>,46,（26个）❤️
</p>
<p>
<label>【117期】</label><br>
鼠,兔,龙,蛇,羊,猴,<span>鸡</span>,猪,（8个）❤<br>
01,03,05,11,12,13,14,15,16,17,19,20,21,23,25,26,27,<span>31</span>,32,33,34,36,37,38,39,40,41,43,44,45,46,47,48,49,（34个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
01,05,11,12,13,16,17,19,20,21,23,25,<span>31</span>,32,33,36,37,40,41,43,44,45,47,48,49,（25个）❤️
</p>
<p>
<label>【116期】</label><br>
<span>鼠</span>,虎,兔,蛇,马,猴,鸡,狗,猪,（9个）❤<br>
01,02,03,05,08,09,10,11,12,13,14,15,16,17,19,20,21,24,25,26,27,28,29,30,32,33,34,35,36,37,<span>40</span>,41,42,43,45,46,47,48,49,（39个）❤<br>
<span style="color:#A51888">【二合一综合结果】</span><br>
01,02,05,08,10,11,13,14,16,17,19,20,25,26,28,29,30,32,34,35,37,<span>40</span>,41,42,43,46,47,49,（28个）❤️
</p>
</ul>
<!-- 风云七肖 -->
<ul class="hidden">
<p><label>122期：</label>兔鸡羊马+虎鼠狗</p>
<p><label>121期：</label>狗马鼠虎+<span>龙</span>羊兔</p>
<p><label>120期：</label>兔猪羊虎+狗马蛇 x</p>
<p><label>119期：</label>羊狗鸡牛+<span>鼠</span>马蛇</p>
<p><label>118期：</label>兔马<span>猴</span>鸡+狗蛇猪</p>
<p><label>117期：</label>龙<span>鸡</span>狗猪+蛇羊猴</p>
</ul>
<!-- 岚山红风 -->
<ul class="hidden">
<p><label>122期：</label>
01,03,04,05,11,15,16,22,23,24,25,26,27,28,29,31,32,33,35,37,38,39,41,43,44,47,（26个）</p>
<p><label>121期：</label>
01,06,07,08,09,11,13,17,18,22,<span>24</span>,25,27,29,31,32,33,35,36,37,38,41,42,43,44,48,49,（27个）</p>
<p><label>120期：</label>
03,05,06,07,<span>08</span>,11,12,14,17,20,22,23,24,26,30,31,33,34,36,38,41,42,43,44,46,47,（26个）</p>
<p><label>119期：</label>
01,<span>04</span>,05,06,07,12,13,16,17,18,19,22,24,25,27,28,33,34,35,36,39,40,41,42,43,48,49,（27个）</p>
<p><label>118期：</label>
02,06,08,10,14,15,20,23,25,26,27,29,30,32,35,36,38,39,40,41,42,<span>44</span>,45,46,47,（25个）</p>
<p><label>117期：</label>
01,03,05,07,09,10,11,13,14,15,16,17,18,19,20,21,22,23,25,29,<span>31</span>,34,35,41,42,47,（26个）</p>
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
var w = window.screen.availWidth-36;
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
