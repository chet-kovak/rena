<template>
<div>
    
    <div id="app" class="overflow-hidden pb-6">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div v-else>
        <Nav />
        <router-view :key="$route.path" />
      </div>
      
  </div>    
  <div class="background2"></div>
 <vue-particles
        class="vue-particles"
        color="#000000"
        :particleOpacity="1"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="10"
        linesColor="#222"
        :linesWidth="0.5"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="100"
        :moveSpeed="50"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['settings'])
  },
  methods: {
    ...mapActions(['init'])
  },
  async created() {
    this.init();
  }
};
</script>
