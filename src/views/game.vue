
<template>
<main class="bg-[#07182e] h-screen">


<nav class="bg-gray-800 italic text-xl text-[#abc4d1]"> <ul class=" ">
       <a href="#game" class=" inline-block float-left mk-12">
       <li class=" m-4  ">  <img class="w-12  " src="../assets/RS.png"></li>
</a>

        <a href="#aov" class=" inline-block">
          <li class=" m-4 align-top">傳說對決</li>
        </a>
        <a href="#極速領域" class=" inline-block">
          <li class=" m-4 align-top">極速領域</li>
        </a>
        <a href="#pubg" class=" inline-block">
          <li class=" m-4 align-top">PUBG</li>
        </a>
        <a href="#other" class=" inline-block">
          <li class=" m-4 align-top">其他</li>
        </a>
        <span class=" inline-block cursor-pointer" @click="drawer = true"> <li class=" m-4 align-top "><span class="material-symbols-outlined inline-block align-middle" >
account_circle
</span>
</li>
</span>
      </ul>
    </nav>
<div  class="mx-auto  mt-8 rounded-xl ">
  <el-carousel :interval="4000"  class=" rounded-xl h-full" >
    <el-carousel-item v-for="items in item" :key="items" class=" rounded-xl" >
    <iframe   class="mx-auto rounded-xl" width="560" height="315" :src="items+'&rel=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </el-carousel-item>
  </el-carousel>

  <el-drawer v-model="drawer" title="登入" :with-header="true">
  
   <el-input  v-model="loginEmail" type="email" placeholder="帳號" />
   
   <el-input  v-model="loginPassword" placeholder="密碼" type="password"
    class="mt-4 mb-8"
    show-password
/>

<div class="h-captcha" data-sitekey="956a9e08-c8fb-4ec5-9cc6-80b5eec26ba4"></div>
<el-button color="#626aef" class=" text-[#abc4d1] " :dark="isDark" plain>登入</el-button>
<el-button color="#626aef" class=" text-[#abc4d1] " :dark="isDark" plain @click="register=true">註冊</el-button>
 <el-drawer
        v-model="register"
        title="註冊"
        
        :with-header="true"
        
      >
         <el-input  v-model="registerEmail" type="email" placeholder="帳號" />
   
   <el-input  v-model="registerPassword" placeholder="密碼" type="password"
    class="mt-4 mb-8"
    show-password
/>


<el-button color="#626aef" class=" text-[#abc4d1] " :dark="isDark" plain >註冊</el-button>
      </el-drawer>

  </el-drawer>
</div>
	 </main> 

</template>
 <style scoped>

    .material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
*{
  font-family:"MS";
}
    </style>
    
    <script>

    export default {
    name:'game',
    data(){
return{
  item:["https://www.youtube.com/embed/PRDmAkG1WtY?controls=0&amp;start=71","https://www.youtube.com/embed/LDQo1YKXHsI?controls=0&amp;start=21"],
  drawer:false,
  loginEmail:"",
  loginPassword:"",
  register:false,
  registerEmail:"",
  registerPassword:""

 
}
    },
mounted(){
		if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
    else{
     
    
    }
    },methods:{
       login(){
        
       }
    }
    }
    </script>