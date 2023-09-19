function jxhtml(){
jxzl.innerHTML='<div class="jx">\</div>';
//刷新
var newDiv = document.createElement("div");// 设置div的属性，例如id、class、style等
newDiv.setAttribute("id", "mysx");
document.body.appendChild(newDiv);  
mysx.innerHTML = "<div style='width: 40px;height: 40px;line-height: 40px;text-align: center;color: #fff;font-size: 14px;border-radius: 40px;box-sizing: unset;border: solid 4px rgba(255,255,255,.8);background: rgba(255,0,0,8);position: fixed;right: 10px;bottom: 20px;z-index: 1;cursor: pointer;' onclick='javascript:location.reload();'>刷新</div>"
 }
