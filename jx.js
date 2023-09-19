function jxhtml(){
jxzl.innerHTML='<div class="jx">\</div>';
//刷新
document.writeln("<div class=\'refresh\' onclick=\'javascript:location.reload();\'>刷新</div>");
document.writeln("<style>");
document.writeln(".refresh {");
document.writeln("    width: 40px;");
document.writeln("    height: 40px;");
document.writeln("    line-height: 40px;");
document.writeln("    text-align: center;");
document.writeln("    color: #fff;");
document.writeln("    font-size: 14px;");
document.writeln("    border-radius: 40px;");
document.writeln("    box-sizing: unset;");
document.writeln("    border: solid 4px rgba(255,255,255,.8);");
document.writeln("    background: rgba(255,0,0,8);");
document.writeln("    position: fixed;");
document.writeln("    right: 10px;");
document.writeln("    bottom: 20px;");
document.writeln("    z-index: 1;");
document.writeln("    cursor: pointer;");
document.writeln("}");
document.writeln("</style>");
 }
