<template>
  <nav>
    <div class="bg-topnav">
      <div class="p-responsive d-flex fw">
        <div class="flex-auto text-left">
          <router-link :to="{ name: 'home' }">
            <h1 class="py-4 ticker">
              <img class="tick-sym" src="~/@/assets/logo.svg" />
              $RENA
            </h1>
          </router-link>
        </div>
        <div class="py-5 px-5">
          <a v-if="address" class="button button-info">
            <span class="login-bullet mr-2 ml-n2" />
            {{ name || shorten(address) }}
          </a>
          <a v-else class="button button-primary" @click="modalLoginOpen = true">
            Connect wallet
          </a>
        </div>
      </div>
    </div>
    <div class="mb-4 mt-n3">
      <div class="mainnav">
        <router-link :to="{ name: 'home' }" class="button button-secondary">
          HOME
        </router-link>
        <router-link :to="{ name: 'genesis' }" class="button button-secondary">
          GME
        </router-link>
        <router-link :to="{ name: 'stake' }" class="button button-secondary">
          STAKE
        </router-link>
        <router-link :to="{ name: 'vault' }" class="button button-secondary">
          VAULT
        </router-link>
        <router-link :to="{ name: 'burn' }" class="button button-secondary">
          BURN
        </router-link>
        <router-link :to="{ name: 'about' }" class="button button-secondary">
          ABOUT
        </router-link>
      </div>
    </div>
    <ModalLogin :open="modalLoginOpen" @close="modalLoginOpen = false" />
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import { shorten } from '@/helpers/utils';

export default {
  data() {
    return {
      modalLoginOpen: false
    };
  },
  computed: mapState({
    name: state => state.settings.name,
    address: state => state.settings.address
  }),
  methods: {
    shorten
  }
};
</script>
