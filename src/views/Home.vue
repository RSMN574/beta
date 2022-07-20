<template>
<div class="bg-[#f9f6fd] h-screen overflow-y-scroll"><Navigator class="fixed"></Navigator>	<div class="container mx-auto p-4">
		
			

		<div class="mt-24 grid  auto-rows-auto lg:grid-cols-3 sm:grid-cols-1 sm:w-full mx-auto md:grid-cols-2">
<homePost v-for="(post, i) in home" :key="i" :post="post" ></homePost>

</div >	
		

			
		</div></div>
	
	

</template>

<script>

// @ is an alias to /src
import sanity from '../client'
import Navigator from '@/components/nav.vue'
import postCard from '@/components/postCard.vue'
import homePost from '@/components/homePost.vue'
export default {
  name: 'Home',
  components: {
   Navigator,
   postCard,
   homePost
  },data(){
    return{
post:{},
home:[]

    }
  },beforeMount(){

	
  },mounted(){
	if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
window.addEventListener('load',()=>{
		const query = '*[_type == "home" ] '
		
			
			sanity.fetch(query).then(async data => {
	         this.home=data
			

		
		
			})


		
		})
		}
}

</script>
