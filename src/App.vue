<template>
  <div>
    <app-navbar></app-navbar>
    	<transition name="slide" mode="out-in">
    		<router-view></router-view>
    	</transition>
  </div>
</template>

<script>
// import Tips from './Tips.vue';
import Navbar from './Navbar.vue';

export default {
  components: {
      // appTips: Tips,
      appNavbar: Navbar
  }
} 
</script>

<style>
	body {
		padding-top: 50px;
	}

  .slide-enter-active {
    animation: slide-in ease-out 200ms forwards;
  }

  .slide-leave-active {
    animation: slide-out ease-out 200ms forwards;
  }

  @keyframes slide-in {
    
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }	
</style>

