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
padding:3px 0 0 0;
text-align: left;
}
.show p,.hidden p{
margin: 0;
display: block;
padding:3px 0;
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
.show span,.hidden span{color: #f00;}
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
</style>
<div id="tab-list">
<div class="minVideoViewBox" id="list">
<li class="active">英子九肖<span class="gg">ok</span></li>
<li>土豆六肖<span class="gg"></span></li>
<li>天空特围<span class="gg">ok</span></li>
</div>
<!-- 用来模拟滚动条区域开始 -->
  <footer>
    <!-- 模拟当前滚动的位置 -->
    <div class="thisDiv">
    </div>
  </footer>
<!-- 用来模拟滚动条区域结束 -->
<!-- 英子九肖 -->
<ul class="show">
<p><label>120期：</label>鼠牛虎兔蛇马羊狗猪</p>
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
</ul>
<!-- 土豆六肖 -->
<ul class="hidden">
<p><label>119期：</label>鼠马羊牛龙鸡</p>
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
</ul>
<!-- 天空特围 -->
<ul class="hidden">
<p><label>120期：</label>01,03,04,07,08,09,11,13,17,18,20,21,23,24,25,27,28,31,33,35,36,40,41,43,44,46,48,49,（28个）</p>
<p><label>119期：</label>01,02,03,04,05,07,09,11,12,13,15,16,19,22,26,28,30,31,32,34,35,36,38,39,40,42,44,（27个）</p>
<p><label>118期：</label>02,03,04,05,06,09,12,14,23,24,25,26,31,32,34,36,39,41,43,<span>44</span>,46,49,（22个）</p>
<p><label>117期：</label>01,03,05,11,12,13,14,15,20,23,24,25,28,29,30,<span>31</span>,33,36,39,40,44,45,47,49,（24个）</p>
<p><label>116期：</label>01,02,03,04,05,09,10,12,14,15,16,21,23,27,29,31,35,37,38,<span>40</span>,43,46,48,（23个）</p>
<p><label>115期：</label>01,<span>03</span>,06,08,10,11,12,13,16,17,18,21,23,27,29,32,33,34,35,37,38,39,41,47,48,（25个）</p>
<p><label>114期：</label>01,02,03,04,07,10,11,12,13,16,21,22,23,26,27,29,<span>30</span>,31,32,33,37,41,42,43,44,46,47,（27个）</p>
<p><label>113期：</label>01,02,05,08,09,10,15,18,20,21,<span>26</span>,27,28,29,33,34,36,38,40,41,42,43,47,48,49,（25个）</p>
</ul>
</div>
`);
var gg=window.outerHeight;
$('.show').css('max-height',gg*0.8);
$('.hidden').css('max-height',gg*0.5);
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
