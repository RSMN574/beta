<template>
    <div class="bg-[#f9f6fd] h-screen  "><Navigator ></Navigator>	<div class="container mx-auto p-4 ">
			<h1 class="text-2xl mb-8 mt-12">介紹</h1>
開發中
			

			
		</div></div>
	
	

			
	
</template>
<style scoped>

</style>

<script>


import Navigator from '@/components/nav.vue'
export default {
    name:'other',
    components:{
       Navigator
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
    this.$store.dispatch("fetchAuthorPost")
	this.post=this.$store.state.post.other
		console.log(this.post)
		})
		}
}

</script>