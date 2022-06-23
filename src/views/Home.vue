<template>

<div class="bg-[#f9f6fd] h-full"><Navigator class="fixed"></Navigator>	<div class="container mx-auto p-4">
			<h1 class="text-2xl mb-8 mt-12">Latest posts</h1>

			<div class="grid gap-4">
				<postCard v-for="(post, i) in post" :key="i" :post="post" />
			</div>

			
		</div></div>
	
	

</template>

<script>

// @ is an alias to /src
import Navigator from '@/components/nav.vue'
import postCard from '@/components/postCard.vue'

export default {
  name: 'Home',
  components: {
   Navigator,
   postCard
  },data(){
    return{
post:{},

    }
  },beforeMount(){

	this.$store.dispatch('FetchPosts')
  },mounted(){
	if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
window.addEventListener('load',()=>{
	this.post=this.$store.state.post.home
		console.log(this.post)
		})
		}
}

</script>
