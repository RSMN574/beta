<template>
<div class="bg-[#f9f6fd] h-full  overflow-y-scroll" ><Navigator class=""></Navigator>

	<div class="my-12 text-center w-full mt-20 bg-[#f5f8fc]  self-center  mx-auto shadow-lg border border-slate-300  rounded-xl sm:w-3/5">
	<div class="  mx-auto ">
	<h1 class="  mx-auto  text-2xl ">{{post.title}}</h1>
	</div>

	<br>
	<div>
  <SanityBlocks :blocks="blocks"/>
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
		  blocksH:null,
		
 
  
	}
},
mounted(){
	const query = '*[_type == "post" && _id == $id][0] { ..., author-> }'
			const params = { id: this.id }
			
			sanity.fetch(query, params).then(data => {
			this.post= data
			this.blocks= data.body
			})
		


},methods:{
	
}

	
}
</script>