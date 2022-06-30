 <template>
 <router-link :to="`/post/${ post._id }`" class=" max-h-48 w-9/12 h-full sm:w-6/12">
 <div class="max-w-md h-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-slate-300 bg-[#f5f8fc] rounded-xl md:max-w-2xl hover:scale-105 transition ease-in-out">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" v-if="post.mainImage" :src="CreateURL(post.mainImage)"  alt="">
    </div>
    <div class="p-4">
      
      <h1 class="block mt-1 text-lg leading-tight font-medium text-black ">{{ post.title }}</h1>
      <p class="mt-2 text-slate-500">{{post.introduction}}</p>
	     <div class="flex items-center gap-2 p-4 hidden sm:flex md:flex">
      <img class="rounded-full w-10 h-10" :src="( post.author.imageUrl  )">    <div class="flex flex-col">
        <strong class=" text-center text-slate-900 text-sm font-medium dark:text-slate-200 sm:text-base text-xs ">{{post.author.full_name }}</strong>
        <span class=" text-end text-slate-500 text-sm font-medium dark:text-slate-400">{{post._createdAt.slice(0,10) }}</span>
  
    
    </div>
   </div>
    </div>
  </div>
</div>
</router-link>
	
	
</template>

<script>

import sanity from '../client'
import { CreateURL, TextToHTML } from '../utils'
export default {
	name: 'postCard',
	props:["post"],
	data(){
		return{
CreateURL, TextToHTML,

		}
	},mounted(){
		
	}

	,computed:{

	}
	

	}

</script>
<style scoped>

</style>