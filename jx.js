document.write(`
<style>
.gs{
float: left;
border-radius: 1px;
border: 0.5px solid #BA55D3;
background-color: #BA55D3;
font-size: 13px;
color: #fff;
text-align: center;
padding:3px 8px;
}
.gs .zlx{
z-index:1;position: absolute;
font-size: 6px;
color: #000;
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
.boardtd,.boardyz,.boarday{
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
<div style="width: 100%;display: inline-block;padding-top:10px;">
<div style="width: 100%;float: left;">
<div style="float: left;width: 29%;">
<div class="gs" onClick="copyName('.show');">高手资料</div>
<div style="text-align: center;">➡︎</div>
</div>
<div style="float: right;width: 71%;">
<div class="gszl right" onClick="div_none('boardtd');">土豆六肖<span class="gszlx"><span class="g"></span>港</span></div>
<div class="gszl right" onClick="div_none('boardyz');">英子九肖<span class="gszlx"><span class="g">ok</span>港</span></div>
<div class="gszl" onClick="div_none('boarday');">阿远九肖<span class="gszlx"><span class="g">ok</span>港</span></div>
</div>
</div></div>
  <!-- 底部透明灰色层 -->
<div class='mask' id="mask" style="display:none;"></div>
<!-- 土豆六肖 -->
<div class='boardtd' style="display:none;">
    <div class="heart"><span onClick="div_none('boardtd');">关闭</span></div>
    <div class="logo"><span onClick="copyName('.boardtd');">土豆六肖</span></div>
    <div class='qrcode'>
<p>118期:</p>
<p>117期:鼠蛇羊<span>鸡</span>狗猪</p>
<p>116期:<span>鼠</span>虎蛇马猴狗</p>
<p>115期:虎蛇马羊狗猪 x</p>
<p>114期:兔龙马鸡<span>狗</span>猪</p>
<p>113期:<span>虎</span>兔马羊狗猪</p>
<p>112期:虎蛇<span>羊</span>猴鸡狗</p>
<p>111期:鼠牛虎兔猴鸡 x</p>
<p>110期:虎<span>免</span>龙羊猴狗</p>
<p>109期:虎兔蛇<span>马</span>羊狗</p>
<p>108期:<span>龙</span>蛇马羊猴狗</p>
<p>107期:鼠牛<span>兔</span>马羊猪</p>
<p>106期:兔<span>马</span>羊猴鸡猪</p>
<p>105期:虎<span>蛇</span>羊猴狗猪</p>
<p>104期:兔龙马羊鸡狗 x</p>
<p>103期:鼠<span>虎</span>羊马猴狗</p>
<p>102期:鼠龙<span>马</span>羊鸡狗</p>
</div>
</div>
<!-- 英子九肖 -->
<div class='boardyz' style="display:none;">
    <div class="heart"><span onClick="div_none('boardyz');">关闭</span></div>
    <div class="logo"><span onClick="copyName('.boardyz');">英子九肖</span></div>
    <div class='qrcode'>
<p>
118期：鼠牛虎兔龙马羊鸡猪<br>
117期：鼠牛虎兔马羊<span>鸡</span>狗猪 开31鸡准<br>
116期：<span>鼠</span>牛虎兔龙蛇马羊狗 开40鼠准<br>
115期：<span>牛</span>虎兔龙蛇马羊猴猪 开03牛准<br>
114期：牛虎兔龙蛇马羊猴<span>狗</span> 开30狗准<br>
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
<!-- 英子九肖 -->
<div class='boarday' style="display:none;">
    <div class="heart"><span onClick="div_none('boarday');">关闭</span></div>
    <div class="logo"><span onClick="copyName('.boarday');">阿远原创资料</span></div>
    <div class='qrcode'>
<p>118期生肖：鼠龙蛇兔+羊牛虎+马猴<br>
118期尾数：1尾,2尾,3尾,4尾,+0尾,5尾<br>
118期头数：0头,1头,2头,4头,</p>
<p>117期生肖：猴猪羊狗+鼠兔虎+<span>鸡</span>牛<br>
117期尾数：0尾,<span>1尾</span>,2尾,9尾,+8尾,7尾<br>
117期头数：0头,2头,<span>3头</span>,4头,</p>
<p>116期生肖：猴鸡猪蛇+<span>鼠</span>马狗+羊牛<br>
116期尾数：6尾,7尾,8尾,9尾,+5尾,<span>0尾</span><br>
116期头数：0头,1头,3头,<span>4头</span>,</p>
</div>
</div>

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
padding:3px 0 0 0;
text-align: left;
}
.hidden{
padding:3px 0 0 0;
margin:0;
display: none;
text-align: left;
}
.show font,.hidden font{color: #f00;}
.show label,.hidden label{color: #A15888;}
.show span,.hidden span{color: #A58888;font-size: 13px;}
#list li{
width:50px;
display: inline-block;
border-radius: 5px;
border: 0.5px solid #ccc;
font-size: 13px;
text-align: center;
padding:3px 0;
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
</style>
<div id="tab-list">
<div class="minVideoViewBox" id="list">
<li class="active">118期<span class="gg">?</span></li>
<li>117期<span class="gg">3</span></li>
<li>116期<span class="gg">4</span></li>
<li>115期<span class="gg">4</span></li>
<li>114期<span class="gg">3</span></li>
<li>113期<span class="g">1</span></li>
<li>112期<span class="g">2</span></li>
<li>111期<span class="g">1</span></li>
<li>110期<span class="g">1</span></li>
<li>109期<span class="g">3</span></li>
<li>108期<span class="g">3</span></li>
<li>107期<span class="g">2</span></li>
<li>106期<span class="g">2</span></li>
<li>105期<span class="g">2</span></li>
<li>104期<span class="g">3</span></li>
</div>
<!-- 用来模拟滚动条区域开始 -->
  <footer>
    <!-- 模拟当前滚动的位置 -->
    <div class="thisDiv">
    </div>
  </footer>
<!-- 用来模拟滚动条区域结束 -->

<ul class="show">
  <!--留用p><label>118-120期 </label>虎狗兔马鼠鸡<span> (连准多轮)</span></p--><!--（下轮122期-124期,）3,7,1,5,9尾期L4色肖+-4-->

  <!--留用><label>117-126期 </label>01,29,31,40,42,47,48<span> (今年错1)</span></p--><!--6尾期7号10期极限-->
  <!--留用p><label>117-120期 </label>12,13,14,23,24,34,21,31,41,32,42,43<span> (今年无错)</span></p--><!--每次6尾期到9尾期必开这些相同号-->
  <!--留用p><label>117-121期 </label>兔鼠马<font>鸡</font><span> (今年无错,21年,22年各错1，117期鸡)</span></p--><!--平开01,当期特色肖5期之内开,特开01不要-->
  <!--留用p><label>116-120期 </label>0尾,1尾,2尾<span> (22年至今错2)</span></p--><!--0,5尾期D6左右1尾（拖1期无错）-->
  <!--留用p><label>112-121期 </label>08,16,29,32,39,40,43<span> (今年错1)</span></p--><!--1尾期7号10期极限-->
  <!--留用p><label>111-120期 </label>01,06,08,11,26,35,47<span> (今年错1)</span></p--><!--0尾期7号10期极限-->
  <!--留用p><label>116-120期 </label>鼠猪马蛇<span> (两年错1)</span> + 牛羊<span> (三年无错)</span></p--><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->
  <!--留用p><label>120-126期 </label>04,11,18,25,32,39,46<span> (今年错1，115期03)</span></p--><!--7期一轮,下轮（127-133）01到07循环,下轮04+7-->
  <!--留用p><label>116-120期 </label>鼠猪狗马蛇龙<span> (三年无错)</span></p--><!--0,5尾期L平2加2,3,4三年来最久5期-->
  <!--留用p><label>118-120期 </label>猴羊马狗龙兔虎<span> (今年错1)</span></p--><!--（下轮120期）D6肖+2,3,4,6,7,8-->
  <!--留用p><label>118-120期 </label>龙虎牛鼠狗鸡猴<span> (今年错1)</span></p--><!--（下轮120期）L6肖+2,3,4,6,7,8-->
  <!--留用p><label>118-120期 </label>鼠猪狗虎猴蛇<span> (22年错1,23年错4)</span></p--><!--（1,3,5,7,9尾期）L3色肖+-1,防拖延1期(22年错1,23年错4拖1期错1)-->
  <!--留用p><label>111-120期 </label>龙兔虎<span> (今年错1)</span></p--><!--0尾期L2减1.2-->
  <!--留用p><label>112-121期 </label>04,05,06,07,08,09,10,11,12,36,37,38,39,40,41,42,43,44<span> (21年至今无错)</span></p--><!--(1尾期)D1,5,左右各4个,总18码-->
  <p><label>117-120期 </label>03,07,14,19,22,27,32<span> (二中二21组)</span></p>
  <p><label>118-119期 </label>猴羊鸡狗猪鼠牛<span> (今年错4)</span> + 蛇<span> (今年无错)</span></p><!--D走势 本轮平2，下轮119期平1-->
  <p><label>118-121期 </label>22,30,34,01,12,39,23<span> (今年错1)</span></p><!--7期一轮,下轮122-128取121期7个号-->
  <p><label>117-118期 </label>猪蛇狗龙马鼠<span> (今年错1)</span></p>
  <p><label>117-119期 </label>马龙虎猴<span> (今年错1)</span></p>
  <p><label>117-120期 </label>龙蛇马虎<span> (今年无错)</span></p><!--永恒赢家-->
  <p><label>117-121期 </label>猴马<span> (17年至今错5)</span></p--><!--壹路发发-->
  <p><label>117-121期 </label>牛羊狗龙<span> (21年,22年,23年各错1)</span></p--><!--（1,6期）D6色肖,5期一轮,防拖1期-->
  <p><label>117-118期 </label>虎猴猪蛇兔牛<span> (22年错1,23年错3)</span></p><!--（1,3,5,7,9尾期）D1色肖+-1,防拖延1期(22年错1,23年错3拖1期错1)-->
  <p><label>116-122期 </label>22,30,34,01,39,23,12<span> (今年无错)</span></p><!--(下轮121期)平特7码,7期一轮错1，拖1期无错-->
  <p><label>115-118期 </label>虎狗牛鼠鸡<span> (无错记录)</span></p>
  <p><label>115-120期 </label>32,33,34,35,36,37,38<span> (今年错2)</span></p><!--0尾期L3左右3(错061-070)-->
  <p><label>115-120期 </label>01,11,12,14,34,35,36,37,46</p>
  <p><label>114-118期 </label>05,07,15,25,29,35</p>
  <p><label>114-118期特尾 </label>4尾<span> (22年至今错1)</span></p><!--下轮116-125期6尾-->
  <p><label>111-120期开码表 </label><font>03</font>,10,12,15,18,20,27,<font>30</font>,32,35,39,44,46,（13码）<span> (至少开2期，114期30，115期03)</span></p>
  <p><p style="height: 2px;background-color: #FFC0CB;padding:0;"></p></p>
  <p style="font-size: 13px;">
【118期】15组211码统计结果：<br>
共1次：13,49,（2个）xxxxxxx<br>
共2次：09,19,21,25,31,43,45,（7个）xxxxxxx<br>
共3次：07,16,17,28,33,37,40,41,（8个）<br>
共4次：01,02,04,05,06,08,26,29,42,47,48,（11个）<br>
共5次：03,10,11,18,20,24,27,38,（8个）<br>
共6次：14,15,22,23,32,36,44,46,（8个）xxxxxxx<br>
共7次：30,39,（2个）xxxxxxx<br>
共8次：12,35,（2个）xxxxxxx<br>
共9次：34,（1个）xxxxxxx
</p>
</ul>

<ul class="hidden">
  <p><label>117-121期 </label>兔鼠马<font>鸡</font><span> (今年无错,21年,22年各错1，117期鸡)</span></p><!--平开01,当期特色肖5期之内开,特开01不要-->
  <p><label>117-120期 </label>12,13,14,23,24,34,21,<font>31</font>,41,32,42,43<span> (今年无错，117期31)</span></p><!--每次6尾期到9尾期必开这些相同号-->
  <p><label>117-126期 </label>01,29,<font>31</font>,40,42,47,48<span> (今年错1，117期31)</span></p><!--6尾期7号10期极限-->
  <p><p style="height: 2px;background-color: #FFC0CB;padding:0;"></p></p>
  <p style="font-size: 13px;">
【117期】18组233码统计结果：<br>
共1次：19,（1个）xxxxxxx<br>
共2次：07,09,17,43,45,（5个）xxxxxxx<br>
共3次：05,06,16,21,28,<font>31</font>,33,41,49,（9个）<br>
共4次：03,04,08,13,18,25,27,29,40,（9个）<br>
共5次：02,11,15,20,26,30,37,39,42,47,（10个）<br>
共6次：01,23,38,44,48,（5个）<br>
共7次：10,22,24,32,36,（5个）<br>
共8次：14,35,46,（3个）xxxxxxx<br>
共9次：12,（1个）xxxxxxx<br>
共11次：34,（1个）xxxxxxx
</p>
</ul>

<ul class="hidden">
  <p><label>116-120期 </label><font>0尾</font>,1尾,2尾<span> (22年至今错2)</span></p><!--0,5尾期D6左右1尾（拖1期无错）-->
  <p><label>116-117期 </label>猴羊马蛇龙兔虎<span> (今年错3)</span> + <font>鼠</font><span> (今年无错，116期鼠)</span></p><!--D走势 本轮平4，下轮117期平2-->
  <p><label>116-120期 </label><font>鼠</font>猪马蛇<span> (两年错1，116期鼠)</span> + 牛羊<span> (三年无错)</span></p><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->
  <p><label>115-117期 </label>兔<font>鼠</font>鸡马<span> (21年,22年,23年分别错1，116期鼠)</span></p><!--（1,6期）D6色肖,5期一轮,防拖1期-->
  <p><label>114-120期 </label>08,16,29,32,39,<font>40</font>,43<span> (今年错1，116期40)</span></p>
  <p style="text-decoration:line-through;color: #ccc"><label>109-116期 </label>11,22,33,44<span> (主22)</span></p>
  <p style="text-decoration:line-through;color: #ccc"><label>107-116期 </label>21,33,27,39<span> (至少1次)</span></p>
  <p><p style="height: 2px;background-color: #FFC0CB;padding:0;"></p></p>
  <p style="font-size: 13px;">
【116期】14组150码统计结果：<br>
共1次：06,09,17,19,45,48,（6个）xxxxxxx<br>
共2次：03,05,07,08,13,18,24,26,28,31,41,42,43,47,49,（15个）<br>
共3次：02,04,15,16,20,21,23,25,27,29,36,38,（12个）<br>
共4次：14,30,33,37,<font>40</font>,44,（6个）<br>
共5次：01,10,11,12,32,39,46,（7个）<br>
共6次：22,35,（2个）xxxxxxx<br>
共7次：34,（1个）xxxxxxx
</p>
</ul>

<ul class="hidden">
  <p><label>115-120期 </label><font>0头</font><span> (115期03)</span></p>
  <p><label>114-115期 </label>羊马蛇龙兔虎<font>牛</font><span> (今年错3，115期牛)</span> + 猪<span> (今年无错)</span></p><!--D走势 本轮平4，下轮115期平3-->
  <p><label>113-119期 </label><font>03</font>,10,17,24,31,38,45<span> (今年错1，115期03)</span></p>
  <p style="text-decoration:line-through;color: #ccc"><label>112-115期</label> 08,16,17,21,27,32,<font>34</font>,<font>39</font><span> (3中3)56组，114期34,39</span></p>
  <p style="text-decoration:line-through;color: #ccc"><label>111-115期 </label>兔鸡鼠马<span> (今年无错，21年,22年各错1)</span></p>
  <p><label>111-120期开码表 </label><font>03</font>,10,12,15,18,20,27,<font>30</font>,32,35,39,44,46,（13码）<span> (至少开2期，114期30，115期03)</span></p>
  <p><p style="height: 2px;background-color: #FFC0CB;padding:0;"></p></p>
  <p style="font-size: 13px;">
【115期】14组136码统计结果：<br>
共1次：19,20,23,28,41,42,47,48,（8个）xxxxxxx<br>
共2次：06,13,16,17,18,21,26,30,31,40,43,45,49,（13个）<br>
共3次：02,04,05,07,08,09,11,12,15,22,24,25,29,32,36,44,（16个）<br>
共4次：01,<font>03</font>,14,27,33,37,39,（7个）<br>
共5次：10,34,38,46,（4个）xxxxxxx<br>
共6次：35,（1个） xxxxxxx
</p>
</ul>

<ul class="hidden">
  <p><label>114-115期 </label>鸡兔猪蛇<font>狗</font>龙<span> (今年错2，114期狗)</span></p>
  <p><label>114-118期 </label>牛羊<font>狗</font>龙<span> (今年无错，114期狗)</span></p><!--L3色肖五期一轮-->
  <p><label>111-120期开码表 </label>03,10,12,15,18,20,27,<font>30</font>,32,35,39,44,46,（13码）<span> (至少开2期，114期30)</span></p>
  <p><label>112-115期</label> 08,16,17,21,27,32,<font>34</font>,<font>39</font><span> (3中3)56组，114期34,39</span></p>
  <p><p style="height: 2px;background-color: #FFC0CB;padding:0;"></p></p>
  <p style="font-size: 13px;">
【114期】总12组144码统计结果：<br>
共1次：02,20,26,28,（4个）xxxxxxx<br>
共2次：04,06,08,14,16,19,23,32,40,41,42,47,（12个）<br>
共3次：01,05,07,09,11,13,17,18,21,22,<font>30</font>,31,34,36,37,38,43,44,45,48,49,（21个）<br>
共4次：03,12,15,25,29,33,46,（7个）<br>
共5次：10,24,27,35,39,（5个）xxxxxxx<br>
</p>
</ul>

  <ul class="hidden">
  <p><label>112-113期 </label>兔<font>虎</font>牛鼠猪狗鸡<span> (今年错3，113期虎)</span> + 羊<span> (今年无错)</span></p>
</ul>

  <ul class="hidden">
  <p><label>109-113期 </label>15,20,25,39,<font>45</font>,48<span> (今年无错，112期45)</span></p>
  <p><label>111-115期 </label>虎牛猴<font>羊</font><span> (两年错1)</span> + 兔鸡<span> (三年无错，112期羊)</span></p><!--0,5尾期特加1,2两年错1（错在2023年10-15，多加0从2021年10期开始无错-->
</ul>

  <ul class="hidden">
  <p><label>107-111期特尾 </label>8尾,<font>9尾</font><span> (今年错1，111期29)</span></p>
</ul>

  <ul class="hidden">
  <p><label>110-111期 </label><font>兔</font>虎鼠猪鸡猴<span> (今年无错，110期兔)</span></p>
</ul>

  <ul class="hidden">
  <p><label>109-113期 </label>43,44,45,<font>46</font>,47,48<span> (今年无错，109期46)</span></p>
  <p><label>109-111期 </label>蛇鸡<font>马</font>鼠<span> (今年错1，109期马)</span></p>
  <p><label>101-110期开码表 </label>02,03,04,<font>12</font>,13,15,18,20,39,40,44,<font>46</font>,（12码）<span> (至少开2期，106期46，108期12，109期46)</span></p>
</ul>

  <ul class="hidden">
  <p><label>108-109期 </label>02,22,<font>12</font>,24,20,32,05,29,25,49<span> (108期12)</span></p>
  <p><label>106-108期 </label>牛羊<font>龙</font>狗<span> (今年错1，108期龙)</span></p>
  <p><label>101-110期开码表 </label>02,03,04,<font>12</font>,13,15,18,20,39,40,44,<font>46</font>,（12码）<span> (至少开2期，106期46，108期12)</span></p>
</ul>

  <ul class="hidden">
  <p><label>103-107期 </label><font>兔</font>蛇鸡羊<span> (今年错1，107期兔)</span></p>
  <p><label>106-112期 </label>02,09,16,23,30,<font>37</font>,44<span> (今年错1，107期37)</span></p>
  <p><label>105-108期 </label><font>01</font>,<font>10</font>,18,<font>22</font>,26,<font>28</font>,31<span> (2中2)21组,107期01,10,22,28,😘</span></p>
</ul>

  <ul class="hidden">
  <p><label>103-107期 </label>41,42,43,44,45,<font>46</font><span> (106期46)</span></p>
  <p><label>101-110期开码表 </label>02,03,04,<font>12</font>,13,15,18,20,39,40,44,<font>46</font>,（12码）<span> (至少开2期，106期46)</span></p>
</ul>

  <ul class="hidden">
  <p><label>105-106期 </label>鸡羊<font>蛇</font>兔猪牛<span> (今年无错，105期蛇)</span></p>
  <p><label>105-109期 </label>15,16,17,18,19,<font>35</font>,37 <span>(105期35)</span></p>
</ul>

  <ul class="hidden">
  <p><label>103-107期 </label>兔<font>蛇</font>鸡羊 <span>(今年无错，104期蛇)</span></p>
  <p><label>103-105期 </label>鼠马龙狗鸡<font>蛇</font><span> (今年错1，104期蛇)</span></p>
  <p><label>103-111期 </label><font>11</font>,22,33,44<span> (今年错1，104期11)</span></p>
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
   }
   list[curIndex].className="active";
   div[curIndex].className="show";
   index=curIndex;
  }
 }


function div_none(theclass){
var allPageTags = new Array();
var allPageTags = document.getElementsByTagName("div");
for (i=0; i<allPageTags.length;i++){
if(allPageTags[i].className == theclass){
var obj = allPageTags[i];
if(obj.style.display == "none"){
mask.style.display = "";
obj.style.display = "";
}else{
mask.style.display = "none";
obj.style.display = "none";
}
}
}
}

var gg=$(".show").height();
$('.hidden').css('min-height',gg);
var g=document.body.scrollHeight*0.8;
$('.qrcode').css('max-height',g);

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
function copyToClipboard(text) {
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
  successMessage.textContent = '复制成功!';
  successMessage.style.position = 'fixed';
successMessage.style.zIndex = '999';
  successMessage.style.top = '200px';
  successMessage.style.right = '35%';
  successMessage.style.background = bgColor;
  successMessage.style.color = '#fff';
  successMessage.style.padding = '8px';
  document.body.appendChild(successMessage);

  // 3 秒后隐藏提示
  setTimeout(() => {
    successMessage.remove();
    show.innerHTML="";//复制成功,清除容器内容
  }, 3000);
}

function copyName(fzid) {
var showq = document.querySelector(fzid);
var show=document.getElementById("show");
show.innerHTML = showq.innerHTML;
var label = show.getElementsByTagName("label");
    for (var i = 0; i <= label.length - 1; i++) {
      label[i].innerHTML="";
    }
var span = show.getElementsByTagName("span");
    for (var i = 0; i <= span.length - 1; i++) {
      span[i].innerHTML="";
    }
var text = show.innerText.replace(/(\n[\s\t]*\r*\n)/g,'\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g,'');
copyToClipboard(text);
}
//复制结束
