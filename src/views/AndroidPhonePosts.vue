<template>
    <div class="bg-[#f9f6fd] h-full"><Navigator class="fixed"></Navigator>	<div class="container mx-auto p-4">
			<h1 class="text-2xl mb-8">Android最新資訊</h1>

			<div class="grid justify-items-stretch ">
				<postCard v-for="(post, i) in post" :key="i" :post="post" class="justify-self-center " />
			</div>

			
		</div></div>
	
	

			
	
</template>
<style scoped>

</style>

<script>
import postCard from '@/components/postCard.vue'
import Navigator from '@/components/nav.vue'
export default {
    name:'AndroidPhonePosts',
    components:{
        postCard,Navigator
    },data(){
        return{
post:{},
        }
    },beforeMount(){


  },mounted(){
    if(/reload/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 7))
			location.reload(true);

		}
window.addEventListener('load',()=>{
	this.post=this.$store.state.post.AndroidPhonePosts
		console.log(this.post)
		})
		}
}
</script>