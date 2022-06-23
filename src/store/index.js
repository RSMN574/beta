import { createStore } from 'vuex'

import sanity from '../client'
export default createStore({
  state: {
   post: {
     home:[],
    AndroidNewsPosts:[],
    AndroidPhonePosts:[], 
    AndroidFlashPosts:[], 
    aboutUs:[], 
    game:[],
     other:[],
     
   },
   cache:null,
 
  },
  mutations: {
    
		SET_POSTS (state, posts) {
      switch (posts.target) {
        case "AndroidNewsPosts":
          state.post.AndroidNewsPosts.push(posts)
          break;
          case "AndroidPhonePosts":
            state.post.AndroidPhonePosts.push(posts)
            break;
            case "AndroidFlashPosts":
              state.post.AndroidFlashPosts.push(posts)
              break;
              case "aboutUs":
                state.post.aboutUs.push(posts)
                break;
                case "game":
                  state.post.game.push(posts)
                  break;
                  case "home":
                    state.post.home.push(posts)
                    break;
        default:
          
            state.post.other.push(posts)
           
          break;
      }
			
		},SET_CACHE(state,n){
state.cache=n
    }, 

  },
  actions: {
    FetchPosts({ commit ,state,dispatch}, ) {
			const query = `*[ _type=="post" ]| order(_updatedAt) `

		 sanity.fetch(query).then(	async posts => {
        for(let i in posts){
          console.log(posts)
       posts[i].target=posts[i].category_pro
   
       posts[i].author.full_name=  await dispatch('FetchAuthor' ,posts[i].author._ref)
       posts[i].author.imageUrl=await dispatch('fetchAuthorImg' ,posts[i].author.full_name)
      
       commit('SET_POSTS', posts[i])
        }
		
        console.log(state.post)
      
			})

			}, 
 async FetchAuthor({context,},id){
       var re=""
   let author_id=id
 	 await sanity.fetch( `*[ _type=="author" && _id=="${author_id}"]`).then(author => {

 re=String( author[0].full_name)

        })
     
        return re
      },
      async fetchAuthorImg({context,},author){
        var re=""
             let query =`*[_type == 'author' && name =="${author}"]{
        name,
        "imageUrl": image.asset->url
      }`
        
       await sanity.fetch(query ).then(a=> {
      re=a[0].imageUrl
      console.log(a[0].imageUrl)
      
              })
         return re
            }
	
  },
  modules: {
  }
})
