 <template>
	<router-link :to="`/post/${post._id }`" class="col-span-1">
				<div class="mx-auto mt-8  rounded-lg border-2 transition ease-in-out hover:scale-105">
  <h1 class="mx-4 mt-4 mb-1 rounded bg-red-400 text-center text-white">{{post.title}}</h1>
  <p class="mx-4">{{post._createdAt.slice(0,10)}}</p>
  <img class="" v-if="post.mainImage" :src="CreateURL(post.mainImage)" alt="" />
  <h1 class="m-4 mx-auto w-44 rounded bg-blue-500 text-center text-white">閱讀更多</h1>
</div>
	
					
			</router-link>




				

				

	
	
</template>

<script>

import sanity from '../client'
import { CreateURL, TextToHTML } from '../utils'
export default {
	name: 'homePost',
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