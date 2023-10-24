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
<li>英子九肖<span class="gg">ok</span></li>
<li>土豆六肖<span class="gg">ok</span></li>
<li>天空特围<span class="gg">ok</span></li>
</div>
<!-- 用来模拟滚动条区域开始 -->
  <footer>
    <!-- 模拟当前滚动的位置 -->
    <div class="thisDiv">
    </div>
  </footer>
<!-- 用来模拟滚动条区域结束 -->
<!--留用p><label>120-126期 </label>04,11,18,25,32,39,46<span> (今年错1)</span></p--><!--7期一轮,下轮（127-133）01到07循环,下轮05+7-->
<!-- 极限资料 -->
<ul class="show">
<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限① <font>待开</font></div><br>
03,05,43,45 <span>(有10轮5期内开,2轮第7期开)</span><br>
<span> (今年至今12轮,无错,本轮第13轮) </span><div class="gdkj">还有<font>9期</font></div>
</div><!--定位平六与上上期特开同肖,上特和上上特左右两个号,总已过13轮,今年第一次十一期开,(上半年1次11期,2次7期,其他10次在5期内)-->

<div class="jxzl jxzlyk"><label>117期-120期：</label><div class="gdjx">机会极限② <font>已开</font></div><br>
<a>鼠</a><div class="gdkj">一年只有几次机会</div><br>
<span> (22年至今总7轮,无错,等待机会) </span><div class="gdkj">❤ 119期开鼠</div>
</div><!--定位平六01的特肖四期内开2022换肖来至今无错,+色肖五期21年至今无错-->

<div class="jxzl"><label>119期-122期：</label><div class="gdjx">机会极限③ <font>待开</font></div><br>
狗龙<div class="gdkj">一年只有几次机会</div><br>
<span> (20年1轮,21年3轮,22年1轮,23年第2轮,无错) </span><div class="gdkj">还有<font>2期</font></div>
</div><!--定位平六49的平一+对冲,四期内开-->

<div class="jxzl"><label>120期-129期：</label><div class="gdjx">机会极限④ <font>待开</font></div><br>
特5尾<div class="gdkj">一年只有几次机会</div><br>
<span> (22年8轮,23年第3轮,无错) </span><div class="gdkj">还有<font>9期</font></div>
</div><!--定位平六08的平一尾+特尾,十期内开-->

<div class="jxzl"><label>119期-122期：</label><div class="gdjx">固定极限① <font>待开</font></div><br>
01,03,05,<font>08</font>,<font>12</font>,19,25,36,40,（9个）<br>
<span>二中二36组，三中三84组 (119期开2个)</span><div class="gdkj">还有<font>2期</font></div>
</div>

<div class="jxzl"><label>119期-128期：</label><div class="gdjx">固定极限② <font>待开</font></div><br>
特6尾<br>
<span> (22年至今错1)</span><div class="gdkj">还有<font>8期</font></div>
</div><!--m不凡,藐视是3尾期特尾-->

<div class="jxzl jxzlyk"><label>121期-125期：</label><div class="gdjx">固定极限③ <font>待开</font></div><br>
羊牛鼠马 + 虎猴<br>
<span>(两年错1，加肖三年无错) </span><div class="gdkj">还有<font>5期</font></div>
</div><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->

<div class="jxzl jxzlyk"><label>121期-125期：</label><div class="gdjx">固定极限④ <font>待开</font></div><br>
8尾,9尾,0尾<br>
<span> (22年至今错2，加1期无错) </span><div class="gdkj">还有<font>5期</font></div>
</div><!--0,5尾期D6左右1尾（拖1期无错）-->

<div class="jxzl jxzlyk"><label>119期-123期：</label><div class="gdjx">固定极限⑤ <font>已开</font></div><br>
虎<a>猴</a>猪蛇<br>
<span> (21,22年各错1,今年无错)</span><div class="gdkj">❤ 120期开猴</font></div>
</div><!--平开01,当期特色肖5期之内开,特开01不要-->

<div class="jxzl jxzlyk"><label>117期-121期：</label><div class="gdjx">固定极限⑥ <font>已开</font></div><br>
<a>猴</a>马<br>
<span> (17年至今错5) </span><div class="gdkj">❤ 118期开猴</div>
</div><!--壹路发发-->

