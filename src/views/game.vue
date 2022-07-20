<template>
<nav class=""> <ul class="inline-block">
      
      
        <a href="#aov">
          <li class="inline-block m-4 align-top">傳說對決</li>
        </a>
        <a href="#極速領域">
          <li class="inline-block m-4 align-top">極速領域</li>
        </a>
        <a href="#pubg">
          <li class="inline-block m-4 align-top">PUBG</li>
        </a>
        <a href="#other">
          <li class="inline-block m-4 align-top">其他</li>
        </a>
       
      </ul>
    </nav>
	<div class="section bg-no-repeat bg-cover aspect-video bg-scroll"  style="   background-image:url('https://raw.githubusercontent.com/RSMN574/profile/c25dbff8baeb5b348bae600cfc43022bb0e42aa9/RS%20GAMIMG.png')">
 

  
    </div>
	  
     
 
</template>
 <style scoped>
     
    </style>
    
    <script>
   
    export default {
    name:'game',
    data(){
return{
 
}
    },
mounted(){
		if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
    else{
     
    
    }
    }
    }
    </script>