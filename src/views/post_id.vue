<template>
<div class="bg-[#f9f6fd] h-full" ><Navigator  ></Navigator>

	<main class="text-center  bg-[#f5f8fc] w-full h-full">
	<h1 class="text-2xl ">{{post.title}}</h1>
	</main>
	</div>
</template>

<script>
import Navigator from '@/components/nav.vue'

import sanity from '../client'
import { CreateURL, TextToHTML } from '../utils'
export default {
components:{
	Navigator
},data(){
	return{ 
		id:this.$route.params.id,
		post:{}
	}
},
mounted(){
	const query = '*[_type == "post" && _id == $id][0] { ..., author-> }'
			const params = { id: this.id }
			
			sanity.fetch(query, params).then(data => {
			this.post= data
			console.log(this.post)
			})
}

	
}
</script>