<div class="jxzl jxzlyk"><label>112期-121期：</label><div class="gdjx">固定极限⑦ <font>已开</font></div><br>
04,05,06,07,08,09,10,11,12,36,37,38,39,<a>40</a>,41,42,43,44<br>
<span> (21年至今无错) </span><div class="gdkj">❤ 116期开40</div>
</div><!--(1尾期)D1,5,左右各4个,总18码--> 

<div class="jxzl"><label>121期-125期：</label><div class="gdjx">固定极限⑧ <font>待开</font></div><br>
蛇龙兔猪狗鸡<br>
<span> (三年无错) </span><div class="gdkj">还有<font>5期</font></div>
</div><!--0,5尾期L平2加2,3,4三年来最久5期-->

</ul>
<!-- 英子九肖 -->
<ul class="hidden"><div style="padding:5px 0 0 0;">
<p><label>120期：</label>鼠牛虎兔蛇马羊狗猪 x6</p>
<p><label>119期：</label><span>鼠</span>虎龙蛇马羊猴鸡猪</p>
<p><label>118期：</label>鼠牛虎兔龙马羊鸡猪 x5</p>
<p><label>117期：</label>鼠牛虎兔马羊<span>鸡</span>狗猪</p>
<p><label>116期：</label><span>鼠</span>牛虎兔龙蛇马羊狗</p>
<p><label>115期：</label><span>牛</span>虎兔龙蛇马羊猴猪</p>
<p><label>114期：</label>牛虎兔龙蛇马羊猴<span>狗</span></p>
<p><label>113期：</label>鼠牛蛇马羊猴鸡狗猪 x5</p>
<p><label>112期：</label>鼠牛虎兔马<span>羊</span>猴狗猪</p>
<p><label>111期：</label>鼠牛虎兔龙马猴狗<span>猪</span></p>
<p><label>110期：</label>鼠牛虎<span>兔</span>蛇马猴狗猪</p>
<p><label>109期：</label>鼠牛虎龙<span>马</span>羊鸡狗猪</p>
<p><label>108期：</label>牛兔<span>龙</span>蛇马羊猴狗猪</p>
<p><label>107期：</label>鼠虎<span>兔</span>龙马羊猴狗猪</p>
<p><label>106期：</label>牛虎龙蛇<span>马</span>羊猴狗猪</p>
<p><label>105期：</label>鼠牛虎<span>蛇</span>马羊猴鸡猪</p>
<p><label>104期：</label>鼠牛龙<span>蛇</span>马羊猴鸡猪</p>
<p><label>103期：</label>鼠牛<span>虎</span>兔龙马羊狗猪</p>
<p><label>102期：</label>鼠虎兔龙<span>马</span>羊猴鸡猪</p>
<p><label>101期：</label>鼠牛<span>龙</span>蛇马猴鸡狗猪</p>
<p><label>100期：</label>鼠牛虎<span>龙</span>蛇羊猴鸡狗</p>
<p><label>099期：</label><span>鼠</span>兔龙蛇马羊猴鸡猪</p>
<p><label>098期：</label>鼠牛虎<span>龙</span>蛇马羊鸡猪</p>
<p><label>097期：</label><span>鼠</span>牛虎兔龙马羊猴狗</p>
<p><label>096期：</label><span>牛</span>虎龙蛇马羊猴鸡狗</p>
<p><label>095期：</label>鼠虎龙蛇马<span>猴</span>鸡狗猪</p>
<p><label>094期：</label>牛虎兔龙马羊猴鸡猪 x4</p>
<p><label>093期：</label>鼠牛虎龙蛇羊<span>猴</span>鸡猪</p>
<p><label>092期：</label>鼠牛龙马羊猴鸡<span>狗</span>猪</p>
<p><label>091期：</label>鼠牛兔龙蛇马羊猴<span>猪</span></p>
<p><label>090期：</label><span>鼠</span>牛虎龙蛇羊猴狗猪</p>
<p><label>089期：</label>鼠虎兔<span>龙</span>蛇马猴鸡猪</p>
<p><label>088期：</label>牛兔蛇马羊猴鸡狗<span>猪</span></p>
<p><label>087期：</label><span>鼠</span>牛虎蛇马羊猴鸡猪</p>
<p><label>086期：</label>牛虎兔龙蛇马<span>羊</span>鸡狗</p>
<p><label>085期：</label>牛虎兔龙马羊猴狗猪 x3</p>
<p><label>084期：</label>鼠牛<span>虎</span>龙蛇羊猴狗猪</p>
<p><label>083期：</label><span>牛</span>虎兔蛇马羊猴狗猪</p>
<p><label>082期：</label>牛虎兔龙马猴鸡狗猪 x2</p>
<p><label>081期：</label>牛兔龙<span>蛇</span>马羊猴鸡猪</p>
<p><label>080期：</label>牛兔龙蛇马羊猴<span>狗</span>猪</p>
<p><label>079期：</label>鼠<span>牛</span>虎兔龙蛇马狗猪</p>
<p><label>078期：</label>鼠牛兔龙蛇马<span>羊</span>鸡狗</p>
<p><label>077期：</label>鼠牛虎<span>兔</span>蛇羊猴鸡猪</p>
<p><label>076期：</label>鼠<span>牛</span>虎龙马羊猴狗猪</p>
<p><label>075期：</label>牛兔龙蛇马羊鸡鼠虎 x1</p>
<p><label>074期：</label>鼠牛虎兔<span>龙</span>蛇羊鸡猪</p>
</div></ul>
<!-- 土豆六肖 -->
<ul class="hidden"><div style="padding:5px 0 0 0;">
<p><label>120期：</label>狗牛虎兔龙羊 x</p>
<p><label>119期：</label><span>鼠</span>马羊牛龙鸡</p>
<p><label>118期：</label>牛虎蛇马狗猪 x</p>
<p><label>117期：</label>鼠蛇羊<span>鸡</span>狗猪</p>
<p><label>116期：</label><span>鼠</span>虎蛇马猴狗</p>
<p><label>115期：</label>虎蛇马羊狗猪 x</p>
<p><label>114期：</label>兔龙马鸡<span>狗</span>猪</p>
<p><label>113期：</label><span>虎</span>兔马羊狗猪</p>
<p><label>112期：</label>虎蛇<span>羊</span>猴鸡狗</p>
<p><label>111期：</label>鼠牛虎兔猴鸡 x</p>
<p><label>110期：</label>虎<span>免</span>龙羊猴狗</p>
<p><label>109期：</label>虎兔蛇<span>马</span>羊狗</p>
<p><label>108期：</label><span>龙</span>蛇马羊猴狗</p>
<p><label>107期：</label>鼠牛<span>兔</span>马羊猪</p>
<p><label>106期：</label>兔<span>马</span>羊猴鸡猪</p>
<p><label>105期：</label>虎<span>蛇</span>羊猴狗猪</p>
<p><label>104期：</label>兔龙马羊鸡狗 x</p>
<p><label>103期：</label>鼠<span>虎</span>羊马猴狗</p>
<p><label>102期：</label>鼠龙<span>马</span>羊鸡狗</p>
</div></ul>
<!-- 天空特围 -->
<ul class="hidden"><div style="padding:5px 0 0 0;">
<p><label>120期：</label>01,03,04,07,<span>08</span>,09,11,13,17,18,20,21,23,24,25,27,28,31,33,35,36,40,41,43,44,46,48,49,（28个）</p>
<p><label>119期：</label>01,02,03,<span>04</span>,05,07,09,11,12,13,15,16,19,22,26,28,30,31,32,34,35,36,38,39,40,42,44,（27个）</p>
<p><label>118期：</label>02,03,04,05,06,09,12,14,23,24,25,26,31,32,34,36,39,41,43,<span>44</span>,46,49,（22个）</p>
<p><label>117期：</label>01,03,05,11,12,13,14,15,20,23,24,25,28,29,30,<span>31</span>,33,36,39,40,44,45,47,49,（24个）</p>
<p><label>116期：</label>01,02,03,04,05,09,10,12,14,15,16,21,23,27,29,31,35,37,38,<span>40</span>,43,46,48,（23个）</p>
<p><label>115期：</label>01,<span>03</span>,06,08,10,11,12,13,16,17,18,21,23,27,29,32,33,34,35,37,38,39,41,47,48,（25个）</p>
<p><label>114期：</label>01,02,03,04,07,10,11,12,13,16,21,22,23,26,27,29,<span>30</span>,31,32,33,37,41,42,43,44,46,47,（27个）</p>
<p><label>113期：</label>01,02,05,08,09,10,15,18,20,21,<span>26</span>,27,28,29,33,34,36,38,40,41,42,43,47,48,49,（25个）</p>
</div></ul>
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
