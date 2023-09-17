document.write(`
<style>
.div{text-align: center;padding: 3px 0;}
.v{color: #FFB6C1;font-size: 10px;}
.width{width: 100%;}
.left{float: left;}
</style>
<div class="div v width left">2023 © v1.1</div>

<style>
    .loading-mask {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loading-box{
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .loading-box img{
      width: 80px;
    }
    .loading-box span{
      font-size: 14px;
    }

    @keyframes ldio {
      0% { transform: translate(6px,40px) scale(0); }
      25% { transform: translate(6px,40px) scale(0); }
      50% { transform: translate(6px,40px) scale(1); }
      75% { transform: translate(40px,40px) scale(1); }
    100% { transform: translate(74px,40px) scale(1); }
    }
    @keyframes ldio-r {
      0% { transform: translate(74px,40px) scale(1); }
    100% { transform: translate(74px,40px) scale(0); }
    }
    @keyframes ldio-c {
      0% { background: #e15b64 }
      25% { background: #abbd81 }
      50% { background: #f8b26a }
      75% { background: #f47e60 }
    100% { background: #e15b64 }
    }
    .ldio div {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transform: translate(40px,40px) scale(1);
      background: #e15b64;
      animation: ldio 3.7037037037037033s infinite cubic-bezier(0,0.5,0.5,1);
    }
    .ldio div:nth-child(1) {
      background: #f47e60;
      transform: translate(74px,40px) scale(1);
      animation: ldio-r 0.9259259259259258s infinite cubic-bezier(0,0.5,0.5,1), ldio-c 3.7037037037037033s infinite step-start;
    }.ldio div:nth-child(2) {
      animation-delay: -0.9259259259259258s;
      background: #e15b64;
    }.ldio div:nth-child(3) {
      animation-delay: -1.8518518518518516s;
      background: #f47e60;
    }.ldio div:nth-child(4) {
      animation-delay: -2.7777777777777777s;
      background: #f8b26a;
    }.ldio div:nth-child(5) {
      animation-delay: -3.7037037037037033s;
      background: #abbd81;
    }
    .loadingio-spinner-ellipsis {
      width: 80px;
      height: 80px;
      display: inline-block;
      overflow: hidden;
      background: none;
    }
    .ldio {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(0.8);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio div { box-sizing: content-box; }</style><div class=loading-mask><div class=loading-box><div class=loadingio-spinner-ellipsis><div class=ldio><div></div><div></div><div></div><div></div><div></div></div></div><span>正在加载中...</span></div></div>
`);
$(document).ready(function () {
    setTimeout(function () {
      $("body>.index").css('visibility', 'visible')
      $("body>.loading-mask").hide()
    }, 1000)
  });
