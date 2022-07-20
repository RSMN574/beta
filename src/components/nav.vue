<template>
  <div class=" sm:hidden inline  h-32 font-sans antialiased  fixed  left-0 w-screen ">
    <nav
      class="border-b border-slate-900/10 backdrop-blur-lg bg-white/30 h-16 rounded-sm "
    >
      <ul class="inline-block">
         <router-link to="/?reload">
          <li class="inline-block m-4">  <img class="w-8 " src="../assets/a-k-o-f.svg"></li>
        </router-link>
      
        <router-link to="/AndroidNewsPosts?reload">
          <li class="inline-block m-4 align-top">Android最新資訊</li>
        </router-link>
        <router-link to="/AndroidPhonePosts?reload">
          <li class="inline-block m-4 align-top">Android手機</li>
        </router-link>
        <router-link to="/AndroidFlashPosts?reload">
          <li class="inline-block m-4 align-top">Android刷機</li>
        </router-link>
        <router-link to="/other?reload">
          <li class="inline-block m-4 align-top">其他</li>
        </router-link>
        <router-link to="/aboutUs?reload">
          <li class="inline-block m-4 align-top">關於我們</li>
        </router-link>
        <router-link to="/game?reload">
          <li class="inline-block m-4 align-top">電玩專區</li>
        </router-link>
      </ul>
    </nav>
  </div>

  <div class=" sm:block hidden container mx-auto  font-sans antialiased">
    <nav
      class="border-b border-slate-900/10 backdrop-blur-sm bg-white/30 h-16 rounded-sm"
      :class="navShows"
    >
      <div
        @click="
          shows = 'block  animate__fadeInDown';
          navShows = 'hidden ';
        "
      >
        <span
          class="material-symbols-outlined inset-y-4 left-4 absolute cursor-pointer"
        >
          menu
        </span>
      </div>
    </nav>
    <div :class="shows">
      <div
        class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 h-screen"
      ></div>
      <div
        class="relative bg-white h-screen w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800"
      >
        <span
          class="cursor-pointer material-symbols-outlined"
          @click="
            shows = 'hidden';
            navShows = 'block ';
          "
        >
          menu_open
        </span>
            <router-link to="/?reload">
          <li class=" m-4">首頁</li>
        </router-link>
        <router-link to="/AndroidNewsPosts?reload">
          <li class=" m-4">Android最新資訊</li>
        </router-link>
        <router-link to="/AndroidPhonePosts?reload">
          <li class=" m-4">Android手機</li>
        </router-link>
        <router-link to="/AndroidFlashPosts?reload">
          <li class=" m-4">Android刷機</li>
        </router-link>
        <router-link to="/other?reload">
          <li class=" m-4">其他</li>
        </router-link>
        <router-link to="/aboutUs?reload">
          <li class=" m-4">關於我們</li>
        </router-link>
        <router-link to="/game?reload">
          <li class=" m-4">電玩專區</li>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      shows: "hidden",
      navShows: "block",
    };
  },
  methods: {},
  mounted(){
    var ua = navigator.userAgent;
    var android = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; // android
    if(android==true){

}
  }
};
</script>

<style scoped></style>
