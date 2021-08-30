<template>
  <div class="home">
    <navigator />
    <div class="page">
      <router-view/>
    </div>
    <buttomFooter />
  </div>
</template>

<script>
import navigator from '@/components/navigator.vue'
import buttomFooter from '@/components/footer.vue'
export default {
  name: 'Home',
  components:{
    navigator,
    buttomFooter
  },
  data() {
      return {
        
      }
  }
}
</script>
