 <template>
<div class=" relative  text-center shadow-lg border border-slate-300 bg-[#f5f8fc] rounded-xl p-4 flex flex-col sm:flex-row w-2/5 hover:scale-105 transition ease-in-out">

			<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ..."><img v-if="post.mainImage" :src="CreateURL(post.mainImage)" class="h-full w-full rounded-lg float-left"></div>
  <div class="col-span-2 ..."><h3 class="text-lg md:text-2xl font-bold mb-4 ">{{ post.title }}</h3></div>
  <div class="row-span-2 col-span-2 text-slate-500"><p class="text-slate-600 text-left"  >{{post.introduction}}<br></p>
  <div class="grid grid-rows-3 grid-flow-col gap-4">
	    <div class="row-span-3 ..."><img class="rounded-full"></div>
   <p class="text-[#0e1217] text-sm text-left col-span-2">{{post.author.full_name }}</p>
  	<p class="text-sm text-left text-slate-600 row-span-2 col-span-2">{{post._createdAt }}</p>
	 </div>
	  </div>
</div>
				
	
					
					
				</div>
	



	
		

				

				

	
	
</template>

<script>

import { CreateURL, TextToHTML } from '../utils'
export default {
	name: 'postCard',
	props:["post"],
	data(){
		return{
CreateURL, TextToHTML,

		}
	}
	,methods: {
	
	

	}
}
</script>