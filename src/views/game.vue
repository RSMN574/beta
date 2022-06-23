<template>
<div id="fullpage">
	<div class="section"><div class="background--custom">
      <canvas id="canvas" />
      <div><h1>電玩專區</h1></div>
    </div></div>
	<div class="section"><img src="https://book.vue.tw/assets/img/1-7-lifecycle-1.3fc0cf06.png"></div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
     
 
</template>
 <style scoped>
      .background--custom {
        background-color: #FFFFFF;
        width: 100vw;
        height: 100vh;
        position: absolute;
        overflow: hidden;
        z-index: -2;
        top: 0;
        left: 0;
      }
      canvas#canvas {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 60%;
        transform: rotate(20deg) scale(2) translateY(0%);
        --gradient-color-1: #ef008f; 
        --gradient-color-2: #6ec3f4; 
        --gradient-color-3: #7038ff;  
        --gradient-color-4: #ffba27;
        --gradient-speed: 0.000006;
      }
    </style>
    
    <script>
   
    export default {
    name:'game',
    data(){
return{
   gradient:null
}
    },
mounted(){
		if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
    else{
      this.gradient = new Gradient();
      this.gradient.initGradient("#canvas");
      new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});
    }
    }
    }
    </script>