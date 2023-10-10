document.write(`
<style>
.jx font{
color: #f00;
}
.gs{
float: left;
border-radius: 1px;
background-color: #BA55D3;
font-size: 13px;
color: #fff;
text-align: center;
padding:3px 6px;
}
.gszl{
float: left;
border-radius: 5px;
border: 0.5px solid #ccc;
background-color: #fff;
font-size: 13px;
color: #f00;
text-align: center;
padding:3px 3px 3px 6px;
}
.gszlx{
font-size: 8px;
color: #000;
margin-left: 3px;
}
.gszlx .g{
z-index:1;position: absolute;
font-size: 7px;
color: #8B008B;
margin-top: -2px;
margin-left: 0.5px;
}
.right{
margin-right: 5px;
}
.qrcode {
padding:5px 10px;font-size:15px;word-break: break-all;overflow-y: scroll;height:auto;
}
.qrcode p{
line-height:18px;
}
p span{
color: #f00;
}
.boardyz p{
line-height:23px;
}
.mask{
position:fixed;top:0;left:0;z-index:998;width:100%;height:100%;background-color:#000;opacity:0.5;overflow:hidden;
}
.board,.boardtd,.boardss,.boardyz{
position:fixed;border-radius:12px;background-color:#fff;top:50px;left:1%;width:98%;z-index:999;
}
.logo span{
display:block;color:#000;font-size:16px;font-weight:700;text-align:center;padding:8px;margin: 0 auto;border-bottom: 2px solid #FFC0CB;
}
.heart{
z-index:1;position: absolute;margin: 8px;
right:0;
}
.heart span{
text-align:center;background:#ED171F;display:block;width:40px;margin:0 auto;font-size:14px;color:#fff;font-weight:700;border-radius:5px;border:1px solid red;
letter-spacing:2px;
}
body{
font-family: Helvetica, Arial, sans-serif;
}
</style>
<div style="width: 100%;display: inline-block;padding:10px 0;border-bottom: 2px solid #FFC0CB;">
<div style="width: 100%;float: left;">
<div style="float: left;width: 29%;">
<div class="gs">高手资料</div>
<div style="text-align: center;">➡︎</div>
</div>
<div style="float: right;width: 71%;">
<div class="gszl right" id="awrh">爱我如何<span class="gszlx"><span class="g">no</span>港</span></div>
<div class="gszl right" id="tdlx">土豆六肖<span class="gszlx"><span class="g">no</span>港</span></div>
<div class="gszl" id="ssnl">世事难料<span class="gszlx"><span class="g">no</span>港</span></div>
</div></div>
<div style="width: 100%;float: left;padding:5px 0 0 0;">
<div style="float: right;width: 71%;">
<div class="gszl right" id="yzjx">英子九肖<span class="gszlx"><span class="g">no</span>港</span></div>
<div></div>
<div></div>
</div>
</div>
</div>
  <!-- 底部透明灰色层 -->
<div class='mask' style="display:none;"></div>
<!-- 爱我如何 -->
<div class='board' style="display:none;">
    <div class="heart"><span id="alertSure">关闭</span></div>
    <div class="logo"><span>爱我如何</span></div>
    <div class='qrcode'>
<!--p>123期：龙,</p-->
<p>114期：兔+02,16,26,40,14,12,34,07,31,08,<span>30</span>,</p>
<p>113期：兔+34,22,12,24,07,40,30,35,21,</p>
<p>112期：24,38,22,04,16,12,02,36,34,40,46,07,</p>
<p>111期：龙+13,02,01,34,46,14,<span>29</span>,28,20,</p>
<p>110期：龙+02,<span>01</span>,07,</p>
<p>109期：龙+<span>46</span>,08,49,01,13,35,</p>
<p>108期：兔+02,14,38,<span>12</span>,10,46,48,</p>
<p>107期：虎+49,<span>37</span>,36,41,</p>
<p>106期：狗+38,24,45,36,16,43,13,25,44,<span>46</span>,</p>
<p>105期：龙+34,03,01,13,33,10,22,46,</p>
<p>104期：虎+25,03,15,04,07,01,13,</p>
<p>103期：兔+24,06,08,10,<span>14</span>,16,28,</p>
<p>102期：<span>马</span>+24,13,33,</p>
<p>101期：<span>龙</span>+16,29,34,</p>
<p>100期：虎+48,42,10,22,32,13,23,46,08,</p>
<p>099期：兔+34,40,48,</p>
<p>098期：兔+11,18,43,24,32,23,10,</p>
<p>097期：<span>鼠</span>+39,36,33,19,49,</p></div>
</div>
<!-- 土豆六肖 -->
<div class='boardtd' style="display:none;">
    <div class="heart"><span id="alertSuretd">关闭</span></div>
    <div class="logo"><span>土豆六肖</span></div>
    <div class='qrcode'>
<p>114期:兔龙马鸡<span>狗</span>猪</p>
<p>113期:<span>虎</span>兔马羊狗猪</p>
<p>112期:虎蛇<span>羊</span>猴鸡狗</p>
<p>111期:鼠牛虎兔猴鸡</p>
<p>110期:虎<span>免</span>龙羊猴狗</p>
<p>109期:虎兔蛇<span>马</span>羊狗</p>
<p>108期:<span>龙</span>蛇马羊猴狗</p>
<p>107期:鼠牛<span>兔</span>马羊猪</p>
<p>106期:兔<span>马</span>羊猴鸡猪</p>
<p>105期:虎<span>蛇</span>羊猴狗猪</p>
<p>104期:兔龙马羊鸡狗</p>
<p>103期:鼠<span>虎</span>羊马猴狗</p>
<p>102期:鼠龙<span>马</span>羊鸡狗</p>
</div>
</div>
<!-- 世事难料 -->
<div class='boardss' style="display:none;">
    <div class="heart"><span id="alertSuress">关闭</span></div>
    <div class="logo"><span>世事难料</span></div>
    <div class='qrcode'>
<p>114期：02,07,05,06,32,09,17,08,20,04,03,01,21,43,18,19,22,10,38,（主前）</p>
<p>113期：20,22,21,05,17,43,27,49,06,<span>26</span>,28,32,09,10,04,30,24,18,48,33,（主前）</p>
<p>112期：20,18,05,17,43,06,07,32,28,41,22,<span>45</span>,49,23,31,09,21,（主前）</p>
<p>111期：21,33,43,23,25,27,<span>29</span>,05,41,45,47,49,48,32,22,（主前）</p>
</div>
</div>
<!-- 英子九肖 -->
<div class='boardyz' style="display:none;">
    <div class="heart"><span id="alertSureyz">关闭</span></div>
    <div class="logo"><span>英子九肖</span></div>
    <div class='qrcode'>
<p>
114期：牛虎兔龙蛇马羊猴<span>狗</span><br>
113期：鼠牛蛇马羊猴鸡狗猪 开26虎错5<br>
112期：鼠牛虎兔马<span>羊</span>猴狗猪 开45羊准<br>
111期：鼠牛虎兔龙马猴狗<span>猪</span> 开29猪准<br>
110期：鼠牛虎<span>兔</span>蛇马猴狗猪 开01兔准<br>
109期：鼠牛虎龙<span>马</span>羊鸡狗猪 开46马准<br>
108期：牛兔<span>龙</span>蛇马羊猴狗猪 开12龙准<br>
107期：鼠虎<span>兔</span>龙马羊猴狗猪 开37兔准<br>
106期：牛虎龙蛇<span>马</span>羊猴狗猪 开46马准<br>
105期：鼠牛虎<span>蛇</span>马羊猴鸡猪 开35蛇准<br>
104期：鼠牛龙<span>蛇</span>马羊猴鸡猪 开11蛇准<br>
103期：鼠牛<span>虎</span>兔龙马羊狗猪 开14虎准<br>
102期：鼠虎兔龙<span>马</span>羊猴鸡猪 开34马准<br>
101期：鼠牛<span>龙</span>蛇马猴鸡狗猪 开36龙准<br>
100期：鼠牛虎<span>龙</span>蛇羊猴鸡狗 开12龙准<br>
099期：<span>鼠</span>兔龙蛇马羊猴鸡猪 开28鼠准<br>
098期：鼠牛虎<span>龙</span>蛇马羊鸡猪 开12龙准<br>
097期：<span>鼠</span>牛虎兔龙马羊猴狗 开04鼠准<br>
096期：<span>牛</span>虎龙蛇马羊猴鸡狗 开03牛准<br>
095期：鼠虎龙蛇马<span>猴</span>鸡狗猪 开08猴准<br>
094期：牛虎兔龙马羊猴鸡猪 开16鼠错4<br>
093期：鼠牛虎龙蛇羊<span>猴</span>鸡猪 开44猴准<br>
092期：鼠牛龙马羊猴鸡<span>狗</span>猪 开42狗准<br>
091期：鼠牛兔龙蛇马羊猴<span>猪</span> 开41猪准<br>
090期：<span>鼠</span>牛虎龙蛇羊猴狗猪 开16鼠准<br>
089期：鼠虎兔<span>龙</span>蛇马猴鸡猪 开12龙准<br>
088期：牛兔蛇马羊猴鸡狗<span>猪</span> 开29猪准<br>
087期：<span>鼠</span>牛虎蛇马羊猴鸡猪 开40鼠准<br>
086期：牛虎兔龙蛇马<span>羊</span>鸡狗 开21羊准<br>
085期：牛虎兔龙马羊猴狗猪 开11蛇错3<br>
084期：鼠牛<span>虎</span>龙蛇羊猴狗猪 开14虎准<br>
083期：<span>牛</span>虎兔蛇马羊猴狗猪 开39牛准<br>
082期：牛虎兔龙马猴鸡狗猪 开09羊错2<br>
081期：牛兔龙<span>蛇</span>马羊猴鸡猪 开47蛇准<br>
080期：牛兔龙蛇马羊猴<span>狗</span>猪 开42狗准<br>
079期：鼠<span>牛</span>虎兔龙蛇马狗猪 开03牛准<br>
078期：鼠牛兔龙蛇马<span>羊</span>鸡狗 开33羊准<br>
077期：鼠牛虎<span>兔</span>蛇羊猴鸡猪 开13兔准<br>
076期：鼠<span>牛</span>虎龙马羊猴狗猪 开27牛准<br>
075期：牛兔龙蛇马羊鸡鼠虎 开18狗错1<br>
074期：鼠牛虎兔<span>龙</span>蛇羊鸡猪 开36龙准</p>
</div>
</div>
<style>
.minVideoViewBox{
    width:100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space:nowrap;
    &::-webkit-scrollbar{// 滚动条整体
        background:none;
    }
    &::-webkit-scrollbar-thumb{//滑块
        background: rgba(71, 145, 242,.5);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track{//轨道

    }
    &::-webkit-scrollbar-button{//两端按钮

    }
    &::-webkit-scrollbar-track-piece{//滚动条中间部分
    }
}
#tab-list{
padding-top:10px;
margin: 0;
text-decoration: none;
list-style-type: none;
width:100%;word-break: break-all;
}
.show{
margin-top: 5px;
display: block;
padding:5px 0 10px 0;
text-align: left;
 }
.hidden{
margin-top: 5px;
display: none;
padding:5px 0 10px 0;
text-align: left;
 }
.show label,.hidden label{color: #A15888;}
.show span,.hidden span{color: #A58888;font-size: 13px;}
#list li{
display: inline-block;
border-radius: 5px;
border: 0.5px solid #ccc;
font-size: 13px;
text-align: center;
padding:3px 10px;
margin-right: 10px;
}
.active{
background-color: #FFFAF0;
color: #f00;
}
</style>
<div id="tab-list">
<div class="minVideoViewBox" id="list">
<li class="active">115期</li>
<li>114期</li>
<li>更 多</li>
</div>
<ul class="show"><!--备用p><label>111-115期 </label>鼠猪狗马蛇龙<span> (三年无错)</span></p--><!--0,5尾期平2加2,3,4三年来最久5期-->
  <p><label>114-115期 </label>羊马蛇龙兔虎牛<span> (今年错3)</span> + 猪<span> (今年无错)</span></p><!--D走势 本轮平4，下轮116-117期平3-->
  <p><label>114-118期 </label>05,07,15,25,29,35</p>
  <p><label>114-118期特尾 </label>4尾<span> (22年至今错1)</span></p>
  <p><label>114-120期 </label>08,16,29,32,39,40,43<span> (今年错1)</span></p>
  <p><label>113-116期 </label>08,09,10,27,35,38,46<span> (今年错1)</span></p>
  <p><label>113-119期 </label>03,10,17,24,31,38,45<span> (今年错1)</span></p>
  <p><label>112-115期</label> 08,16,17,21,27,32,34,39<span> (3中3)56组</span></p>
  <p><label>111-115期 </label>兔鸡鼠马<span> (今年无错，21年,22年各错1)</span></p>
  <!--留用p><label>111-120期 </label>32,33,34,35,36,37,38<span> (今年错2)</span></p--><!--0尾期L3左右3(错061-070)-->
  <!--留用p><label>111-120期 </label>龙兔虎<span> (今年错1)</span></p--><!--0尾期L2减1.2-->
  <p><label>109-116期 </label>11,22,33,44<span> (主22)</span></p>
  <p><label>107-116期 </label>21,33,27,39<span> (至少1次)</span></p>
  <p><label>111-120期开码表 </label>03,10,12,15,18,20,27,<font>30</font>,32,35,39,44,46,（13码）<span> (至少开2期，114期30)</span></p>
</ul>

<ul class="hidden" style="width: 100%;padding-top:5px;">
  <p><label>114-115期 </label>羊马蛇龙兔虎牛<span> (今年错3)</span> + 猪<span> (今年无错)</span></p><!--D走势 本轮平4，下轮116-117期平3-->
  <p><label>114-115期 </label>鸡兔猪蛇<font>狗</font>龙<span> (今年错2，114期狗)</span></p>
  <p><label>114-118期 </label>牛羊<font>狗</font>龙<span> (今年无错，114期狗)</span></p><!--L3色肖五期一轮-->
  <p><label>114-118期 </label>05,07,15,25,29,35</p>
  <p><label>114-118期特尾 </label>4尾<span> (22年至今错1)</span></p>
  <p><label>114-120期 </label>08,16,29,32,39,40,43<span> (今年错1)</span></p>
  <p><label>113-116期 </label>08,09,10,27,35,38,46<span> (今年错1)</span></p>
  <p><label>113-119期 </label>03,10,17,24,31,38,45<span> (今年错1)</span></p>
  <p><label>112-115期</label> 08,16,17,21,27,32,34,39<span> (3中3)56组</span></p>
  <p><label>111-115期 </label>兔鸡鼠马<span> (今年无错，21年,22年各错1)</span></p>
  <!--留用p><label>111-120期 </label>32,33,34,35,36,37,38<span> (今年错2)</span></p--><!--0尾期L3左右3(错061-070)-->
  <!--留用p><label>111-120期 </label>龙兔虎<span> (今年错1)</span></p--><!--0尾期L2减1.2-->
  <p><label>109-116期 </label>11,22,33,44<span> (主22)</span></p>
  <p><label>107-116期 </label>21,33,27,39<span> (至少1次)</span></p>
  <p><label>111-120期开码表 </label>03,10,12,15,18,20,27,<font>30</font>,32,35,39,44,46,（13码）<span> (至少开2期，114期30)</span></p>
</ul>


  <ul class="hidden" style="width: 100%;padding-top:5px;">
  <p><label>112-113期 </label>兔<font>虎</font>牛鼠猪狗鸡<span> (今年错3，113期虎)</span> + 羊<span> (今年无错)</span></p>
  <p><label>109-113期 </label>15,20,25,39,<font>45</font>,48<span> (今年无错，112期45)</span></p>
  <p><label>111-115期 </label>虎牛猴<font>羊</font><span> (两年错1)</span> + 兔鸡<span> (三年无错，112期羊)</span></p><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->
  <p><label>107-111期特尾 </label>8尾,<font>9尾</font><span> (今年错1，111期29)</span></p>
  <p><label>110-111期 </label><font>兔</font>虎鼠猪鸡猴<span> (今年无错，110期兔)</span></p>
  <p><label>101-110期开码表 </label>02,03,04,<font>12</font>,13,15,18,20,39,40,44,<font>46</font>,（12码）<span> (至少开2期，106期46，108期12，109期46)</span></p>
  <p><label>109-113期 </label>43,44,45,<font>46</font>,47,48<span> (今年无错，109期46)</span></p>
  <p><label>109-111期 </label>蛇鸡<font>马</font>鼠<span> (今年错1，109期马)</span></p>
  <p><label>108-109期 </label>02,22,<font>12</font>,24,20,32,05,29,25,49<span> (108期12)</span></p>
  <p><label>106-108期 </label>牛羊<font>龙</font>狗<span> (今年错1，108期龙)</span></p>
  <p><label>103-107期 </label><font>兔</font>蛇鸡羊<span> (今年错1，107期兔)</span></p>
  <p><label>106-112期 </label>02,09,16,23,30,<font>37</font>,44<span> (今年错1，107期37)</span></p>
  <p><label>105-108期 </label><font>01</font>,<font>10</font>,18,<font>22</font>,26,<font>28</font>,31<span> (2中2)21组,107期01,10,22,28,😘</span></p>
  <p><label>103-107期 </label>41,42,43,44,45,<font>46</font><span> (106期46)</span></p>
  <p><label>105-106期 </label>鸡羊<font>蛇</font>兔猪牛<span> (今年无错，105期蛇)</span></p>
  <p><label>105-109期 </label>15,16,17,18,19,<font>35</font>,37 <span>(105期35)</span></p>
  <p><label>103-107期 </label>兔<font>蛇</font>鸡羊 <span>(今年无错，104期蛇)</span></p>
  <p><label>103-105期 </label>鼠马龙狗鸡<font>蛇</font><span> (今年错1，104期蛇)</span></p>
  <p><label>103-111期 </label><font>11</font>,22,33,44<span> (今年错1，104期11)</span></p>
  </ul>
</div>

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
   }
   list[curIndex].className="active";
   div[curIndex].className="show";
   index=curIndex;
  }
 }


$("#awrh").click(function() {
$('.mask').css('display','');
$('.board').css('display','');
});
$("#tdlx").click(function() {
$('.mask').css('display','');
$('.boardtd').css('display','');
});
$("#ssnl").click(function() {
$('.mask').css('display','');
$('.boardss').css('display','');
});
$("#yzjx").click(function() {
$('.mask').css('display','');
$('.boardyz').css('display','');
});

$("#alertSure").click(function() {
$('.mask').css('display','none');
$('.board').css('display','none');
});
$("#alertSuretd").click(function() {
$('.mask').css('display','none');
$('.boardtd').css('display','none');
});
$("#alertSuress").click(function() {
$('.mask').css('display','none');
$('.boardss').css('display','none');
});
$("#alertSureyz").click(function() {
$('.mask').css('display','none');
$('.boardyz').css('display','none');
});


//var g=$(window).height()*0.7;
var g=document.body.scrollHeight*0.7;
$('.qrcode').css('max-height',g);

