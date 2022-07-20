<template>
<div class="bg-[#f9f6fd] h-screen  overflow-y-scroll" ><Navigator class=""></Navigator>

	<div class="my-12 text-center w-full mt-20 bg-[#f5f8fc]  self-center  mx-auto shadow-lg border border-slate-300  rounded-xl sm:w-3/5">
	<div class="  mx-auto ">
	<h1 class="  mx-auto  text-2xl ">{{post.title}}</h1>
	</div>

	<br>
	<div class="overflow-x-clip text-left p-8" id="block">
  <SanityBlocks :blocks="blocks"  :serializers="serializers"/>
	</div>
	
	</div>

	</div>
</template>

<script>
import Navigator from '@/components/nav.vue'
import { SanityBlocks } from 'sanity-blocks-vue-component';
import sanity from '../client'


export default {
 
components:{
	Navigator,SanityBlocks
},data(){
	return{ 
		id:this.$route.params.id,
		post:{ },
		 blocks : [ ],
	serializers:{
		types: {
   image: (value)=> <img src={"https://cdn.sanity.io/images/42dlbyyj/production/"+value.asset._ref.substring(6,value.asset._ref.length-4)+".png"} />
	

   
  
   
  },
	}
		
 
  
	}
},
mounted(){
	const query = '*[_type == "post" || _type == "home" && _id == $id][0] { ..., author-> }'
			const params = { id: this.id }
			
			sanity.fetch(query, params).then(data => {
			this.post= data
			this.blocks= data.body
			console.log(	this.blocks)
			})
		


},methods:{
	
}

	
}
</script>