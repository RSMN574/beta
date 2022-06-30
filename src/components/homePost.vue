 <template>
	<router-link :to="`/post/${homeP._id }`" class=""><div class=" mb-8 h-3/5 flex-row  items-center  flex  text-center shadow-lg border border-slate-300 bg-[#f5f8fc] rounded-xl   hover:scale-105 transition ease-in-out">


  <div class=" text-slate-500 basis-4/12 h-full w-full "> 
  		
  <img v-if="homeP.mainImage" :src="CreateURL(homeP.mainImage)" class=" h-full w-full rounded-lg ">
</div>

<h3 class="text-lg md:text-2xl font-bold  ">{{ homeP.title }}</h3><p class="text-slate-600 text-left break-all "  >{{homeP.introduction}}<br></p>
   <div class="flex items-center gap-2 p-4">
      <img class="rounded-full w-10 h-10" :src="( homeP.author.imageUrl  )">    <div class="flex flex-col">
        <strong class=" text-center text-slate-900 text-sm font-medium dark:text-slate-200">{{homeP.author.full_name }}</strong>
        <span class=" text-end text-slate-500 text-sm font-medium dark:text-slate-400">{{homeP._createdAt.slice(0,10) }}</span>
  
    
    </div>
   </div>



 </div>
 
	


				
	
					
					
			</router-link>




				

				

	
	
</template>

<script>

import sanity from '../client'
import { CreateURL, TextToHTML } from '../utils'
export default {
	name: 'homePost',
	props:["homeP"],
	data(){
		return{
CreateURL, TextToHTML,

		}
	},mounted(){
		console.log(this.homeP._id)
	}

	,computed:{

	}
	

	}

</script>
<style scoped>

</style>